$("#btnAceptarModificarDatosCliente").click(procesoModificarCliente);
$("#btnCancelarModificarDatosCliente").click(cancelar);


function procesoModificarCliente(){

        //validarClienteMod();

        var datos={
            DNI:frmModificarDatosCliente.txtDniModificarDatosCliente.value,
            NOMBRE:frmModificarDatosCliente.txtNombreModificarDatosCliente.value,
            DIRECCION:frmModificarDatosCliente.txtDireccionModificarDatosCliente.value,
            TELEFONO:frmModificarDatosCliente.txtTfnoModificarDatosCliente.value.trim()
        };

        var sDatos = "datos="+JSON.stringify(datos);

        $.ajax({
            url: "php/modificarCliente2.php",
            type: "POST",
            async: false,
            data:  sDatos,
            dataType: "json",
            success: procesoRespuestaClienteModificar
        });
}

function procesoRespuestaClienteModificar(oDatos){
    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        $("#frmModificarDatosCliente").hide("normal");
        $("#divGestion").show("normal");
    }
}

function cancelar(){
    $("#divGestion").show("normal");
    frmModificarDatosCliente.style.display="none";
}