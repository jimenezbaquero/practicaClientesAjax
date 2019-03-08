
$("#btnAceptarCitasCliente").click(listarCitasPorClientes);
function listarCitasPorClientes(){

	$.get("php/listadoCitasCliente.php","cliente="+frmCitasCliente.lstDniCitaCli.value,procesoRespuestaListadoFechas,"xml");
	
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

    $("#formularios").html(sTabla);

    $("#tablaFechas").DataTable();
    
} 
