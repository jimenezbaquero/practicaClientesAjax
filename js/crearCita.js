//# sourceURL=altaProducto.js;

$("#btnAceptarCita").click(procesoCrearCita);
$("#lupa").click(buscarCliente);
$("#btnAgregarOperario").click(agregarOperario);
$("#btnQuitarOperario").click(quitarOperarios);
$("#btnAgregarMaterial").click(agregarMaterial);
$("#btnQuitarMaterial").click(quitarMateriales);



cargarComboOperarios();
cargarComboMateriales();


function procesoCrearCita(){

    if(validarCita){

        $.ajax({
            url: "php/crearCita.php",
            type: "POST",
            async: false,
            data:  $("#frmCita").serialize(),
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
        frmCita.reset();
        $("#divFrmCita").hide();
    }
}



function validarCita(){
    var sError = "";
    var bValido = true;

    if (frmCita.txtNombreCita=""){
        sError += "Debe introducir un cliente";
        bValido =false;
    }

    if (frmCita.txtFechaCita=""){
        sError += "Debe elegir una fecha";
        bValido = false;
    }

    if (!bValido)
        alert(sError);

    return bValido; 
}


function cargarComboOperarios(){

	if (localStorage["operarios"] != undefined) {
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

function agregarOperario(){

}

function quitarOperarios(){

}

function agregarMaterial(){

}

function quitarMateriales(){

}