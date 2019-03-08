<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "upobrico";
$usuario   = "root";
$password  = "";

// Recojo los datos de entrada
$datosJSON = $_GET["datos"];
$cita = json_decode($datosJSON);
$fecha = $cita->fecha;

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");

$sql = "SELECT NUMERO,FECHA,CLIENTE,DESCRIPCION,NOMBRE FROM citas,clientes WHERE CLIENTE='".$fecha."' ORDER BY FECHA ";
$resultado = mysqli_query($conexion,$sql);

$XML ='<?xml version="1.0" encoding="UTF-8"?>';

$fila = mysqli_fetch_array($resultado);
    $XML .='<citas>';
        $XML .='<NUMERO>'.$fila["NUMERO"].'</NUMERO>';
        $XML .='<FECHA>'.$fila["FECHA"].'</FECHA>';
        $XML .='<CLIENTE>'.$fila["NOMBRE"].'</CLIENTE>';
        $XML .='<DESCRIPCION>'.$fila["DESCRIPCION"].'</DESCRIPCION>';
    $XML .='</citas>';

// Cabecera de respuesta indicando que el contenido de la respuesta es XML
header("Content-Type: text/xml");
// Para que el navegador no haga cache de los datos devueltos por la página PHP.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

echo($XML);

mysqli_close($conexion);
?>