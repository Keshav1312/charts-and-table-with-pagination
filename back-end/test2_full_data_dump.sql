-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2023 at 01:31 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `test2`
--

CREATE TABLE `test2` (
  `id` int(11) NOT NULL,
  `deveui` varchar(255) NOT NULL,
  `Inlet_p` varchar(255) NOT NULL,
  `Outlet_p` varchar(255) NOT NULL,
  `Flow_rate` varchar(255) NOT NULL,
  `Cumulative_flow` varchar(255) NOT NULL,
  `Daily_flow` varchar(255) NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `test2`
--

INSERT INTO `test2` (`id`, `deveui`, `Inlet_p`, `Outlet_p`, `Flow_rate`, `Cumulative_flow`, `Daily_flow`, `updated_at`) VALUES
(1, 'dev_1', '52', '25', '52', '25', '25', '2023-04-01 10:03:54'),
(2, 'dev_2', '78', '87', '44', '56', '55', '2023-04-01 12:03:54'),
(3, 'dev_3', '77', '54', '35', '55', '66', '2023-04-02 12:05:11'),
(4, 'dev_4', '22', '27', '85', '45', '45', '2023-04-02 13:06:00'),
(5, 'dev_5', '78', '98', '87', '35', '53', '2023-04-03 08:06:00'),
(6, 'dev_6', '75', '57', '25', '42', '25', '2023-04-03 09:44:46'),
(7, 'dev_7', '66', '44', '66', '33', '34', '2023-04-03 13:44:46'),
(8, 'dev_8', '99', '65', '54', '15', '56', '2023-04-04 05:44:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `test2`
--
ALTER TABLE `test2`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `test2`
--
ALTER TABLE `test2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
