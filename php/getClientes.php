<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "upobrico";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_query($conexion,"utf8");

// Consulta SQL para obtener los datos de los centros.
$sql = "SELECT * FROM clientes ORDER BY NOMBRE";
$resultados = mysqli_query($conexion,$sql) or die(mysqli_error($conexion));


$sTabla = '<center><h1>Listado de clientes</h1></center>
			<table class="table ml-5 mt-5 mr-5">';

$sTabla .= '<thead><tr><th>DNI</th><th>NOMBRE</th><th>DIRECCION</th><th>TELEFONO</th></thead>';

$sTabla .= "<tbody>";

while ($fila = mysqli_fetch_array($resultados)) {
    // Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
        $sTabla .= "<tr>";
        $sTabla .= "<td>" . $fila["DNI"] . "</td>";
        $sTabla .= "<td>" . $fila["NOMBRE"] . "</td>";
        $sTabla .= "<td>" . $fila["DIRECCION"] . "</td>";
        $sTabla .= "<td>" . $fila["TELEFONO"] . "</td>";
        $sTabla .= "</tr>";
}
$sTabla .= "</tbody></table>";




echo ($sTabla); 

mysqli_close($conexion);
?>