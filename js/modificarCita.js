//# sourceURL=altaProducto.js; if (sessionStorage["materiales"] != undefined) {


$("#btnAceptarModificarCita").click(procesoModificarCita);
$("#btnCancelarModificarCita").click(cancelar);

cargarComboOperariosMod();
cargarComboMaterialesMod();

function procesoModificarCita(){



        $("#frmModificarCita").hide("normal");
               // Oculto todos los formularios menos este
        $("form:not('#frmModificarCita2')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmModificarCita2').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/ModificarCita2.html", function(){
                $.getScript("js/modificarCita2.js");
            });
            
        } else {    
            
            // Lo muestro si está oculto
            $('#frmModificarCita2').show("normal");
        }

        $.ajax({
            url: "php/modificarCita.php",
            type: "GET",
            async: true,
            data:  "cita="+frmModificarCita.lstCitasMod.value,
            dataType: "json",
            success: procesoRespuestaCitaMod
        });

    }


function procesoRespuestaCitaMod(oDatos){
    
       
        cargarComboOperariosMod();
        cargarComboMaterialesMod();
    
        $("#txtNumCitaMod").val(oDatos.numero);
        $("#txtFechaCitaMod").val(oDatos.fecha);
        $("#txtClienteCitaMod").val(oDatos.cliente);
        $("#txtDescripcionCitaMod").val(oDatos.descripcion);
        $("#lstOperarioCitaMod").html(oDatos.operarios);
        $("#lstMaterialCitaMod").html(oDatos.materiales);
        $("#txtNombreCitaMod").val(oDatos.nombre);
        $("#txtDireccionCitaMod").val(oDatos.direccion);
        sessionStorage['operariosMod']=oDatos.operarios;
        sessionStorage['materialesMod']=oDatos.materiales;
        
}




function cargarComboOperariosMod(){

	if (localStorage["operarios"] != undefined && localStorage["operarios"] !="") {
        $("#lstOperarioAgregarCitaMod").html(localStorage["operarios"]);
    } else {
    	var oAjax = instanciarXHR();

    	oAjax.open("GET","./php/cargaOperarios.php");
    	oAjax.addEventListener("readystatechange",procesoRespuestaCargaOperariosMod,false);
    	oAjax.send();
      
    }
}

function procesoRespuestaCargaOperariosMod() {

	var oAjax = this;

    if (oAjax.readyState == 4 && oAjax.status == 200) {
    	var oRespuesta = JSON.parse(oAjax.responseText);

		localStorage["operarios"] = oRespuesta.codigo;
  	}

    $("#lstOperarioAgregarCitaMod").html(localStorage["operarios"]);
}


function cargarComboMaterialesMod(){

    if (localStorage["materiales"] != undefined) {
        $("#lstMaterialAgregarCitaMod").html(localStorage["materiales"]);
    } else {
        var oAjax = instanciarXHR();

        oAjax.open("GET","./php/cargaMateriales.php");
        oAjax.addEventListener("readystatechange",procesoRespuestaCargaMaterialesMod,false);
        oAjax.send();
      
    }
}

function procesoRespuestaCargaMaterialesMod() {

    var oAjax = this;

    if (oAjax.readyState == 4 && oAjax.status == 200) {
        var oRespuesta = JSON.parse(oAjax.responseText);

        localStorage["materiales"] = oRespuesta.codigo;
    }

    $("#lstMaterialAgregarCitaMod").html(localStorage["materiales"]);
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






function cancelar(){
    $("#divGestion").show("normal");
    frmModificarCita.style.display="none";
}