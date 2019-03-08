
$("#btnAceptarBorrarCita").click(procesoBorrarCita);
$("#btnBorrarBorrarCita").click(borrarDatos);
$("#btnCancelarBorrarCita").click(cancelarBorrarCita);






function procesoBorrarCita(){


        $.ajax({
            url: "php/borrarCita.php",
            type: "POST",
            async: false,
            data:  "cita="+frmBorrarCita.lstCitasBor.value,
            dataType: "json",
            success: procesoRespuestaCitaBor
        });

    }


function procesoRespuestaCitaBor(oDatos){
    
       
        if (oDatos.error) {
            alert(oDatos.mensaje);
        } else {
            alert(oDatos.mensaje);
            borrarDatos();
            $('#frmBorrarCita').hide("normal");
            $("#divGestion").show("normal");
        }
    }

        

function borrarDatos(){
    frmBorrarCita.lstCitasBor.value=0;

}

function cancelarBorrarCita(){
    borrarDatos();
    $('#frmBorrarCita').hide("normal");
    $("#divGestion").show("normal");
        
}


