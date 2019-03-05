-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-03-2019 a las 08:51:12
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
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `NUMERO` int(3) NOT NULL,
  `FECHA` date NOT NULL,
  `CLIENTE` varchar(9) NOT NULL,
  `DESCRIPCION` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`NUMERO`, `FECHA`, `CLIENTE`, `DESCRIPCION`) VALUES
(1, '2019-03-03', '12345678A', 'Montar estantería clásica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `DNI` varchar(9) NOT NULL,
  `NOMBRE` varchar(30) NOT NULL,
  `DIRECCION` varchar(30) NOT NULL,
  `TELEFONO` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`DNI`, `NOMBRE`, `DIRECCION`, `TELEFONO`) VALUES
('12345678A', 'Juan', 'Calle Luna', 9223242);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidencias`
--

CREATE TABLE `incidencias` (
  `NUM_INCIDENCIA` int(2) NOT NULL,
  `COD_CITA` int(3) NOT NULL,
  `DESCRIPCION` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materiales`
--

CREATE TABLE `materiales` (
  `CODIGO` varchar(6) NOT NULL,
  `NOMBRE` varchar(30) NOT NULL,
  `PRECIO` decimal(10,2) NOT NULL,
  `DESCRIPCION` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `materiales`
--

INSERT INTO `materiales` (`CODIGO`, `NOMBRE`, `PRECIO`, `DESCRIPCION`) VALUES
('ABC123', 'tornillo cabeza plana', '1.20', 'Tornillo tirafondo de cabeza plan'),
('ASD123', 'tablon de madera', '2.66', 'Tablón Flandes tratado y cepillado'),
('CBA321', 'tuerca acero inoxidable', '1.00', 'Contratuercas de acero inoxidable');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materiales_citas`
--

CREATE TABLE `materiales_citas` (
  `COD_MATERIAL` varchar(6) NOT NULL,
  `COD_CITA` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operarios`
--

CREATE TABLE `operarios` (
  `DNI` varchar(9) NOT NULL,
  `NOMBRE` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `operarios`
--

INSERT INTO `operarios` (`DNI`, `NOMBRE`) VALUES
('23456789C', 'Manuel'),
('87654321B', 'Pepe');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operarios_citas`
--

CREATE TABLE `operarios_citas` (
  `DNI_OPERARIO` varchar(9) NOT NULL,
  `COD_CITA` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`NUMERO`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`DNI`);

--
-- Indices de la tabla `incidencias`
--
ALTER TABLE `incidencias`
  ADD PRIMARY KEY (`NUM_INCIDENCIA`,`COD_CITA`);

--
-- Indices de la tabla `materiales`
--
ALTER TABLE `materiales`
  ADD PRIMARY KEY (`CODIGO`);

--
-- Indices de la tabla `materiales_citas`
--
ALTER TABLE `materiales_citas`
  ADD PRIMARY KEY (`COD_MATERIAL`,`COD_CITA`);

--
-- Indices de la tabla `operarios`
--
ALTER TABLE `operarios`
  ADD PRIMARY KEY (`DNI`);

--
-- Indices de la tabla `operarios_citas`
--
ALTER TABLE `operarios_citas`
  ADD PRIMARY KEY (`DNI_OPERARIO`,`COD_CITA`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
