-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-03-2019 a las 14:05:21
-- Versión del servidor: 10.1.35-MariaDB
-- Versión de PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `upobrico`
--
drop database  if exists upobrico;
create database upobrico;
use upobrico;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita`
--

CREATE TABLE `cita` (
  `NUMERO` int(10) NOT NULL,
  `FECHA` date NOT NULL,
  `CLIENTE` varchar(9) NOT NULL,
  `DESCRIPCION` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cita`
--

INSERT INTO `cita` (`NUMERO`, `FECHA`, `CLIENTE`, `DESCRIPCION`) VALUES
(1, '2019-03-03', '12345678A', 'Montar estantería clásica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `DNI` varchar(9) NOT NULL,
  `NOMBRE` varchar(30) NOT NULL,
  `DIRECCION` varchar(30) NOT NULL,
  `TELEFONO` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`DNI`, `NOMBRE`, `DIRECCION`, `TELEFONO`) VALUES
('12345678A', 'Juan', 'Calle Luna', 9223242);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `material`
--

CREATE TABLE `material` (
  `CODIGO` varchar(6) NOT NULL,
  `NOMBRE` varchar(30) NOT NULL,
  `PRECIO` decimal(10,2) NOT NULL,
  `DESCRIPCION` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `material`
--

INSERT INTO `material` (`CODIGO`, `NOMBRE`, `PRECIO`, `DESCRIPCION`) VALUES
('CBA321', 'tuerca acero inoxidable', '1.00', 'Contratuercas de acero inoxidable'),
('ABC123', 'tornillo cabeza plana', '1.20', 'Tornillo tirafondo de cabeza plan'),
('ASD123', 'tablon de madera', '2.66', 'Tablón Flandes tratado y cepillado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_empresa`
--

CREATE TABLE `usuarios_empresa` (
  `DNI` varchar(9) NOT NULL,
  `NOMBRE` varchar(30) NOT NULL,
  `TIPO` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios_empresa`
--

INSERT INTO `usuarios_empresa` (`DNI`, `NOMBRE`, `TIPO`) VALUES
('87654321B', 'Pepe', 'Operario'),
('23456789C', 'Manuel', 'Administrativo');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
