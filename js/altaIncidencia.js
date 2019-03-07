
$("#btnAceptarInc").click(procesoAltaIncidencia);

rellenarCitas();
var numeroIncidencia = 0;

function procesoAltaIncidencia(){
	if(validarIncidencia()){
		var numCita = frmAltaIncidencia.lstCitas.value;
		obtenerIncidencia(numCita);
		$.get("php/altaIncidencia.php?cita="+numCita+"&incidencia="+numeroIncidencia+"&descripcion="+frmAltaIncidencia.txtDescInc.value,null,procesoRespuestaAltaIncidencia,"json");

	}


}

function procesoRespuestaAltaIncidencia(oDatos){


    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        frmAltaIncidencia.reset();
        $("#frmAltaIncidencia").hide("normal");
         $("#divGestion").show("normal");
    }
}



function validarIncidencia(){

	var sError = "";
    var bValido = true;

    if (frmAltaIncidencia.txtDescInc.value == ""){
    	sError = "Debe escribir una descripcion";
    	bValido = false;
    }

    if (!bValido)
        alert(sError);


    return bValido; 


}

function rellenarCitas(){
	$.get("php/rellenarCitas.php",null,procesoRespuestaRellenarCitas,"html");
}

function procesoRespuestaRellenarCitas(sDatos){
	$("#lstCitas").html(sDatos);

}

function obtenerIncidencia(iCita){
	$.get("php/obtenerIncidencia.php?cita="+iCita,function(sDato){numeroIncidencia=sDato},"text");

}