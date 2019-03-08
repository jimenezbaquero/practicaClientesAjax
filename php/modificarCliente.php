<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "upobrico";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");



$sql = "SELECT * FROM clientes where DNI='".$_POST['cliente']."'";

$resultado = mysqli_query($conexion,$sql);
$fila =mysqli_fetch_array($resultado);
$respuesta['DNI']=$_POST['cliente'];
$respuesta['NOMBRE']=$fila['NOMBRE'];
$respuesta['DIRECCION']=$fila['DIRECCION'];
$respuesta['TELEFONO']=$fila['TELEFONO'];

echo json_encode($respuesta);

mysqli_close($conexion);
?>