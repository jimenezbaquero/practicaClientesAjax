$("#btnAceptarBorrarOperario").click(procesoBorrarOperario);
$("#btnCancelarBorrarOperario").click(cancelarBorrarOperario);

function procesoBorrarOperario(){
        $.ajax({
            url: "php/borrarOperario.php",
            type: "POST",
            async: false,
            data:  "operario="+frmBorrarOperario.lstOperarioBor.value,
            dataType: "json",
            success: procesoRespuestaOperarioBor
        });
    }

function procesoRespuestaOperarioBor(oDatos){
        if (oDatos.error) {
            alert(oDatos.mensaje);
        } else {
            alert(oDatos.mensaje);
            cancelarBorrarOperario();
            localStorage.removeItem('operarios');
            $('#frmBorrarOperario').hide("normal");
            $("#divGestion").show("normal");
        }
    }

function cancelarBorrarOperario(){
    $('#frmBorrarOperario').hide("normal");
    $("#divGestion").show("normal");   
}


