$("#btnAceptarBorrarCliente").click(procesoBorrarCliente);
$("#btnCancelarBorrarCliente").click(cancelarBorrarCliente);

function procesoBorrarCliente(){
        $.ajax({
            url: "php/borrarCliente.php",
            type: "POST",
            async: false,
            data:  "cliente="+frmBorrarCliente.lstClienteBor.value,
            dataType: "json",
            success: procesoRespuestaClienteBor
        });
    }

function procesoRespuestaClienteBor(oDatos){
        if (oDatos.error) {
            alert(oDatos.mensaje);
        } else {
            alert(oDatos.mensaje);
            cancelarBorrarCliente();
            $('#frmBorrarCliente').hide("normal");
            $("#divGestion").show("normal");
        }
    }

function cancelarBorrarCliente(){
    $('#frmBorrarCliente').hide("normal");
    $("#divGestion").show("normal");   
}


