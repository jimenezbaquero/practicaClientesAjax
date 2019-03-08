$("#btnAceptarModificarCliente").click(procesoModificarCliente);
$("#btnCancelarModificarCliente").click(cancelar);



function procesoModificarCliente(){
        $("#frmModificarCliente2").hide("normal");
               // Oculto todos los formularios menos este
        $("form:not('#frmModificarDatosCliente')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        
        if ($('#frmModificarDatosCliente').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/modificarCliente2.html", function(){
                $.getScript("js/modificarCliente2.js");
            });
           
        } else {    
            
            // Lo muestro si está oculto
            $('#frmModificarDatosCliente').show("normal");
        }


        $.ajax({
            url: "php/modificarCliente.php",
            type: "GET",
            async: false,
            cache: false,
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



function cancelar(){
    $("#divGestion").show("normal");
    frmModificarCliente.style.display="none";
}