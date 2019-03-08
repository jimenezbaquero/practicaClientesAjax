$("#btnAceptarBorrarMaterial").click(procesoBorrarMaterial);
$("#btnCancelarBorrarMaterial").click(cancelarBorrarMaterial);

function procesoBorrarMaterial(){
        $.ajax({
            url: "php/borrarMaterial.php",
            type: "POST",
            async: false,
            data:  "material="+frmBorrarMaterial.lstMaterialBor.value,
            dataType: "json",
            success: procesoRespuestaMaterialBor
        });
    }

function procesoRespuestaMaterialBor(oDatos){
        if (oDatos.error) {
            alert(oDatos.mensaje);
        } else {
            alert(oDatos.mensaje);
            cancelarBorrarMaterial();
            localStorage.removeItem('materiales');
            $('#frmBorrarMaterial').hide("normal");
            $("#divGestion").show("normal");
        }
    }

function cancelarBorrarMaterial(){
    $('#frmBorrarMaterial').hide("normal");
    $("#divGestion").show("normal");   
}


