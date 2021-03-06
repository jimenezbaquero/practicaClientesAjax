///ALTAS
//validar Alta Operario
function validarOperario(oEvento) {

    var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();

    //Validar DNI del Operario
    var sDNI = frmAltaOperario.txtDniOp.value.trim();
    var oExpReg = /^\d{8}[a-zA-Z]$/;

    if (oExpReg.test(sDNI) == false) {
        bValido = false;

        frmAltaOperario.txtDniOp.classList.add("error");
        frmAltaOperario.txtDniOp.focus();
        sError += " El DNI debe contener 8 numeros y una letra final.";
    }
	//Validar nombre del Operario
    var sNombre = frmAltaOperario.txtNombreOp.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{2,50}$/;

    if (oExpReg.test(sNombre) == false) {
              
        if( bValido = true ){
        frmAltaOperario.txtNombreOp.focus();
        bValido = false;
        }

        frmAltaOperario.txtNombreOp.classList.add("error");

        sError += "\n El nombre debe ser alfanumérico entre 2 y 50 caracteres.";
    }
   
    if (bValido == false) {
        // Mostrar errores
        alert(sError);

        //Cancelar submit
        oE.preventDefault();
    }

}




//Validar Alta Cliente
function validarCliente(oEvento) {

    var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();

    //Validar DNI del Ciente
    var sDNI = frmAltaCliente.txtDniCli.value.trim();
    var oExpReg = /^\d{8}[a-zA-Z]$/;

    if (oExpReg.test(sDNI) == false) {
        bValido = false;

        frmAltaCliente.txtDniCli.classList.add("error");
        frmAltaCliente.txtDniCli.focus();
        sError += " El DNI debe contener 8 numeros y una letra final.";
    }
	//Validar nombre del cliente
    var sNombre = frmAltaCliente.txtNombreCli.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{2,50}$/;

    if (oExpReg.test(sNombre) == false) {
       
       if( bValido = true ){
        frmAltaCliente.txtNombreCli.focus();
        bValido = false;
        }

        frmAltaCliente.txtNombreCli.classList.add("error");

        sError += "\n El nombre debe ser alfanumérico entre 2 y 50 caracteres.";
    }

    //Validar Direccion del cliente
    var sDireccion = frmAltaCliente.txtDireccionCli.value.trim();
    oExpReg = /^[a-zA-Z0-9\s]{2,50}$/;

    if (oExpReg.test(sDireccion) == false) {

        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaCliente.txtDireccionCli.focus();
            bValido = false;
        }

        frmAltaCliente.txtDireccionCli.classList.add("error");

        sError += "\n La direccion es incorrecta.";
    }

    //Validar telefono del cliente 
    var sTelefono = frmAltaCliente.txtTfnoCli.value.trim();
    oExpReg = /^[679]\d{8}$/;

    if (oExpReg.test(sTelefono) == false) {

        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaCliente.txtTfnoCli.focus();
            bValido = false;
        }

        frmAltaCliente.txtTfnoCli.classList.add("error");

        sError += "\n El teléfono es incorrecto.";
    }

    
    if (bValido == false) {
        // Mostrar errores
        alert(sError);

        //Cancelar submit
        oE.preventDefault();
    }

}

//Validar Modificacion Cliente
function validarClienteMod(oEvento) {

    var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();


    //Validar nombre del cliente
    var sNombre = frmModificarDatosCliente.txtNombreModificarDatosCliente.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{2,50}$/;

    if (oExpReg.test(sNombre) == false) {
       
       if( bValido = true ){
        frmModificarDatosCliente.txtNombreModificarDatosCliente.focus();
        bValido = false;
        }

        frmModificarDatosCliente.txtNombreModificarDatosCliente.classList.add("error");

        sError += "\n El nombre debe ser alfanumérico entre 2 y 50 caracteres.";
    }

    //Validar Direccion del cliente
    var sDireccion = frmModificarDatosCliente.txtDireccionModificarDatosCliente.value.trim();
    oExpReg = /^[a-zA-Z0-9\s]{2,50}$/;

    if (oExpReg.test(sDireccion) == false) {

        if (bValido == true) { // ==> Primer error detectado en este campo
            frmModificarDatosCliente.txtDireccionModificarDatosCliente.focus();
            bValido = false;
        }

        frmModificarDatosCliente.txtDireccionModificarDatosCliente.classList.add("error");

        sError += "\n La direccion es incorrecta.";
    }

    //Validar telefono del cliente 
    var sTelefono = frmModificarDatosCliente.txtTfnoModificarDatosCliente.value.trim();
    oExpReg = /^[679]\d{8}$/;

    if (oExpReg.test(sTelefono) == false) {

        if (bValido == true) { // ==> Primer error detectado en este campo
            frmModificarDatosCliente.txtTfnoModificarDatosCliente.focus();
            bValido = false;
        }

        frmModificarDatosCliente.txtTfnoModificarDatosCliente.classList.add("error");

        sError += "\n El teléfono es incorrecto.";
    }

    
    if (bValido == false) {
        // Mostrar errores
        alert(sError);

        //Cancelar submit
        oE.preventDefault();
    }

}



//Validar Alta Material
function validarAltaMaterial(oEvento) {

    var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();

	//Validar Codigo de Alta Material
	var sCod = frmAltaMaterial.txtCodMat.value.trim();
    var oExpReg = /^[a-zA-Z]{3}\d{3}$/;

    if (oExpReg.test(sCod) == false) {
        bValido = false;

        frmAltaMaterial.txtCodMat.classList.add("error");
        frmAltaMaterial.txtCodMat.focus();
        sError += " El Codigo debe empezar por 3 vocales seguido de 3 digitos.";
    }
	//Validar nombre de Alta Material
    var sNombre = frmAltaMaterial.txtNombreMat.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{2,50}$/;

    if (oExpReg.test(sNombre) == false) {

        if( bValido = true ){
        frmAltaMaterial.txtNombreMat.focus();
        bValido = false;
        }
        
        frmAltaMaterial.txtNombreMat.classList.add("error");
        
        sError += "\n El nombre debe ser alfanumérico entre 2 y 50 caracteres.";
    }
	//Validar Precio de Alta Material
	var sPrecio = frmAltaMaterial.txtPrecioMat.value.trim();
    var oExpReg = /^\d+(\.\d{1,2})?$/;

    if (oExpReg.test(sPrecio) == false) {

        if( bValido = true ){
        frmAltaMaterial.txtPrecioMat.focus();
        bValido = false;
        }
        
        frmAltaMaterial.txtPrecioMat.classList.add("error");
        
        sError += "\n El Precio debe ser numérico y contener como maximo 2 decimales.";
    }
	//Validar Descripcion de Alta Material
	var sDes = frmAltaMaterial.txtDescripcionMat.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{1,50}$/;

    if (oExpReg.test(sDes) == false) {
       
        if( bValido = true ){
        frmAltaMaterial.txtDescripcionMat.focus();
        bValido = false;
        }

        frmAltaMaterial.txtDescripcionMat.classList.add("error");
        
        sError += "\n Añade una descripción.";
    }
	
    if (bValido == false) {
        // Mostrar errores
        alert(sError);

        //Cancelar submit
        oE.preventDefault();
    }

}

//Validar Alta Material
function validarMaterialMod(oEvento) {

    var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();


    //Validar nombre de ModificarDatos Material
    var sNombre = frmModificarDatosMaterial.txtNombreModificarDatosMaterial.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{2,50}$/;

    if (oExpReg.test(sNombre) == false) {

        if( bValido = true ){
        frmModificarDatosMaterial.txtNombreModificarDatosMaterial.focus();
        bValido = false;
        }
        
        frmModificarDatosMaterial.txtNombreModificarDatosMaterial.classList.add("error");
        
        sError += "\n El nombre debe ser alfanumérico entre 2 y 50 caracteres.";
    }
    //Validar Precio de ModificarDatos Material
    var sPrecio = frmModificarDatosMaterial.txtPrecioModificarDatosMaterial.value.trim();
    var oExpReg = /^\d+(\.\d{1,2})?$/;

    if (oExpReg.test(sPrecio) == false) {

        if( bValido = true ){
        frmModificarDatosMaterial.txtPrecioModificarDatosMaterial.focus();
        bValido = false;
        }
        
        frmModificarDatosMaterial.txtPrecioModificarDatosMaterial.classList.add("error");
        
        sError += "\n El Precio debe ser numérico y contener como maximo 2 decimales.";
    }
    //Validar Descripcion de ModificarDatos Material
    var sDes = frmModificarDatosMaterial.txtDescripcionModificarDatosMaterial.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{1,50}$/;

    if (oExpReg.test(sDes) == false) {
       
        if( bValido = true ){
        frmModificarDatosMaterial.txtDescripcionModificarDatosMaterial.focus();
        bValido = false;
        }

        frmModificarDatosMaterial.txtDescripcionModificarDatosMaterial.classList.add("error");
        
        sError += "\n Añade una descripción.";
    }
    
    if (bValido == false) {
        // Mostrar errores
        alert(sError);

        //Cancelar submit
        oE.preventDefault();
    }

}



///MODIFICAR 



