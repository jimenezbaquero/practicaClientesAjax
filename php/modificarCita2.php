<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "upobrico";
$usuario   = "root";
$password  = "";

// Recojo los datos de entrada
$datosJSON = $_POST["datos"];
//Decodifico el objeto operario
$datos = json_decode($datosJSON);
$operarios = json_decode($_POST["operarios"]);
$materiales = json_decode($_POST["materiales"]);

$todoBien = true;

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");
mysqli_query($conexion,"utf8");

//comenzamos una transaccion
$conexion->begin_transaction();


$sql = "UPDATE citas SET FECHA='".$datos->fecha."',CLIENTE='".$datos->cliente."',DESCRIPCION='".$datos->descripcion."' WHERE NUMERO=".$datos->numero;
$resultado = mysqli_query($conexion,$sql);

if (!$resultado)
	$todoBien=false;

echo $sql;

$sql = "DELETE FROM materiales_citas WHERE COD_CITA=".$datos->numero;
$resultado = mysqli_query($conexion,$sql);

if (!$resultado)
	$todoBien=false;


foreach($materiales as $valor){
	$sql = "INSERT INTO materiales_citas VALUES ('".$valor."',".$datos->numero.")";
	$resultado = mysqli_query($conexion,$sql);

	if (!$resultado&&$todoBien)
	$todoBien=false;
}

$sql = "DELETE FROM operarios_citas WHERE COD_CITA=".$datos->numero;
$resultado = mysqli_query($conexion,$sql);


foreach($operarios as $valor){
	$sql = "INSERT INTO operarios_citas VALUES ('".$valor."',".$datos->numero.")";
	$resultado = mysqli_query($conexion,$sql);

	if (!$resultado&&$todoBien)
	$todoBien=false;
}



if ($todoBien){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Cita modificada"; 
    $conexion->commit();
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de alta: ".mysqli_error($conexion);
    $conexion->rollback();
}

echo json_encode($respuesta);

mysqli_close($conexion);
?>