$("#btnAceptarMaterial").click(altaMaterial);
$("#btnBorrarMaterial").click(borrarDatos);
$("#btnCancelarMaterial").click(cancelar);

function altaMaterial()
{
    validarAltaMaterial();

    var oCliente = {
        Codigo: frmAltaMaterial.txtCodMat.value,
        Nombre: frmAltaMaterial.txtNombreMat.value,
        Precio: frmAltaMaterial.txtPrecioMat.value,
        Descripcion: frmAltaMaterial.txtDescripcionMat.value
    };
    //  IMPORTANTE: EL NOMBRE DE LOS PARAMETROS ENVIADOS DIFIERE EN EL CASO DEL OBJETO LITERAL
    var sParametros = "datos=" + JSON.stringify(oCliente);

    $.post("php/altaMaterial.php", sParametros, respuestaAltaMaterial, 'json');

    function respuestaAltaMaterial(oDatos, sStatus, oXHR) 
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
    frmAltaMaterial.reset();
}

function cancelar(){
    borrarDatos();
    frmAltaMaterial.style.display="none";
}
