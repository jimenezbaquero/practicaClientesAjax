-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-03-2019 a las 23:00:23
-- Versión del servidor: 10.1.36-MariaDB
-- Versión de PHP: 7.2.10

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
(1, '2019-03-03', '12345678A', 'Montar estantería clásica'),
(2, '2019-03-15', '12345678A', 'Pintar pared'),
(3, '2019-03-22', '12345678A', 'Arreglar reja'),
(5, '2019-03-29', '12345678a', 'Vaciar piscina'),
(6, '2019-03-18', '12345678A', 'Cambiar teja'),
(10, '2019-03-22', '12345678A', 'Fregadero atascado'),
(11, '2019-03-22', '12345678A', 'Bombillas fundida'),
(12, '2019-03-20', '12345678A', 'Enchufe no funciona'),
(13, '2019-03-20', '12345678A', 'Cambiar lavabos'),
(14, '2019-03-18', '12345678A', 'Poner toldo'),
(15, '2019-03-21', '12345678a', 'Cambiar grifo');

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
('12345678A', 'Pedro Perez Fernandez', 'Calle Luna', 922324244),
('23212321A', 'Juan Gomez Jurado', 'Madrid', 654321123),
('33333333F', 'Francisco Sanchez', 'La Linea', 666666666);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidencias`
--

CREATE TABLE `incidencias` (
  `NUM_INCIDENCIA` int(2) NOT NULL,
  `COD_CITA` int(3) NOT NULL,
  `DESCRIPCION` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `incidencias`
--

INSERT INTO `incidencias` (`NUM_INCIDENCIA`, `COD_CITA`, `DESCRIPCION`) VALUES
(0, 3, 'No estaban en casa'),
(0, 5, 'Falta de materiales'),
(0, 6, 'Descripcion erronea'),
(0, 7, 'Descripcion erronea'),
(0, 8, 'Falta de materiales'),
(1, 4, 'No estaban en casa'),
(2, 3, 'Falta de materiales'),
(3, 5, 'Descripcion erronea'),
(4, 5, 'No estaban en casa'),
(5, 5, 'Descripcion erronea'),
(5, 6, 'No estaban en casa'),
(6, 6, 'Descripcion erronea'),
(7, 6, 'Falta de materiales');

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
('abc234', 'Arandelas', '13.00', 'Arandelas del 15'),
('ASD123', 'tablon de madera', '2.66', 'Tablón Flandes tratado y cepillado'),
('CBA321', 'tuerca acero inoxidable', '1.00', 'Contratuercas de acero inoxidable'),
('dfe456', 'Tubos', '21.00', 'Tubos de plomo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materiales_citas`
--

CREATE TABLE `materiales_citas` (
  `COD_MATERIAL` varchar(6) NOT NULL,
  `COD_CITA` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `materiales_citas`
--

INSERT INTO `materiales_citas` (`COD_MATERIAL`, `COD_CITA`) VALUES
('abc234', 16),
('ASD123', 13),
('ASD123', 15),
('CBA321', 14);

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
('12121212d', 'Daniel'),
('12341234t', 'ultimo'),
('12345654d', 'Adan'),
('23456789C', 'Manuel'),
('43434323r', 'otro'),
('45454512y', 'Fernando'),
('55555555G', 'Paco'),
('56565454f', 'Juan'),
('56789876Y', 'Raul'),
('65456545u', 'Ursula'),
('76543456W', 'Wenceslao'),
('77777777A', 'Antonio'),
('87654321B', 'Pepe'),
('87878787O', 'Oscar'),
('99999999D', 'Alfredo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operarios_citas`
--

CREATE TABLE `operarios_citas` (
  `DNI_OPERARIO` varchar(9) NOT NULL,
  `COD_CITA` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `operarios_citas`
--

INSERT INTO `operarios_citas` (`DNI_OPERARIO`, `COD_CITA`) VALUES
('12345654d', 15),
('12345654d', 16),
('23456789C', 11),
('23456789C', 12),
('23456789C', 13),
('45454512y', 14),
('55555555G', 14);

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
