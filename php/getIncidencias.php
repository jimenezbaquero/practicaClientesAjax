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
$sql = "SELECT * FROM incidencias ORDER BY COD_CITA,NUM_INCIDENCIA";

$resultados = mysqli_query($conexion,$sql) or die(mysqli_error($conexion));


$sTabla = '<center><h1>Listado de incidencias</h1></center>
			<table class="table ml-5 mt-5 mr-5">';

$sTabla .= '<thead><tr><th>Nº CITA</th><th>Nº INCIDENCIA</th><th>DESCRIPCION</th></thead>';

$sTabla .= "<tbody>";

while ($fila = mysqli_fetch_array($resultados)) {
    // Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
        $sTabla .= "<tr>";
        $sTabla .= "<td>" . $fila["COD_CITA"] . "</td>";
        $sTabla .= "<td>" . $fila["NUM_INCIDENCIA"] . "</td>";
        $sTabla .= "<td>" . $fila["DESCRIPCION"] . "</td>";
        $sTabla .= "</tr>";
}
$sTabla .= "</tbody></table>";




echo ($sTabla); 

mysqli_close($conexion);
?>