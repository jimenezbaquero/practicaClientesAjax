<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "upobrico";
$usuario   = "root";
$password  = "";

// Recojo los datos de entrada
$datosJSON = $_POST["datos"];
//Decodifico el objeto operario
$datos = json_decode($datosJSON);

$todoBien = true;

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");

//comenzamos una transaccion
$conexion->begin_transaction();


$sql = "UPDATE materiales SET NOMBRE='".$datos->NOMBRE."',PRECIO='".$datos->PRECIO."',DESCRIPCION=".$datos->DESCRIPCION." WHERE CODIGO='".$datos->CODIGO."'";
$resultado = mysqli_query($conexion,$sql);

if (!$resultado)
	$todoBien=false;


if ($todoBien){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Material modificado"; 
    $conexion->commit();
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de alta: ".mysqli_error($conexion);
    $conexion->rollback();
}

echo json_encode($respuesta);

mysqli_close($conexion);
?>