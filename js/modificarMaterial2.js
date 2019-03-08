$("#btnAceptarModificarDatosMaterial").click(procesoModificarMaterial);
$("#btnCancelarModificarDatosMaterial").click(cancelar);


function procesoModificarMaterial(){

    validarMaterialMod();

        var datos={
            CODIGO:frmModificarDatosMaterial.txtCodModificarDatosMaterial.value,
            NOMBRE:frmModificarDatosMaterial.txtNombreModificarDatosMaterial.value,
            PRECIO:frmModificarDatosMaterial.txtPrecioModificarDatosMaterial.value,
            DESCRIPCION:frmModificarDatosMaterial.txtDescripcionModificarDatosMaterial.value.trim()
        };

        var sDatos = "datos="+JSON.stringify(datos);

        $.ajax({
            url: "php/modificarMaterial2.php",
            type: "POST",
            async: false,
            data:  sDatos,
            dataType: "json",
            success: procesoRespuestaMaterialModificar
        });
}

function procesoRespuestaMaterialModificar(oDatos){
    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        localStorage.removeItem('materiales');
        $("#frmModificarDatosMaterial").hide("normal");
        $("#divGestion").show("normal");
    }
}

function cancelar(){
    $("#divGestion").show("normal");
    frmModificarDatosMaterial.style.display="none";
}