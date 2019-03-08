$("#btnAceptarOperario").click(altaOperario);
$("#btnBorrarOperario").click(borrarDatos);
$("#btnCancelarOperario").click(cancelar);

function altaOperario()
{
    validarOperario();

    var oCliente = {
        DNI: document.getElementById("txtDniOp").value.trim(),
        Nombre: document.getElementById("txtNombreOp").value.trim()
    };
    
    var sParametros = "datos=" + JSON.stringify(oCliente);

    $.post("php/altaOperario.php", sParametros, respuestaAltaOperario, 'json');

    function respuestaAltaOperario(oDatos, sStatus, oXHR) 
    {
        if (oDatos.error) {
            alert(oDatos.mensaje);
        } else {
            alert(oDatos.mensaje);
            borrarDatos();
            if(localStorage['operarios']!=undefined){
                localStorage['operarios']="";
                cargarComboOperarios();
            }      
            cancelar();
            $("#divGestion").show("normal");
        }
    }
}

function borrarDatos(){
    frmAltaOperario.reset();
}

function cancelar(){
    borrarDatos();
    frmAltaOperario.style.display="none";
}
