$("#btnAceptarOperario").click(altaOperario);

function altaOperario()
{
    validarOperario();

    var oCliente = {
        DNI: document.getElementById("txtDniOp").value.trim(),
        Nombre: document.getElementById("txtNombreOp").value.trim()
    };
    //  IMPORTANTE: EL NOMBRE DE LOS PARAMETROS ENVIADOS DIFIERE EN EL CASO DEL OBJETO LITERAL
    var sParametros = "datos=" + JSON.stringify(oCliente);

    $.post("php/altaOperario.php", sParametros, respuestaAltaOperario, 'json');

    function respuestaAltaOperario(oDatos, sStatus, oXHR) 
    {
        if (oDatos.error) {
            alert(oDatos.mensaje);
        } else {
            alert(oDatos.mensaje);
            frmAltaOperario.reset();
            if(localStorage['operarios']!=undefined){
                localStorage['operarios']="";
                cargarComboOperarios();
            }      
            frmAltaOperario.style.display="none";
            $("#divGestion").show("normal");
        }
    }
}
