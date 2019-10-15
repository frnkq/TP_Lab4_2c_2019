-- phpMyAdmin SQL Dump
-- version 4.0.10.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 15, 2019 at 11:43 AM
-- Server version: 5.6.42
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `frnkq_tp`
--

-- --------------------------------------------------------

--
-- Table structure for table `audit`
--

CREATE TABLE IF NOT EXISTS `audit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(90) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `accion` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uri` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ip` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=59 ;

--
-- Dumping data for table `audit`
--

INSERT INTO `audit` (`id`, `role`, `username`, `accion`, `uri`, `ip`, `fecha`) VALUES
(1, 'mozo', 'jperez903', 'ActualizarPedido', '/pedidos/1', '', '2019-07-14 16:08:37'),
(2, '_', 'alberto', 'alberto', '/auth/login', '', '2019-07-14 16:12:47'),
(3, '_', 'alberto', 'LogIn', '/auth/login', '', '2019-07-14 16:13:16'),
(4, 'guest', 'alberto', 'LogIn', '/auth/login', '', '2019-07-14 16:36:57'),
(5, 'guest', 'alberto', 'LogIn', '/auth/login', '', '2019-07-14 16:36:58'),
(6, 'guest', 'alberto', 'LogIn', '/auth/login', '::1', '2019-07-14 16:38:02'),
(7, 'guest', 'alberto', 'LogIn', '/auth/login', '::1', '2019-07-14 16:48:33'),
(8, 'guest', 'alberto', 'LogIn', '/auth/login', '::1', '2019-07-14 16:48:44'),
(9, 'guest', 'fcanevali900', 'LogIn', '/auth/login', '::1', '2019-07-14 16:49:09'),
(10, 'guest', 'fcanevali900', 'LogIn', '/auth/login', '::1', '2019-07-14 16:59:56'),
(11, 'socio', 'fcanevali900', 'OperacionesCocina', '/listados/cocina', '::1', '2019-07-14 17:00:18'),
(12, 'socio', 'fcanevali900', 'OperacionesCocina', '/listados/cocina', '::1', '2019-07-14 17:00:34'),
(13, 'socio', 'fcanevali900', 'OperacionesCocina', '/listados/cocina', '::1', '2019-07-14 17:00:48'),
(14, 'socio', 'fcanevali900', 'OperacionesCocina', '/listados/cocina', '::1', '2019-07-14 17:01:07'),
(15, 'socio', 'fcanevali900', 'OperacionesCocina', '/listados/cocina', '::1', '2019-07-14 17:01:17'),
(16, 'socio', 'fcanevali900', 'OperacionesCocina', '/listados/cocina', '::1', '2019-07-14 17:01:21'),
(17, 'guest', 'aruiz908', 'LogIn', '/auth/login', '::1', '2019-07-14 17:02:06'),
(18, 'cervecero', 'aruiz908', 'ActualizarPedido', '/pedidos/11', '::1', '2019-07-14 17:02:17'),
(19, 'cervecero', 'aruiz908', 'ActualizarPedido', '/pedidos/11', '::1', '2019-07-14 17:02:41'),
(20, 'cervecero', 'aruiz908', 'ActualizarPedido', '/pedidos/11', '::1', '2019-07-14 17:03:04'),
(21, 'cervecero', 'aruiz908', 'ActualizarPedido', '/pedidos/11', '::1', '2019-07-14 17:03:39'),
(22, 'guest', 'psalde906', 'LogIn', '/auth/login', '::1', '2019-07-14 17:04:05'),
(23, 'cocinero', 'psalde906', 'ActualizarPedido', '/pedidos/11', '::1', '2019-07-14 17:04:10'),
(24, 'socio', 'fcanevali900', 'OperacionesCocina', '/listados/cocina', '::1', '2019-07-14 17:04:45'),
(25, 'socio', 'fcanevali900', 'OperacionesCocina', '/listados/cocina', '::1', '2019-07-14 17:04:57'),
(26, 'socio', 'fcanevali900', 'OperacionesCerveza', '/listados/cerveza', '::1', '2019-07-14 17:08:50'),
(27, 'socio', 'fcanevali900', 'OperacionesPorEmpleado', '/listados/empleado/psalde906', '::1', '2019-07-14 17:12:40'),
(28, 'socio', 'fcanevali900', 'OperacionesPorEmpleado', '/listados/empleado/psaldzxczcxz', '::1', '2019-07-14 17:12:44'),
(29, 'socio', 'fcanevali900', 'OperacionesPorEmpleado', '/listados/empleado/aruiz908', '::1', '2019-07-14 17:12:53'),
(30, 'socio', 'fcanevali900', 'OperacionesPorEmpleado', '/listados/empleado/aruiz908', '::1', '2019-07-14 17:13:54'),
(31, 'socio', 'fcanevali900', 'OperacionesPorEmpleado', '/listados/empleado/aruiz908', '::1', '2019-07-14 17:14:39'),
(32, 'socio', 'fcanevali900', 'OperacionesCerveza', '/listados/cerveza', '::1', '2019-07-14 17:14:46'),
(33, 'socio', 'fcanevali900', 'OperacionesCervezaEmpleado', '/listados/cerveza/aruiz908', '::1', '2019-07-14 17:21:39'),
(34, 'socio', 'fcanevali900', 'OperacionesCerveza', '/listados/cerveza', '::1', '2019-07-14 17:21:45'),
(35, 'guest', 'fcanevali900', 'LogIn', '/auth/login', '165.225.0.112', '2019-07-15 17:12:37'),
(36, 'guest', 'alberto', 'LogIn', '/auth/login', '165.225.0.112', '2019-07-15 17:13:24'),
(37, 'cliente', 'alberto', 'ListarPedido', '/pedido/al4', '165.225.0.112', '2019-07-15 17:13:33'),
(38, 'cliente', 'alberto', 'ListarPedido', '/pedido/al4', '165.225.0.112', '2019-07-15 17:13:42'),
(39, 'cliente', 'alberto', 'ListarPedido', '/pedido/al4', '165.225.0.112', '2019-07-15 17:14:29'),
(40, 'cliente', 'alberto', 'ListarPedido', '/pedido/al4', '165.225.0.112', '2019-07-15 17:14:40'),
(41, 'cliente', 'alberto', 'ListarPedido', '/pedido/al4', '165.225.0.112', '2019-07-15 17:18:42'),
(42, 'guest', 'jperez903', 'LogIn', '/auth/login', '186.22.175.109', '2019-07-16 21:23:37'),
(43, 'mozo', 'jperez903', 'ListarPedidos', '/pedidos', '186.22.175.109', '2019-07-16 21:23:55'),
(44, 'guest', 'carl', 'LogIn', '/auth/login', '186.143.136.3', '2019-10-10 23:53:20'),
(45, 'guest', NULL, 'LogIn', '/auth/login', '186.143.136.3', '2019-10-10 23:54:32'),
(46, 'guest', 'carl', 'LogIn', '/auth/login', '186.143.136.3', '2019-10-10 23:54:40'),
(47, 'guest', 'carl', 'LogIn', '/auth/login', '186.143.136.3', '2019-10-10 23:54:46'),
(48, 'guest', 'carl', 'LogIn', '/auth/login', '186.143.136.3', '2019-10-11 00:01:59'),
(49, 'guest', 'carl', 'LogIn', '/auth/login', '186.143.136.3', '2019-10-11 00:15:34'),
(50, 'guest', 'carl', 'LogIn', '/auth/login', '186.143.136.3', '2019-10-11 00:16:58'),
(51, 'guest', 'jorge', 'LogIn', '/auth/login', '186.143.136.3', '2019-10-11 01:09:34'),
(52, 'guest', 'jorge', 'LogIn', '/auth/login', '186.143.136.3', '2019-10-11 01:11:43'),
(53, 'guest', 'jorge', 'LogIn', '/auth/login', '186.143.136.3', '2019-10-11 01:11:44'),
(54, 'guest', 'jorge', 'LogIn', '/auth/login', '186.143.136.3', '2019-10-11 01:12:01'),
(55, 'guest', 'jorge', 'LogIn', '/auth/login', '186.18.161.69', '2019-10-12 00:20:08'),
(56, 'guest', 'jorge', 'LogIn', '/auth/login', '186.18.161.69', '2019-10-12 00:20:25'),
(57, 'guest', NULL, 'LogIn', '/auth/login', '181.229.17.56', '2019-10-15 13:47:19'),
(58, 'guest', 'fcanevali900', 'LogIn', '/auth/login', '181.229.17.56', '2019-10-15 13:48:27');

-- --------------------------------------------------------

--
-- Table structure for table `audit_login`
--

CREATE TABLE IF NOT EXISTS `audit_login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(90) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(90) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=16 ;

--
-- Dumping data for table `audit_login`
--

INSERT INTO `audit_login` (`id`, `role`, `username`, `active`, `fecha`) VALUES
(1, 'cliente', 'alberto', 1, '2019-07-14 16:48:44'),
(2, 'socio', 'fcanevali900', 1, '2019-07-14 16:49:09'),
(3, 'socio', 'fcanevali900', 1, '2019-07-14 16:59:56'),
(4, 'cervecero', 'aruiz908', 1, '2019-07-14 17:02:06'),
(5, 'cocinero', 'psalde906', 1, '2019-07-14 17:04:05'),
(6, 'socio', 'fcanevali900', 1, '2019-07-15 17:12:38'),
(7, 'cliente', 'alberto', 1, '2019-07-15 17:13:24'),
(8, 'mozo', 'jperez903', 1, '2019-07-16 21:23:37'),
(9, 'cliente', 'jorge', 1, '2019-10-11 01:09:34'),
(10, 'cliente', 'jorge', 1, '2019-10-11 01:11:44'),
(11, 'cliente', 'jorge', 1, '2019-10-11 01:11:44'),
(12, 'cliente', 'jorge', 1, '2019-10-11 01:12:01'),
(13, 'cliente', 'jorge', 1, '2019-10-12 00:20:08'),
(14, 'cliente', 'jorge', 1, '2019-10-12 00:20:25'),
(15, 'socio', 'fcanevali900', 1, '2019-10-15 13:48:27');

-- --------------------------------------------------------

--
-- Table structure for table `empleados`
--

CREATE TABLE IF NOT EXISTS `empleados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dni` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `horario` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=11 ;

--
-- Dumping data for table `empleados`
--

INSERT INTO `empleados` (`id`, `dni`, `nombre`, `apellido`, `username`, `role`, `image`, `horario`) VALUES
(1, '39774900', 'franco', 'canevali', 'fcanevali900', 'socio', NULL, NULL),
(2, '39774902', 'Jorge', 'Alberto', 'jalberto902', 'mozo', NULL, NULL),
(3, '39774903', 'Juan', 'Perez', 'jperez903', 'mozo', NULL, NULL),
(4, '39774904', 'Estban', 'Quito', 'equito904', 'bartender', NULL, NULL),
(5, '39774905', 'Mariano', 'Rizzo', 'mrizzo905', 'bartender', NULL, NULL),
(6, '39774906', 'Pablo', 'Salde', 'psalde906', 'cocinero', NULL, NULL),
(7, '39774907', 'Ezequiel', 'Gonzalez', 'egonzalez907', 'cocinero', NULL, NULL),
(8, '39774908', 'Alejo', 'Ruiz', 'aruiz908', 'cervecero', NULL, NULL),
(9, '39774909', 'Matias', 'Hacha', 'mhacha909', 'cervecero', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `facturas`
--

CREATE TABLE IF NOT EXISTS `facturas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `guid` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mozoUsername` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `clienteUsername` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fechaApertura` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fechaCierre` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `productos` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `importe` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `facturas`
--

INSERT INTO `facturas` (`id`, `guid`, `mozoUsername`, `clienteUsername`, `fechaApertura`, `fechaCierre`, `productos`, `importe`) VALUES
(1, 'C8840E6A-0681-48E2-A725-19B80456A5D5', 'jperez903', 'jorge', '2019-07-01 02:01:55', '2019-07-01 02:01:55', '[[1,2],[3,3],[5,4],[7,5]]', '-1'),
(2, '24E6D452-42CC-4BD0-B348-80F41B2B75CD', 'jperez903', 'alberto', '2019-07-01 02:15:53', '2019-07-01 02:15:53', '[[2,4],[1,5],[7,2],[3,4]]', '-1'),
(3, '266C1A0C-DA1C-4983-BA25-667488D21374', 'fcanevali900', 'alberto', '2019-07-09 17:33:02', '2019-07-09 17:33:02', '[[2,4],[1,5],[7,2],[3,4]]', '-1'),
(4, 'FC407D17-77AB-4FFD-A804-98DEF828919A', 'fcanevali900', 'alberto', '2019-07-09 17:35:38', '2019-07-09 17:35:38', '[[2,4],[1,5],[7,2],[3,4]]', '-1');

-- --------------------------------------------------------

--
-- Table structure for table `mesas`
--

CREATE TABLE IF NOT EXISTS `mesas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estado` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=11 ;

--
-- Dumping data for table `mesas`
--

INSERT INTO `mesas` (`id`, `image`, `estado`) VALUES
(4, '4.png', 'Cerrada'),
(5, NULL, 'Disponible'),
(6, '6.jpg', 'Disponible'),
(7, '7.jpg', 'Disponible'),
(8, '.jpg', 'Disponible'),
(9, '9.jpg', 'Disponible'),
(10, NULL, 'Disponible');

-- --------------------------------------------------------

--
-- Table structure for table `pedidos`
--

CREATE TABLE IF NOT EXISTS `pedidos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `facturaId` int(11) NOT NULL,
  `mesaId` int(11) NOT NULL,
  `mozoUsername` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `clienteUsername` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tiempoEstimado` int(9) NOT NULL,
  `pedidosBarIds` varchar(90) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pedidosCervezaIds` varchar(90) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pedidosCocinaIds` varchar(90) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `pedidos`
--

INSERT INTO `pedidos` (`id`, `facturaId`, `mesaId`, `mozoUsername`, `clienteUsername`, `estado`, `tiempoEstimado`, `pedidosBarIds`, `pedidosCervezaIds`, `pedidosCocinaIds`, `hora`, `last_updated`) VALUES
(1, 1, 4, 'jperez903', 'jorge', 'Cerrado', 0, '[1]', '[1]', '[1,2]', '2019-07-01 02:01:55', '2019-07-08 17:45:15'),
(2, 2, 4, 'jperez903', 'alberto', 'Nuevo', 0, '[2]', '[]', '[3,4,5]', '2019-07-01 02:15:53', '2019-07-08 17:45:15'),
(3, 3, 4, 'fcanevali900', 'alberto', 'Nuevo', 0, '[3]', '[]', '[6,7,8]', '2019-07-09 17:33:02', '2019-07-09 17:33:02'),
(4, 4, 4, 'fcanevali900', 'alberto', 'En preparacion', 23, '[4]', '[]', '[9,10,11]', '2019-07-09 17:35:38', '2019-07-09 17:35:38');

-- --------------------------------------------------------

--
-- Table structure for table `pedidos_bar`
--

CREATE TABLE IF NOT EXISTS `pedidos_bar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pedidoId` int(11) NOT NULL,
  `bartenderUsername` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estado` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productoId` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `cerrado` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `pedidos_bar`
--

INSERT INTO `pedidos_bar` (`id`, `pedidoId`, `bartenderUsername`, `estado`, `productoId`, `cantidad`, `cerrado`, `last_updated`) VALUES
(1, 0, NULL, 'Entregado a la mesa', 3, 3, '2019-07-01 02:01:55', '2019-07-08 17:44:14'),
(2, 1, NULL, 'Nuevo', 3, 4, '2019-07-01 02:15:53', '2019-07-08 17:44:14'),
(3, 2, NULL, 'Nuevo', 3, 4, '2019-07-09 17:33:02', '2019-07-09 17:33:02'),
(4, 3, NULL, 'En preparacion', 3, 4, '2019-07-09 17:35:38', '2019-07-09 17:35:38');

-- --------------------------------------------------------

--
-- Table structure for table `pedidos_cerveza`
--

CREATE TABLE IF NOT EXISTS `pedidos_cerveza` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pedidoId` int(11) NOT NULL,
  `cerveceroUsername` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estado` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productoId` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `cerrado` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `pedidos_cerveza`
--

INSERT INTO `pedidos_cerveza` (`id`, `pedidoId`, `cerveceroUsername`, `estado`, `productoId`, `cantidad`, `cerrado`, `last_updated`) VALUES
(1, 0, NULL, 'Entregado a la mesa', 5, 4, '2019-07-01 02:01:55', '2019-07-08 17:44:33');

-- --------------------------------------------------------

--
-- Table structure for table `pedidos_cocina`
--

CREATE TABLE IF NOT EXISTS `pedidos_cocina` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pedidoId` int(11) NOT NULL,
  `cocineroUsername` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estado` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productoId` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `cerrado` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=12 ;

--
-- Dumping data for table `pedidos_cocina`
--

INSERT INTO `pedidos_cocina` (`id`, `pedidoId`, `cocineroUsername`, `estado`, `productoId`, `cantidad`, `cerrado`, `last_updated`) VALUES
(1, 0, NULL, 'Entregado a la mesa', 1, 2, '2019-07-01 02:01:55', '2019-07-08 17:44:53'),
(2, 0, NULL, 'Entregado a la mesa', 7, 5, '2019-07-01 02:01:55', '2019-07-08 17:44:53'),
(3, 1, NULL, 'Nuevo', 2, 4, '2019-07-01 02:15:53', '2019-07-08 17:44:53'),
(4, 1, NULL, 'En preparacion', 1, 5, '2019-07-01 02:15:53', '2019-07-08 17:44:53'),
(5, 1, NULL, 'Nuevo', 7, 2, '2019-07-01 02:15:53', '2019-07-08 17:44:53'),
(6, 2, NULL, 'Nuevo', 2, 4, '2019-07-09 17:33:02', '2019-07-09 17:33:02'),
(7, 2, NULL, 'Nuevo', 1, 5, '2019-07-09 17:33:02', '2019-07-09 17:33:02'),
(8, 2, NULL, 'Nuevo', 7, 2, '2019-07-09 17:33:02', '2019-07-09 17:33:02'),
(9, 3, NULL, 'En preparacion', 2, 4, '2019-07-09 17:35:38', '2019-07-09 17:35:38'),
(10, 3, NULL, 'Nuevo', 1, 5, '2019-07-09 17:35:38', '2019-07-09 17:35:38'),
(11, 3, NULL, 'En preparacion', 7, 2, '2019-07-09 17:35:38', '2019-07-09 17:35:38');

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `producto` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precioUnitario` int(11) NOT NULL,
  `tiempoEstimado` int(3) NOT NULL DEFAULT '20',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=9 ;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `categoria`, `producto`, `cantidad`, `precioUnitario`, `tiempoEstimado`) VALUES
(1, 'Cocina', 'Estofado de pollo', 90, 1000, 35),
(2, 'Cocina', 'Tallarines al pesto', 90, 900, 20),
(3, 'Bar', 'Vino tinto de la casa', 90, 800, 0),
(4, 'Bar', 'Medida whisky', 90, 750, 0),
(5, 'Cerveza', 'Cerveza quilmes', 90, 700, 4),
(6, 'Cerveza', 'Cerveza palermo', 90, 650, 4),
(7, 'Postre', 'Porcion torta de ricota', 90, 400, 15),
(8, 'Postre', 'Mousse chocolate', 90, 400, 15);

-- --------------------------------------------------------

--
-- Table structure for table `resenas`
--

CREATE TABLE IF NOT EXISTS `resenas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cliente` varchar(90) NOT NULL,
  `pMesa` int(1) NOT NULL,
  `pMozo` int(1) NOT NULL,
  `pRestaurante` int(1) NOT NULL,
  `pCocinero` int(1) NOT NULL,
  `texto` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `resenas`
--

INSERT INTO `resenas` (`id`, `fecha`, `cliente`, `pMesa`, `pMozo`, `pRestaurante`, `pCocinero`, `texto`) VALUES
(1, '2019-07-15 17:56:05', 'alberto', 0, 5, 2, 5, 'muy rica la comida gracias por todo aguante el mozo salde');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=65 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`, `active`) VALUES
(1, 'fcanevali900', '$2y$10$W.TZ5.1snV.XKYrcjw9A3uhsihf6vOAsJSdAdjOkwfq870RTwwUPa', 'socio', 1),
(2, 'jalberto902', '$2y$10$BdGSNUZOAtYq2jRQcqEkTOW9U6XyY0/b0uf5frX1qezaCAn2NcZ1S', 'mozo', 1),
(54, 'jorge', '$2y$10$Q5Ay.0uDl8CAslhKu3/Eh.KDRsztumx20dqZVD9MIsI7byEz9ZOdy', 'cliente', 1),
(55, 'jperez903', '$2y$10$4q8ClW7KQseVyATR9DKDCOHA4VBkfSGT5roEAraI0YRi1x6MAM81y', 'mozo', 1),
(56, 'equito904', '$2y$10$3IRq0wtRNacnooypcBU0G.V2g3TeWywl7uQtp5sfyarUzbrraUtU6', 'bartender', 1),
(57, 'mrizzo905', '$2y$10$xQPcARHAtjcV7adC9mO82.obVF5I7LcFOEJs8SGHlGUedBD5zpegq', 'bartender', 1),
(58, 'psalde906', '$2y$10$s9drx5SCnB66D9dsNxJZMOQNYUvxv1q8l1EanGxGf3/4k1RvPoZP.', 'cocinero', 1),
(59, 'egonzalez907', '$2y$10$.LJLq6ag.2.LloxKcV33XunQSrvBF/C2GiaLhjbHZfrRTLgehHKb.', 'cocinero', 1),
(60, 'aruiz908', '$2y$10$XRAUdY4souYZIwYLYeWw0e8lGJXTNni.FYrHqt4ggplb7iSLCSY0K', 'cervecero', 1),
(61, 'mhacha909', '$2y$10$Fk/iHd6bErP/Fhxm1WGxne33lwJvF5gxC11SJ3Vga5NcyrlAlHOIK', 'cervecero', 1),
(62, 'alberto', '$2y$10$xyRDWlT/jW.6Gwxhc2jYr.TkJWJkspLvEFkJ8.uvQlH5Vy0MJouqO', 'cliente', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
