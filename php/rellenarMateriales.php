<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "upobrico";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");

$sHtml = "";
// Consulta SQL para obtener los datos de los centros.
$sql = "select CODIGO,DESCRIPCION from materiales";
$resultado = mysqli_query($conexion,$sql);

while($fila= mysqli_fetch_array($resultado)){
	$sHtml .="<option value='".$fila["CODIGO"]."'>".$fila["DESCRIPCION"];
	$sHtml .= '</option>';
}


	echo ($sHtml);

mysqli_close($conexion);
?>