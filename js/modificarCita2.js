//# sourceURL=altaProducto.js; if (sessionStorage["materiales"] != undefined) {

$("#btnAceptarCitaMod").click(procesoModificarCita);
$("#btnBorrarModificarCita").click(borrarDatos);
$("#lupaMod").click(buscarCliente);
$("#btnAgregarOperarioMod").click(agregarOperarioMod);
$("#btnQuitarOperarioMod").click(quitarOperariosMod);
$("#btnAgregarMaterialMod").click(agregarMaterialMod);
$("#btnQuitarMaterialMod").click(quitarMaterialesMod);



function procesoModificarCita(){

    if(validarCita()){

       
        var optionsOperario = frmModificarCita2.lstOperarioCitaMod.options;
        var optionsMateriales = frmModificarCita2.lstMaterialCitaMod.options;
        var aOperarios =[];
        var aMateriales = [];

        for (var i=0;i<optionsOperario.length;i++)
            aOperarios.push(optionsOperario[i].value);


        for (var i=0;i<optionsMateriales.length;i++)
            aMateriales.push(optionsMateriales[i].value);


        var datos={
            numero:frmModificarCita2.txtNumCitaMod.value,
            cliente:frmModificarCita2.txtClienteCitaMod.value,
            fecha:frmModificarCita2.txtFechaCitaMod.value,
            descripcion:frmModificarCita2.txtDescripcionCitaMod.value.trim()
        };




        var sDatos = "datos="+JSON.stringify(datos);
        var sOperarios = "operarios="+JSON.stringify(aOperarios);
        var sMateriales = "materiales="+JSON.stringify(aMateriales);


        $.ajax({
            url: "php/modificarCita2.php",
            type: "POST",
            async: false,
            data:  sDatos+"&"+sOperarios+"&"+sMateriales,
            dataType: "json",
            success: procesoRespuestaCitaModificar
        });

    }
}

function procesoRespuestaCitaModificar(oDatos){
    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        $("#frmModificarCita2").hide("normal");
        $("#divGestion").show("normal");
    }
}



function validarCita(){
    var sError = "";
    var bValido = true;

    if (frmModificarCita2.txtNombreCitaMod.value==""){
        sError += "Debe introducir un cliente\n";
        bValido =false;
    }

    if (frmModificarCita2.txtFechaCitaMod.value==""){
        sError += "Debe elegir una fecha\n";
        bValido = false;
    }

    if (frmModificarCita2.txtDescripcionCitaMod.value.trim()==""){
        sError += "Debe indicar una descripcion";
        bValido = false;
    }

    if (!bValido)
        alert(sError);


    return bValido; 
}



function buscarCliente(){

    var sDni = frmModificarCita2.txtClienteCitaMod.value.trim();
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
                    frmModificarCita2.txtNombreCitaMod.value=oRespuesta.nombre;
                    frmModificarCita2.txtDireccionCitaMod.value=oRespuesta.direccion;   
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


function agregarOperarioMod(){
    var valor = frmModificarCita2.lstOperarioAgregarCitaMod.value;
    var desc = frmModificarCita2.lstOperarioAgregarCitaMod.options[frmModificarCita2.lstOperarioAgregarCitaMod.selectedIndex].text;
    var option = "<option value='"+valor+"'>"+desc+"</option>";
    if (sessionStorage['operariosMod'].indexOf(option)<0)
        sessionStorage['operariosMod']+="<option value='"+valor+"'>"+desc+"</option>";
    $("#lstOperarioCitaMod").html(sessionStorage['operariosMod']);
}

function quitarOperariosMod(){
    var opciones = frmModificarCita2.lstOperarioCitaMod.selectedOptions;
    for (var i=0;i<opciones.length;i++){
        var sTexto = "<option value='"+opciones[i].value+"'>"+opciones[i].text+"</option>";
        alert (sTexto);
        sessionStorage['operariosMod']=sessionStorage['operariosMod'].replace(sTexto,"");
    }
        $("#lstOperarioCitaMod").html(sessionStorage['operariosMod']);
    
}

function agregarMaterialMod(){
  var valor = frmModificarCita2.lstMaterialAgregarCitaMod.value;
    var desc = frmModificarCita2.lstMaterialAgregarCitaMod.options[frmModificarCita2.lstMaterialAgregarCitaMod.selectedIndex].text;
    var option = "<option value='"+valor+"'>"+desc+"</option>";
    if (sessionStorage['materialesMod'].indexOf(option)<0)
        sessionStorage['materialesMod']+="<option value='"+valor+"'>"+desc+"</option>";
    $("#lstMaterialCitaMod").html(sessionStorage['materialesMod']);
}



function quitarMaterialesMod(){

    var opciones = frmModificarCita2.lstMaterialCitaMod.selectedOptions;
    for (var i=0;i<opciones.length;i++){
        var sTexto = "<option value='"+opciones[i].value+"'>"+opciones[i].text+"</option>";
        alert (sTexto);
        sessionStorage['materialesMod']=sessionStorage['materialesMod'].replace(sTexto,"");
    }
        $("#lstMaterialCitaMod").html(sessionStorage['materialesMod']);

}


