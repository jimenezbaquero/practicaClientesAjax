
$("#btnAceptarCitas").click(listarCitasPorFechas);
$("#btnCancelarCitas").click(cancelar);


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
    $( "#txtFechaInicioCitasPer" ).datepicker();
  } );

   $( function() {
    $( "#txtFechaFinCitasPer" ).datepicker();
  } );




function listarCitasPorFechas(){

	var fechaInicial = frmFechasCitas.txtFechaInicioCitasPer.value;
	var fechaFinal = frmFechasCitas.txtFechaFinCitasPer.value

	if(fechaInicial==""||fechaFinal==""||fechaInicial>fechaFinal)
		alert("Elija una fecha inicial anterior a la fecha final");
	else{
		$.get("php/listadoCitasPorFecha.php","fechaInicio="+fechaInicial+"&fechaFin="+fechaFinal,procesoRespuestaListadoFechas,"xml");
	
	}


}

function procesoRespuestaListadoFechas (oXML){

	    var arrayCitas = oXML.querySelectorAll("CITA");
    	var sTabla = "<table id='tablaFechas' class='table'><thead><tr><th>NUMERO</th><th>FECHA</th><th>CLIENTE</th><th>DESCRIPCION</th>";
    	sTabla += "<th>OPERARIOS</th><th>MATERIALES</th></tr></thead>";



    for (var i = 0; i < arrayCitas.length; i++) {

        sTabla += '<tr><td>'+arrayCitas[i].querySelector("NUMERO").textContent+"</td>";
        sTabla += '<td>'+arrayCitas[i].querySelector("FECHA").textContent+"</td>";
        sTabla += '<td>'+arrayCitas[i].querySelector("CLIENTE").textContent+"</td>";
        sTabla += '<td>'+arrayCitas[i].querySelector("DESCRIPCION").textContent+"</td>";
        sTabla += '<td>';

        var arrayOperarios = arrayCitas[i].querySelectorAll("OPERARIO");
        var sOperario="";
        for (var j = 0; j < arrayOperarios.length; j++) {
        	if(j>0)
        		sOperario +=",";
        	sOperario += arrayOperarios[j].querySelector("NOMBRE").textContent;
      }
        sTabla += sOperario+"</td><td>";

        var arrayMateriales = arrayCitas[i].querySelectorAll("MATERIAL");
        var sMaterial="";
        for (var j = 0; j < arrayMateriales.length; j++) {
        	if(j>0)
        		sMaterial +=",";
        	sMaterial += arrayMateriales[j].querySelector("NOMBRE").textContent;
      }
        sTabla += sMaterial+"</td></tr>";
    }
ocultarFormularios();
    $("#listados").html(sTabla);

    $("#tablaFechas").DataTable();
    
} 

function cancelar(){

    $("#divGestion").show("normal");
    frmFechasCitas.style.display="none";
}