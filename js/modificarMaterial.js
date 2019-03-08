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
            type: "POST",
            async: true,
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

function instanciarXHR()
{
    var xhttp = null;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } 
    else // code for IE5 and IE6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return xhttp;
}

function cancelar(){
    $("#divGestion").show("normal");
    frmModificarMaterial.style.display="none";
}