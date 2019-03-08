<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "upobrico";
$usuario   = "root";
$password  = "";

// Recojo los datos de entrada
$fechaInicio = $_GET['fechaInicio'];
$fechaFin = $_GET['fechaFin'];

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");

$sql = "SELECT NUMERO,FECHA,CLIENTE,DESCRIPCION,NOMBRE FROM citas";
$sql .= " INNER JOIN clientes on (DNI=CLIENTE)";
$sql .= " WHERE FECHA>='".$fechaInicio."' AND FECHA <='".$fechaFin."' ORDER BY FECHA ";



$resultado = mysqli_query($conexion,$sql);

$XML ='<?xml version="1.0" encoding="UTF-8"?>';
$XML .= '<CITAS>';
while($fila = mysqli_fetch_array($resultado)){
    $XML .='<CITA>';
        $XML .='<NUMERO>'.$fila["NUMERO"].'</NUMERO>';
        $XML .='<FECHA>'.$fila["FECHA"].'</FECHA>';
        $XML .='<CLIENTE>'.$fila["NOMBRE"].'</CLIENTE>';
        $XML .='<DESCRIPCION>'.$fila["DESCRIPCION"].'</DESCRIPCION>';
        $XML .='<OPERARIOS>';


$sql = "SELECT NOMBRE FROM operarios INNER JOIN operarios_citas ON (dni_operario=dni) WHERE cod_cita=".$fila['NUMERO'];
$resultadoOp = mysqli_query($conexion,$sql);
while($filaOp = mysqli_fetch_array($resultadoOp)){
	$XML .= '<OPERARIO>';
	$XML .= '<NOMBRE>'.$filaOp['NOMBRE'].'</NOMBRE>';
	$XML .= '</OPERARIO>';
}
$XML .= '</OPERARIOS>';
$XML .= '<MATERIALES>';

$sql = "SELECT NOMBRE FROM materiales INNER JOIN materiales_citas ON (codigo=cod_material) WHERE cod_cita=".$fila['NUMERO'];
$resultadoMat = mysqli_query($conexion,$sql);
while($filaMat = mysqli_fetch_array($resultadoMat)){
	$XML .= '<MATERIAL>';
	$XML .= '<NOMBRE>'.$filaMat['NOMBRE'].'</NOMBRE>';
	$XML .= '</MATERIAL>';
}
$XML .= '</MATERIALES>';
$XML .= '</CITA>';
}

$XML .= '</CITAS>';

// Cabecera de respuesta indicando que el contenido de la respuesta es XML
header("Content-Type: text/xml");
// Para que el navegador no haga cache de los datos devueltos por la página PHP.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

echo $XML;

mysqli_close($conexion);
?>