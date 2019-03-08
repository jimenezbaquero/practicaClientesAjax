<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "upobrico";
$usuario   = "root";
$password  = "";

// Recojo los datos de entrada
$operario = $_POST["operario"];


$todoBien = true;

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");

//comenzamos una transaccion
$conexion->begin_transaction();


$sql = "DELETE from operarios WHERE DNI='".$operario."'";
$resultado = mysqli_query($conexion,$sql);

if (!$resultado)
	$todoBien=false;


$sql = "DELETE FROM operarios_citas WHERE DNI_OPERARIO='".$operario."'";
$resultado = mysqli_query($conexion,$sql);

if ($todoBien){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Operario eliminado"; 
    $conexion->commit();
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de baja: ".mysqli_error($conexion);
    $conexion->rollback();
}

echo json_encode($respuesta);

mysqli_close($conexion);
?>