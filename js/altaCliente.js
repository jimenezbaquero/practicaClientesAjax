$("#btnAceptarCliente").click(altaCliente);
$("#btnBorrarCliente").click(borrarDatos);
$("#btnCancelarCliente").click(cancelar);

function altaCliente()
{
    validarCliente();

    var oCliente = {
        NIF: document.getElementById("txtDniCli").value.trim(),
        Nombre: document.getElementById("txtNombreCli").value.trim(),
        Direccion: document.getElementById("txtDireccionCli").value.trim(),
        Telefono: document.getElementById("txtTfnoCli").value.trim()
    };
    //  IMPORTANTE: EL NOMBRE DE LOS PARAMETROS ENVIADOS DIFIERE EN EL CASO DEL OBJETO LITERAL
    var sParametros = "datos=" + JSON.stringify(oCliente);

    $.post("php/altaCliente.php", sParametros, respuestaAltaCliente, 'json');

    function respuestaAltaCliente(oDatos, sStatus, oXHR) 
    {
        if (oDatos.error) {
            alert(oDatos.mensaje);
        } else {
            alert(oDatos.mensaje);
            cancelar();
            $("#divGestion").show("normal");
        }
    }
}

function borrarDatos(){
    frmAltaCliente.reset();
}

function cancelar(){
    borrarDatos();
    $("#divGestion").show("normal");
    frmAltaCliente.style.display="none";
}
