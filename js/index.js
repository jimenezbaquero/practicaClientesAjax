$(function() {
    $("#formularioCliente").click(cargaFormularioCliente);
    $("#formularioOperario").click(cargaFormularioOperario);
    $("#formularioAdministrativo").click(cargaFormularioAdministrativo);
    $("#formularioMaterial").click(cargaFormularioMaterial);
    $("#formularioClienteMod").click(cargaFormularioModificarCliente);
    $("#formularioMaterialMod").click(cargaFormularioModificarMaterial);
    $("#formularioCitaMod").click(cargaFormularioModificarCita);
    $("#formularioClienteBor").click(cargaFormularioBorrarCliente);
    $("#formularioOperarioBor").click(cargaFormularioBorrarOperario);
    $("#formularioAdministrativoBor").click(cargaFormularioBorrarAdministrativo);
    $("#formularioMaterialBor").click(cargaFormularioBorrarMaterial);
    $("#formularioCitaBor").click(cargaFormularioBorrarCita);
    $("#formularioCita").click(cargaFormularioCita);
    $("#formularioAsignarOperario").click(cargaFormularioAsignarOperario);
    $("#formularioAsignarAdministrativo").click(cargaFormularioAsignarAdministrativo);
    $("#formularioAsignarMaterial").click(cargaFormularioAsignarMaterial);
    $("#formularioAsignarIncidencia").click(cargaFormularioAsignarIncidencia);
    $("#formularioCitasCliente").click(cargaFormularioCitasCliente);
    $("#formularioListadoCitas").click(cargaFormularioListadoCitas);
    
    var oAjax = instanciarXHR();

    function cargaFormularioCliente()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmAltaCliente')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmAltaCliente').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/altaCliente.html", function(){
                $.getScript("js/altaCliente.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmAltaCliente').show("normal");
        }
    }

    function cargaFormularioOperario()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmAltaOperario')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmAltaOperario').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/altaOperario.html", function(){
                $.getScript("js/altaOperario.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmAltaOperario').show("normal");
        }
    }

    function cargaFormularioAdministrativo()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmAltaAdministrativo')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmAltaAdministrativo').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/altaAdministrativo.html", function(){
                $.getScript("js/altaAdministrativo.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmAltaAdministrativo').show("normal");
        }
    }

    function cargaFormularioMaterial()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmAltaMaterial')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmAltaMaterial').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/altaMaterial.html", function(){
                $.getScript("js/altaMaterial.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmAltaMaterial').show("normal");
        }
    }

    function cargaFormularioModificarCliente()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmModificarCliente')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmModificarCliente').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/modificarCliente.html", function(){
                $.getScript("js/modificarCliente.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmModificarCliente').show("normal");
        }
    }

    function cargaFormularioModificarMaterial()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmModificarMaterial')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmModificarMaterial').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/modificarMaterial.html", function(){
                $.getScript("js/modificarMaterial.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmModificarMaterial').show("normal");
        }
    }

    function cargaFormularioModificarCita()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmModificarCita')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmModificarCita').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/modificarCita.html", function(){
                $.getScript("js/modificarCita.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmModificarCita').show("normal");
        }
    }

    function cargaFormularioBorrarCliente()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmBorrarCliente')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmBorrarCliente').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/borrarCliente.html", function(){
                $.getScript("js/borrarCliente.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmBorrarCliente').show("normal");
        }
    }

    function cargaFormularioBorrarOperario()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmBorrarOperario')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmBorrarOperario').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/borrarOperario.html", function(){
                $.getScript("js/borrarOperario.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmBorrarOperario').show("normal");
        }
    }

    function cargaFormularioBorrarAdministrativo()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmBorrarAdministrativo')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmBorrarAdministrativo').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/borrarAdministrativo.html", function(){
                $.getScript("js/borrarAdministrativo.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmBorrarAdministrativo').show("normal");
        }
    }

    function cargaFormularioBorrarMaterial()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmBorrarMaterial')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmBorrarMaterial').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/borrarMaterial.html", function(){
                $.getScript("js/borrarMaterial.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmBorrarMaterial').show("normal");
        }
    }

    function cargaFormularioBorrarCita()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmBorrarCita')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmBorrarCita').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/borrarCita.html", function(){
                $.getScript("js/borrarCita.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmBorrarCita').show("normal");
        }
    }

    function cargaFormularioCita()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmCita')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmCita').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/crearCita.html", function(){
                $.getScript("js/crearCita.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmCita').show("normal");
        }
    }

    function cargaFormularioAsignarOperario()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmAsignarOperario')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmAsignarOperario').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/asignarOperario.html", function(){
                $.getScript("js/asignarOperario.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmAsignarOperario').show("normal");
        }
    }

    function cargaFormularioAsignarAdministrativo()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmAsignarAdministrativo')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmAsignarAdministrativo').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/asignarAdministrativo.html", function(){
                $.getScript("js/asignarAdministrativo.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmAsignarAdministrativo').show("normal");
        }
    }

    function cargaFormularioAsignarMaterial()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmAsignarMaterial')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmAsignarMaterial').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/asignarMaterial.html", function(){
                $.getScript("js/asignarMaterial.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmAsignarMaterial').show("normal");
        }
    }

    function cargaFormularioAsignarIncidencia()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmAltaIncidencia')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmAltaIncidencia').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/altaIncidencia.html", function(){
                $.getScript("js/altaIncidencia.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmAltaIncidencia').show("normal");
        }
    }

    function cargaFormularioListadoCitas()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmFechasCitas')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmFechasCitas').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/listadoCitasPorFecha.html", function(){
                $.getScript("js/listadoCitasPorFecha.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmFechasCitas').show("normal");
        }
    }

    function cargaFormularioCitasCliente()
    {
        // Oculto todos los formularios menos este
        $("form:not('#frmCitasCliente')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmCitasCliente').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/listadoCitasCliente.html", function(){
                $.getScript("js/listadoCitasCliente.js");
            });
            
        } else {
            // Lo muestro si está oculto
            $('#frmCitasCliente').show("normal");
        }
    }

});

function instanciarXHR() {
	var xhttp = null;

	if (window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest();
	} else // code for IE5 and IE6
	{
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	return xhttp;
}