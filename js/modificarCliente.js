$("#btnAceptarModificarCliente").click(procesoModificarCliente);

function procesoModificarCliente(){
        $("#frmModificarCliente").hide("normal");
               // Oculto todos los formularios menos este
        $("form:not('#frmModificarCliente2')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmModificarCliente2').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/ModificarCliente2.html", function(){
                $.getScript("js/modificarCliente2.js");
            });
            
        } else {    
            
            // Lo muestro si está oculto
            $('#frmModificarCliente2').show("normal");
        }


        $.ajax({
            url: "php/modificarCliente.php",
            type: "POST",
            async: false,
            data:  "cliente="+frmModificarCliente.lstClientesMod.value,
            dataType: "json",
            success: procesoRespuestaClienteMod
        });

    }


function procesoRespuestaClienteMod(oDatos){
        $("#txtDniModificarDatosCliente").val(oDatos.DNI);
        $("#txtNombreModificarDatosCliente").val(oDatos.NOMBRE);
        $("#txtDireccionModificarDatosCliente").val(oDatos.DIRECCION);
        $("#txtTfnoModificarDatosCliente").val(oDatos.TELEFONO);
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