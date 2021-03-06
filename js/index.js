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
     $("#listaClientes").click(cargaListadoClientes);
     $("#listaOperario").click(cargaListadoOperarios);
     $("#listaCitas").click(cargaListadoCitas);
     $("#listaMateriales").click(cargaListadoMateriales);
     $("#listadoIncidencias").click(cargaListadoIncidencias);


    });
    
    var oAjax = instanciarXHR();

    function cancelar()
    {
        ocultarListados();
        ocultarCapas();
        mostrarJumbotron();
    }

    function ocultarCapas()
    {
        borrarCampos();
        document.getElementById("divFrmCliente").style.display = "none";
        document.getElementById("divFrmOperario").style.display = "none";
        document.getElementById("divFrmMaterial").style.display = "none";
        document.getElementById("divFrmCita").style.display = "none";
        document.getElementById("divFrmFechasCitas").style.display = "none";
        document.getElementById("jumbo").style.display = "none";
        document.getElementById("divFrmIncidencia").style.display = "none";
        document.getElementById("divFrmModificarMaterial").style.display = "none";
        document.getElementById("divFrmModificarCliente").style.display = "none";
        document.getElementById("divFrmModificarCita").style.display = "none";
        document.getElementById("divFrmBorrarCita").style.display = "none";
        document.getElementById("divFrmBorrarCliente").style.display = "none";
        document.getElementById("divFrmBorrarOperario").style.display = "none";
        document.getElementById("divFrmBorrarAdmin").style.display = "none";
        document.getElementById("divFrmBorrarMaterial").style.display = "none";
        document.getElementById("divFrmModificarDatosCliente").style.display = "none";
        document.getElementById("divFrmCitasCliente").style.display = "none";
    }

    function mostrarJumbotron()
    {
        ocultarCapas();
        document.getElementById("jumbo").style.display = "block";
    }

    function borrarCampos()
    {
        limpiarErrores();
        limpiarErrores();
        var array = document.getElementsByTagName("form");
        for (var i=0;i<array.length;i++)
            array[i].reset();
    }
    function ocultarFormularios(){
    $("#formularios").html("");
}

    function ocultarListados(){
     borrarListado();
        $("#listados").show("hide");
    }

    function borrarListado(){
    $("#listados").html("");
    }

    function limpiarErrores() 
    {
        var array = document.getElementsByClassName("error");
        for (var i=0;i<array.length;i++)
            array[i].classList.remove("error");

        array = document.getElementsByClassName("error");
        for (var i=0;i<array.length;i++)
            array[i].classList.remove("error");
    }

    function cargaFormularioCliente()
    {
        ocultarListados();
        // Oculto todos los formularios menos este
        $("form:not('#frmAltaCliente')").hide("normal");
        //Oculto la imagen
        $(("#divGestion")).hide("normal");
    
        // Verifico si ya he cargado el formulario antes
        if ($('#frmAltaCliente').size() == 0) {
            $("<div>").appendTo('#formularios').load("formularios/altaCliente.html", function(){
                $.getScript("js/altaCliente.js");
            });
                //$("#jumbo").show("normal");
                //cancelar();
           
            
        } else {
            // Lo muestro si está oculto
            $('#frmAltaCliente').show("normal");
        }
    }

    function cargaFormularioOperario()
    {
        ocultarListados();
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
        ocultarListados();
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
        ocultarListados();
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
        ocultarListados();
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
        cargarComboClientesModificar();
    }

    function cargaFormularioModificarMaterial()
    {
        ocultarListados();
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
        cargarComboMaterialesModificar();
    }

    function cargaFormularioModificarCita()
    {
        ocultarListados();

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
        cargarComboCitasModificar();
    }

    function cargaFormularioBorrarCliente()
    {
        ocultarListados();
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
        cargarComboClientesBorrar();
    }

    function cargaFormularioBorrarOperario()
    {
        ocultarListados();
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
        cargarComboOperariosBorrar();
    }

    function cargaFormularioBorrarAdministrativo()
    {
        ocultarListados();
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
        ocultarListados();
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
        cargarComboMaterialesBorrar();
    }

    function cargaFormularioBorrarCita()
    {
        ocultarListados();
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
        cargarComboCitasBorrar();
    }

    function cargaFormularioCita()
    {
        ocultarListados();

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
            cargarComboMateriales();
            cargarComboOperarios();
        }
    }

    function cargaFormularioAsignarOperario()
    {
        ocultarListados();
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
        ocultarListados();
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
        ocultarListados();
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
        ocultarListados();
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
        ocultarListados();
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
        ocultarListados();
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
        rellenarDesplegableDNI();
    }



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

function cargarComboCitasModificar(){

    $.get("php/rellenarCitas.php",null,procesoRespuestaRellenarCitasMod,"html");
}

function procesoRespuestaRellenarCitasMod(sDatos){
    $("#lstCitasMod").html(sDatos);

}

function cargarComboClientesModificar(){

    $.get("php/rellenarClientes.php",null,procesoRespuestaRellenarClientesMod,"html");
}

function procesoRespuestaRellenarClientesMod(sDatos){
    $("#lstClientesMod").html(sDatos);

}

function cargarComboMaterialesModificar(){

    $.get("php/rellenarMateriales.php",null,procesoRespuestaRellenarMaterialesesMod,"html");
}

function procesoRespuestaRellenarMaterialesesMod(sDatos){
    $("#lstMaterialesMod").html(sDatos);

}

function cargarComboCitasBorrar(){

    $.get("php/rellenarCitas.php",null,procesoRespuestaRellenarCitasBor,"html");
}

function procesoRespuestaRellenarCitasBor(sDatos){
    $("#lstCitasBor").html(sDatos);

}

function cargarComboClientesBorrar(){

    $.get("php/rellenarClientes.php",null,procesoRespuestaRellenarClientesBor,"html");
}

function procesoRespuestaRellenarClientesBor(sDatos){
    $("#lstClienteBor").html(sDatos);

}

function cargarComboMaterialesBorrar(){

    $.get("php/rellenarMateriales.php",null,procesoRespuestaRellenarMaterialesBor,"html");
}

function procesoRespuestaRellenarMaterialesBor(sDatos){
    $("#lstMaterialBor").html(sDatos);

}

function cargarComboOperariosBorrar(){

    $.get("php/rellenarOperarios.php",null,procesoRespuestaRellenarOperariosBor,"html");
}

function procesoRespuestaRellenarOperariosBor(sDatos){
    $("#lstOperarioBor").html(sDatos);

}

//Listados
//Listado Cliente
function cargaListadoClientes(){
    ocultarFormularios();
     $(("#divGestion")).hide("normal");
    $.get("./php/getClientes.php", respuestaListadoClientes, 'html');

}

function respuestaListadoClientes(sDatos, sStatus, oXHR) {
    
$("#listados").empty();
   
    $("<div>").html(sDatos).appendTo("#listados");

}

//Listado Operario
function cargaListadoOperarios(){
    ocultarFormularios();
     $(("#divGestion")).hide("normal");
    $.get("./php/getOperarios.php", respuestaListadoOperarios, 'html');

}

function respuestaListadoOperarios(sDatos, sStatus, oXHR) {
    
$("#listados").empty();
   
    $("<div>").html(sDatos).appendTo("#listados");

}


//Listado Citas
function cargaListadoCitas(){
    ocultarFormularios();
     $(("#divGestion")).hide("normal");
    $.get("./php/getCitas.php", respuestaListadoCitas, 'html');

}

function respuestaListadoCitas(sDatos, sStatus, oXHR) {
    
$("#listados").empty();
   
    $("<div>").html(sDatos).appendTo("#listados");

}
//Listado Material
function cargaListadoMateriales(){
    ocultarFormularios();
     $(("#divGestion")).hide("normal");
    $.get("./php/getMateriales.php", respuestaListadoMateriales, 'html');

}

function respuestaListadoMateriales(sDatos, sStatus, oXHR) {
    
$("#listados").empty();
   
    $("<div>").html(sDatos).appendTo("#listados");

}

//rellenamos desplegable cliente




function rellenarDesplegableDNI() {

    
    $.get("php/rellenarClientes.php",null,procesoRespuestaRellenarClientesListado,"html");

}
function procesoRespuestaRellenarClientesListado(sDatos){
    $("#lstDniCitaCli").html(sDatos);
}

    
function cargaListadoIncidencias(){

    ocultarFormularios();
     $(("#divGestion")).hide("normal");
    $.get("./php/getIncidencias.php", respuestaListadoIncidencias, 'html');

}

function respuestaListadoIncidencias(sDatos, sStatus, oXHR) {
    
$("#listados").empty();
   
    $("<div>").html(sDatos).appendTo("#listados");

}