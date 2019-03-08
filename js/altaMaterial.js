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
   
    var sParametros = "datos=" + JSON.stringify(oCliente);

    $.post("php/altaMaterial.php", sParametros, respuestaAltaMaterial, 'json');

    function respuestaAltaMaterial(oDatos, sStatus, oXHR) 
    {
        if (oDatos.error) {
            alert(oDatos.mensaje);
        } else {
            localStorage.removeItem('materiales');
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
    
    $("#divGestion").show("normal");
    frmAltaMaterial.style.display="none";
}
