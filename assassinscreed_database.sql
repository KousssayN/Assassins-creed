-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2024 at 09:29 PM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assassinscreed_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `telnum` int(8) NOT NULL,
  `email` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`name`, `lastname`, `telnum`, `email`, `password`) VALUES
('adel', 'amdouni', 26478342, 'adelamdouni@gmail.com', 'ADel21'),
('koussay', 'nefzi', 52947663, 'koussaynefzi12@gmail.com', 'A1B2c3'),
('ahmed', 'saidi', 58235269, 'weldsaber1920@gmail.com', 'a1K2L4');

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `game_id` varchar(10) NOT NULL,
  `game_name` varchar(30) NOT NULL,
  `game_price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`game_id`, `game_name`, `game_price`) VALUES
('ac1', 'Assassin\'s creed', 9.99),
('ac2', 'Assassin\'s creed II', 14.99),
('ac3', 'Assassin\'s creed III', 39.99),
('ac4', 'Assassin\'s creed black flag', 39.99),
('acB', 'Assassin\'s creed brotherhood', 14.99),
('acMir', 'Assassin\'s creed mirage', 59.99),
('acOdsy', 'Assassin\'s creed Odyssey', 59.99),
('acOrg', 'Assassin\'s creed origins', 59.99),
('acR', 'Assassin\'s creed revelations', 14.99),
('acRo', 'Assassin\'s creed rogue', 29.99),
('acSy', 'Assassin\'s creed syndicate', 39.99),
('acU', 'Assassin\'s creed unity', 29.99),
('acVal', 'Assassin\'s creed valhala', 59.99);

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

CREATE TABLE `purchase` (
  `order_id` int(11) NOT NULL,
  `cost` float NOT NULL,
  `order_game_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`game_id`);

--
-- Indexes for table `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`order_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
