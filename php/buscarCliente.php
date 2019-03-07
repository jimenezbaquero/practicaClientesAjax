<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "upobrico";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");

$dni=$_GET['dni'];

// Consulta SQL para obtener los datos de los centros.
$sql = "select * from clientes where dni='".$dni."'";
$resultados = mysqli_query($conexion,$sql);

if(mysqli_num_rows($resultados)>0){
	$fila= mysqli_fetch_array($resultados);
	$respuesta['nombre']=$fila['NOMBRE'];
	$respuesta['direccion']=$fila['DIRECCION'];
}
else
	$respuesta['nombre']="NO EXISTE";

echo json_encode($respuesta);

mysqli_close($conexion);
?>