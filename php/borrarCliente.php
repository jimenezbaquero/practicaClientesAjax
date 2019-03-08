<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "upobrico";
$usuario   = "root";
$password  = "";

// Recojo los datos de entrada
$cliente = $_POST["cliente"];


$todoBien = true;

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");

//comenzamos una transaccion
$conexion->begin_transaction();


$sql = "DELETE from clientes WHERE DNI='".$cliente."'";
$resultado = mysqli_query($conexion,$sql);

if (!$resultado)
	$todoBien=false;


$sql = "DELETE FROM citas WHERE CLIENTE='".$cliente."'";
$resultado = mysqli_query($conexion,$sql);

if ($todoBien){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Cliente eliminado"; 
    $conexion->commit();
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de baja: ".mysqli_error($conexion);
    $conexion->rollback();
}

echo json_encode($respuesta);

mysqli_close($conexion);
?>