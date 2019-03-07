<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "upobrico";
$usuario   = "root";
$password  = "";



// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");

$sIncidencia = 0;
// Consulta SQL para obtener los datos de los centros.
$sql = "select max(num_incidencia) as maximo from incidencias where cod_cita=".$_GET['cita'];
if($resultado = mysqli_query($conexion,$sql)){

	$fila=mysqli_fetch_array($resultado);
	$sIncidencia = $fila['maximo'];
}

	echo ($sIncidencia+1);

mysqli_close($conexion);
?>