$("#btnAceptarModificarMaterial").click(procesoModificarMaterial);
$("#btnCancelarModificarMaterial").click(cancelar);



function procesoModificarMaterial(){
        $("#frmModificarMaterial").hide("normal");
               // Oculto todos los formularios menos este
        $("form:not('#frmModificarDatosMaterial')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes

       if ($('#frmModificarDatosMaterial').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/modificarMaterial2.html", function(){
                $.getScript("js/modificarMaterial2.js");
            });
           
        } else {    
            
            // Lo muestro si está oculto
            $('#frmModificarDatosMaterial').show("normal");
        }


        $.ajax({
            url: "php/modificarMaterial.php",
            type: "GET",
            async: false,
            cache: false,
            data:  "material="+frmModificarMaterial.lstMaterialesMod.value,
            dataType: "json",
            success: procesoRespuestaMaterialMod
        });

    }


function procesoRespuestaMaterialMod(oDatos){
        $("#txtCodModificarDatosMaterial").val(oDatos.CODIGO);
        $("#txtNombreModificarDatosMaterial").val(oDatos.NOMBRE);
        $("#txtPrecioModificarDatosMaterial").val(oDatos.PRECIO);
        $("#txtDescripcionModificarDatosMaterial").val(oDatos.DESCRIPCION);
}

function cancelar(){
    $("#divGestion").show("normal");
    frmModificarMaterial.style.display="none";
}