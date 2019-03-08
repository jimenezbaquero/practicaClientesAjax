//# sourceURL=altaProducto.js; if (sessionStorage["materiales"] != undefined) {
borrarDatos();

$("#btnAceptarCita").click(procesoCrearCita);
$("#btnBorrarCita").click(borrarDatos);
$("#lupa").click(buscarCliente);
$("#btnAgregarOperario").click(agregarOperario);
$("#btnQuitarOperario").click(quitarOperarios);
$("#btnAgregarMaterial").click(agregarMaterial);
$("#btnQuitarMaterial").click(quitarMateriales);


cargarComboOperarios();
cargarComboMateriales();

//Campo fecha como datepicker de jQuery-UI

 $.datepicker.regional['es'] = {
 closeText: 'Cerrar',
 prevText: '< Ant',
 nextText: 'Sig >',
 currentText: 'Hoy',
 monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
 monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
 dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
 dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
 dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
 weekHeader: 'Sm',
 dateFormat: 'yy/mm/dd',
 firstDay: 1,
 isRTL: false,
 showMonthAfterYear: false,
 yearSuffix: ''
 };
 $.datepicker.setDefaults($.datepicker.regional['es']);

  $( function() {
    $( "#txtFechaCita" ).datepicker();
  } );

 

function procesoCrearCita(){

    if(validarCita()){
       
        var optionsOperario = frmCita.lstOperarioCita.options;
        var optionsMateriales = frmCita.lstMaterialCita.options;
        var aOperarios =[];
        var aMateriales = [];

        for (var i=0;i<optionsOperario.length;i++)
            aOperarios.push(optionsOperario[i].value);


        for (var i=0;i<optionsMateriales.length;i++)

            aMateriales.push(optionsMateriales[i].value);

       

        var datos={
            numero:frmCita.txtNumCita.value,
            cliente:frmCita.txtClienteCita.value,
            fecha:frmCita.txtFechaCita.value,
            descripcion:frmCita.txtDescripcionCita.value.trim()
        };




        var sDatos = "datos="+JSON.stringify(datos);
        var sOperarios = "operarios="+JSON.stringify(aOperarios);
        var sMateriales = "materiales="+JSON.stringify(aMateriales);


        $.ajax({
            url: "php/crearCita.php",
            type: "POST",
            async: false,
            data:  sDatos+"&"+sOperarios+"&"+sMateriales,
            dataType: "json",
            success: procesoRespuestaCita
        });

    }
}

function procesoRespuestaCita(oDatos){
    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        borrarDatos();
        $("#frmCita").hide("normal");
         $("#divGestion").show("normal");
    }
}



function validarCita(){
    var sError = "";
    var bValido = true;

    if (frmCita.txtNombreCita.value==""){
        sError += "Debe introducir un cliente\n";
        bValido =false;
    }

    if (frmCita.txtFechaCita.value==""){
        sError += "Debe elegir una fecha\n";
        bValido = false;
    }

    if (frmCita.txtDescripcionCita.value.trim()==""){
        sError += "Debe indicar una descripcion";
        bValido = false;
    }

    if (!bValido)
        alert(sError);


    return bValido; 
}


function cargarComboOperarios(){

	if (localStorage["operarios"] != undefined && localStorage["operarios"] !="") {
        $("#lstOperarioAgregarCita").html(localStorage["operarios"]);
    } else {
    	var oAjax = instanciarXHR();

    	oAjax.open("GET","./php/cargaOperarios.php");
    	oAjax.addEventListener("readystatechange",procesoRespuestaCargaOperarios,false);
    	oAjax.send();
      
    }
}

function procesoRespuestaCargaOperarios() {

	var oAjax = this;

    if (oAjax.readyState == 4 && oAjax.status == 200) {
    	var oRespuesta = JSON.parse(oAjax.responseText);

		localStorage["operarios"] = oRespuesta.codigo;
  	}

    $("#lstOperarioAgregarCita").html(localStorage["operarios"]);
}


function cargarComboMateriales(){

    if (localStorage["materiales"] != undefined) {
        $("#lstMaterialAgregarCita").html(localStorage["materiales"]);
    } else {
        var oAjax = instanciarXHR();

        oAjax.open("GET","./php/cargaMateriales.php");
        oAjax.addEventListener("readystatechange",procesoRespuestaCargaMateriales,false);
        oAjax.send();
      
    }
}

function procesoRespuestaCargaMateriales() {

    var oAjax = this;

    if (oAjax.readyState == 4 && oAjax.status == 200) {
        var oRespuesta = JSON.parse(oAjax.responseText);

        localStorage["materiales"] = oRespuesta.codigo;
    }

    $("#lstMaterialAgregarCita").html(localStorage["materiales"]);
}
function instanciarXHR()
{
    var xhttp = null;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } 
    else // code for IE5 and IE6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return xhttp;
}

function buscarCliente(){

    var sDni = frmCita.txtClienteCita.value.trim();
    var sDatos="dni="+sDni;

    if(sDni!="")
    {
        $.ajax({
            url :"php/buscarCliente.php",
            async : false,
            cache : false, 
            method : "GET", 
            dataType : "text",
            data : "dni="+sDni,
            complete : function(oAjax, sStatus)
            {
                var oRespuesta = JSON.parse(oAjax.responseText);
                if(oRespuesta.nombre!="NO EXISTE"){
                    frmCita.txtNombreCita.value=oRespuesta.nombre;
                    frmCita.txtDireccionCita.value=oRespuesta.direccion;   
                }else {
                    alert ("El DNI introducido no pertenece a ningún cliente");
                }
            }
        });
    }
    else
    {
        alert("Introduzca un dni");
    }


}

function obtenerNumeroCita(){
    $.get("php/obtenerNumeroCita.php",null,procesoRespuestaNumero,"text");
}

function procesoRespuestaNumero(sNumero){
    frmCita.txtNumCita.value=sNumero;
}

function agregarOperario(){
    var valor = frmCita.lstOperarioAgregarCita.value;
    var desc = frmCita.lstOperarioAgregarCita.options[frmCita.lstOperarioAgregarCita.selectedIndex].text;
    var option = "<option value='"+valor+"'>"+desc+"</option>";
    if (sessionStorage['operarios'].indexOf(option)<0)
        sessionStorage['operarios']+="<option value='"+valor+"'>"+desc+"</option>";
    $("#lstOperarioCita").html(sessionStorage['operarios']);
}

function quitarOperarios(){
    var opciones = frmCita.lstOperarioCita.selectedOptions;
    for (var i=0;i<opciones.length;i++){
        var sTexto = "<option value='"+opciones[i].value+"'>"+opciones[i].text+"</option>";
        alert (sTexto);
        sessionStorage['operarios']=sessionStorage['operarios'].replace(sTexto,"");
    }
        $("#lstOperarioCita").html(sessionStorage['operarios']);
    
}

function agregarMaterial(){
  var valor = frmCita.lstMaterialAgregarCita.value;
    var desc = frmCita.lstMaterialAgregarCita.options[frmCita.lstMaterialAgregarCita.selectedIndex].text;
    var option = "<option value='"+valor+"'>"+desc+"</option>";
    if (sessionStorage['materiales'].indexOf(option)<0)
        sessionStorage['materiales']+="<option value='"+valor+"'>"+desc+"</option>";
    $("#lstMaterialCita").html(sessionStorage['materiales']);
}



function quitarMateriales(){

    var opciones = frmCita.lstMaterialCita.selectedOptions;
    for (var i=0;i<opciones.length;i++){
        var sTexto = "<option value='"+opciones[i].value+"'>"+opciones[i].text+"</option>";
        alert (sTexto);
        sessionStorage['materiales']=sessionStorage['materiales'].replace(sTexto,"");
    }
        $("#lstMaterialCita").html(sessionStorage['materiales']);

}

function borrarDatos(){
    frmCita.reset();
    obtenerNumeroCita();
    sessionStorage['materiales']="";
    sessionStorage['operarios']="";
    $("#lstMaterialCita").html("");
    $("#lstOperarioCita").html("");
}
