<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "upobrico";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");

$sql = "SELECT * FROM operarios order by nombre ";
$resultado = mysqli_query($conexion,$sql);
$codigo ="";

while($fila= mysqli_fetch_array($resultado)){
	$codigo .="<option value='".$fila["DNI"]."'>".$fila["NOMBRE"];
	$codigo .= '</option>';
}

$respuesta["codigo"]=$codigo;

echo json_encode($respuesta);

mysqli_close($conexion);
?>