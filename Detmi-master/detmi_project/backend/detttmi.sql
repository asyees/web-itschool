-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               8.3.0 - MySQL Community Server - GPL
-- Операционная система:         Win64
-- HeidiSQL Версия:              12.6.0.6765
-- --------------------------------------------------------


-- запуск только после создания всех таблиц!!!!!!!!!!!!!!!




/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Дамп данных таблицы detmi.inputoutputs: ~3 rows (приблизительно)
INSERT INTO `inputoutputs` (`id`, `input`, `output`, `createdAt`, `updatedAt`) VALUES
	(1, '2 5', '5 2', '2024-05-29 03:19:38', '2024-05-29 03:19:39'),
	(2, '15 40', '55', '2024-05-30 14:58:05', '2024-05-30 14:58:05'),
	(3, '50 15', '35', '2024-05-30 14:59:52', '2024-05-30 14:59:53');

-- Дамп данных таблицы detmi.tasks: ~3 rows (приблизительно)
INSERT INTO `tasks` (`id`, `title`, `text`, `url`, `rating`, `createdAt`, `updatedAt`, `inputoutputId`) VALUES
	(1, 'меньшее и большее', 'С клавиатуры вводятся два челых числа напишите какое большее, а какое меньшее', '123', 30, '2024-05-29 03:20:14', '2024-05-29 03:20:14', 1),
	(2, 'Алгебраическая сумма', 'Напишите программу которая посчитает сумму двух чисел которые вводятся с клавиатуры', '0', 25, '2024-05-30 14:57:39', '2024-05-30 14:57:40', 2),
	(3, 'Разность', 'НАпиши программу, которая посчитает разность двух чисел введных с клавиатуры', '0', 15, '2024-05-30 14:59:15', '2024-05-30 14:59:16', 3);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
