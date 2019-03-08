<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "upobrico";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");



$sql = "SELECT * FROM materiales where CODIGO='".$_POST['CODIGO']."'";

$resultado = mysqli_query($conexion,$sql);
$fila =mysqli_fetch_array($resultado);
$respuesta['CODIGO']=$_POST['CODIGO'];
$respuesta['NOMBRE']=$fila['NOMBRE'];
$respuesta['PRECIO']=$fila['PRECIO'];
$respuesta['DESCRIPCION']=$fila['DESCRIPCION'];

echo json_encode($respuesta);

mysqli_close($conexion);
?>