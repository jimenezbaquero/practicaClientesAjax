<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "upobrico";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");

$sql = "SELECT * FROM citas where numero=".$_GET['cita'];
$resultado = mysqli_query($conexion,$sql);
$fila =mysqli_fetch_array($resultado);
$respuesta['numero']=$_GET['cita'];
$respuesta['fecha']=$fila['FECHA'];
$respuesta['cliente']=$fila['CLIENTE'];
$respuesta['descripcion']=$fila['DESCRIPCION'];

$sql = "SELECT * FROM clientes where dni='".$respuesta['cliente']."'";
$resultado = mysqli_query($conexion,$sql);
$fila =mysqli_fetch_array($resultado);
$respuesta['nombre']=$fila['NOMBRE'];
$respuesta['direccion']=$fila['DIRECCION'];


$sql = "SELECT dni,nombre from operarios_citas inner join operarios on (dni=dni_operario) where cod_cita=".$_GET['cita'];
$resultado = mysqli_query($conexion,$sql);
$sOperarios="";
while($fila =mysqli_fetch_array($resultado)){
	$sOperarios.= "<option value='".$fila['dni']."'>".$fila['nombre']."</option>";
}
$respuesta['operarios']=$sOperarios;

$sql = "SELECT codigo,nombre from materiales_citas inner join materiales on (codigo=cod_material) where cod_cita=".$_GET['cita'];
$resultado = mysqli_query($conexion,$sql);
$sMateriales="";
while($fila =mysqli_fetch_array($resultado)){
	$sMateriales.= "<option value='".$fila['codigo']."'>".$fila['nombre']."</option>";
}
$respuesta['materiales']=$sMateriales;

echo json_encode($respuesta);

mysqli_close($conexion);
?>