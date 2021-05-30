-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: plumbing
-- ------------------------------------------------------
-- Server version	8.0.25-0ubuntu0.20.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bathroom`
--

DROP TABLE IF EXISTS `bathroom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bathroom` (
  `id` int NOT NULL AUTO_INCREMENT,
  `manufacturer` varchar(45) NOT NULL,
  `frame` varchar(45) NOT NULL,
  `drain` varchar(45) NOT NULL,
  `panel` varchar(45) NOT NULL,
  `length` int NOT NULL,
  `width` int NOT NULL,
  `depth` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `imgSours` varchar(45) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bathroom`
--

LOCK TABLES `bathroom` WRITE;
/*!40000 ALTER TABLE `bathroom` DISABLE KEYS */;
INSERT INTO `bathroom` VALUES (24,'MarkaOne','есть в комплекте','есть в комплекте','есть в комплекте',170,70,43,'Акриловая ванна MarkaOne Modern 170х70','/images/1615727593842-image.png',16470),(25,'1Marka','есть в комплекте','есть в комплекте','приобретается отдельно',170,70,42,'Акриловая ванна 1Marka Classic 170х70','/images/1615727797930-image.png',14570),(26,'MarkaOne','есть в комплекте','есть в комплекте','есть в комплекте',180,80,45,'Акриловая ванна MarkaOne Aelita 180х80','/images/1615729188078-image.png',24320),(27,'1Marka','есть в комплекте','есть в комплекте','приобретается отдельно',170,105,47,'Акриловая ванна 1Marka Diana 170х105','/images/1615729397515-image.png',28320),(28,'Aquanet','есть в комплекте','есть в комплекте','приобретается отдельно',180,70,41,'Акриловая ванна Aquanet Bright 180х70','/images/1615729594759-image.png',16000),(29,'1Marka','есть в комплекте','есть в комплекте','приобретается отдельно',165,70,42,'Акриловая ванна 1Marka Elegance 165х70','/images/1615729726194-image.png',17000),(30,'1Marka','есть в комплекте','есть в комплекте','приобретается отдельно',130,70,42,'Акриловая ванна 1Marka Classic 130х70 ','/images/1615729833460-image.png',12000),(31,'MarkaOne','есть в комплекте','есть в комплекте','приобретается отдельно',170,75,45,'Акриловая ванна MarkaOne Aelita 170х75','/images/1615730078922-image.png',23000);
/*!40000 ALTER TABLE `bathroom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `heated_towel_rail`
--

DROP TABLE IF EXISTS `heated_towel_rail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `heated_towel_rail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `manufacturer` varchar(45) NOT NULL,
  `form` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `guarantee` varchar(45) NOT NULL,
  `name` varchar(100) NOT NULL,
  `imgSours` varchar(45) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `heated_towel_rail`
--

LOCK TABLES `heated_towel_rail` WRITE;
/*!40000 ALTER TABLE `heated_towel_rail` DISABLE KEYS */;
INSERT INTO `heated_towel_rail` VALUES (1,'asd','asd','as','sad','asd','/images/1615657791853-image.png',0),(5,'Terminus','M-образная','Россия','10 лет','Водяной полотенцесушитель Terminus М-образный 50*40 3%2F4\"','/images/1615735287832-image.png',1500),(6,'Стилье','U-образная','Россия','5 лет','Водяной полотенцесушитель Стилье U-образный 50*45','/images/1615735362458-image.png',700),(7,'Стилье','U-образная','Россия','5 лет','Водяной полотенцесушитель Стилье U-образный 20*60','/images/1615735413920-image.png',1000),(8,'Terminus','U-образная','Россия','10 лет','Водяной полотенцесушитель Terminus U-образный 32*40','/images/1615735478022-image.png',1100),(9,'Россия','лесенка','Россия','10 лет','Водяной полотенцесушитель Terminus Аврора П22 50*119%2C6 хром%2FRAL','/images/1615735565634-image.png',18500),(10,'Ларис','лесенка','Россия','5 лет','Электрический полотенцесушитель Ларис Евромикс П8 50*80 L хром','/images/1615735643778-image.png',11200);
/*!40000 ALTER TABLE `heated_towel_rail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mixer`
--

DROP TABLE IF EXISTS `mixer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mixer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `manufacturer` varchar(45) NOT NULL,
  `control` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `guarantee` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `imgSours` varchar(45) NOT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mixer`
--

LOCK TABLES `mixer` WRITE;
/*!40000 ALTER TABLE `mixer` DISABLE KEYS */;
INSERT INTO `mixer` VALUES (1,'213','123','123','123','132фыв','/images/1615653459048-image.png',NULL),(5,'Bravat','рычажное','Германия','10 лет - на корпус смесителя и 5 лет - на картридж','Смеситель Bravat Eler для раковины F1191238CP-RUS','/images/1615734482656-image.png',3500),(6,'Bravat','рычажное','Германия','10 лет - на корпус смесителя и 5 лет - на картридж','Смеситель Bravat Slim для раковины TF1332366CP-RUS','/images/1615734528138-image.png',3100),(7,'Orange','рычажное','Германия','5 лет','Смеситель Orange Aristo M19-021b для раковины черный матовый','/images/1615734562675-image.png',4800),(8,'Bravat','рычажное','Германия','10 лет - на корпус смесителя и 5 лет - на картридж','Смеситель Bravat Fit для раковины 7F1135188CP-RUS','/images/1615734683148-image.png',3800),(9,'Orange','рычажное','Германия','10 лет - на корпус смесителя и 5 лет - на картридж','Смеситель Orange Lutz M04-121b для раковины черный матовый','/images/1615734775359-image.png',8900),(10,'Bravat','рычажное','Германия','10 лет - на корпус смесителя и 5 лет - на картридж','Смеситель Bravat Eler для кухни F7191238CP-RUS','/images/1615734878066-image.png',4100),(11,'Bravat','рычажное','Германия','10 лет - на корпус смесителя и 5 лет - на картридж','Смеситель Bravat Opal для ванны и душа F6125183CP-01-RUS','/images/1615734935320-image.png',6300);
/*!40000 ALTER TABLE `mixer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `arcticul` varchar(45) NOT NULL,
  `id_bath` int DEFAULT NULL,
  `id_heated` int DEFAULT NULL,
  `id_mixer` int DEFAULT NULL,
  `id_shower` int DEFAULT NULL,
  `id_sinks` int DEFAULT NULL,
  `id_toilet` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bathroom_idx` (`id_bath`),
  KEY `shower_idx` (`id_shower`),
  KEY `sinks_idx` (`id_sinks`),
  KEY `mixer_idx` (`id_mixer`),
  KEY `towel_idx` (`id_heated`),
  KEY `toilet_idx` (`id_toilet`),
  CONSTRAINT `bathroom` FOREIGN KEY (`id_bath`) REFERENCES `bathroom` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `mixer` FOREIGN KEY (`id_mixer`) REFERENCES `mixer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `shower` FOREIGN KEY (`id_shower`) REFERENCES `shower` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `sinks` FOREIGN KEY (`id_sinks`) REFERENCES `sinks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `toilet` FOREIGN KEY (`id_toilet`) REFERENCES `toilet` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `towel` FOREIGN KEY (`id_heated`) REFERENCES `heated_towel_rail` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (27,'bath001',24,NULL,NULL,NULL,NULL,NULL),(28,'bath001',25,NULL,NULL,NULL,NULL,NULL),(29,'bath003',26,NULL,NULL,NULL,NULL,NULL),(30,'bath004',27,NULL,NULL,NULL,NULL,NULL),(31,'bath005',28,NULL,NULL,NULL,NULL,NULL),(32,'bath006',29,NULL,NULL,NULL,NULL,NULL),(33,'bath007',30,NULL,NULL,NULL,NULL,NULL),(34,'bath008',31,NULL,NULL,NULL,NULL,NULL),(36,'show001',NULL,NULL,NULL,6,NULL,NULL),(37,'show002',NULL,NULL,NULL,7,NULL,NULL),(38,'show003',NULL,NULL,NULL,8,NULL,NULL),(39,'show004',NULL,NULL,NULL,9,NULL,NULL),(40,'show005',NULL,NULL,NULL,10,NULL,NULL),(41,'show006',NULL,NULL,NULL,11,NULL,NULL),(42,'sinks001',NULL,NULL,NULL,NULL,3,NULL),(43,'sinks002',NULL,NULL,NULL,NULL,4,NULL),(44,'sinks003',NULL,NULL,NULL,NULL,5,NULL),(45,'sinks004',NULL,NULL,NULL,NULL,6,NULL),(46,'sinks005',NULL,NULL,NULL,NULL,7,NULL),(47,'sinks006',NULL,NULL,NULL,NULL,8,NULL),(48,'mixe001',NULL,NULL,5,NULL,NULL,NULL),(49,'mixe002',NULL,NULL,6,NULL,NULL,NULL),(50,'mixe003',NULL,NULL,7,NULL,NULL,NULL),(51,'mixe004',NULL,NULL,8,NULL,NULL,NULL),(52,'mixe005',NULL,NULL,9,NULL,NULL,NULL),(53,'mixe006',NULL,NULL,10,NULL,NULL,NULL),(54,'7',NULL,NULL,11,NULL,NULL,NULL),(55,'towel001',NULL,5,NULL,NULL,NULL,NULL),(56,'towel002',NULL,6,NULL,NULL,NULL,NULL),(57,'towel003',NULL,7,NULL,NULL,NULL,NULL),(58,'towel004',NULL,8,NULL,NULL,NULL,NULL),(59,'towel005',NULL,9,NULL,NULL,NULL,NULL),(60,'towel006',NULL,10,NULL,NULL,NULL,NULL),(61,'toilet001',NULL,NULL,NULL,NULL,NULL,3),(62,'toilet002',NULL,NULL,NULL,NULL,NULL,4),(63,'toilet004',NULL,NULL,NULL,NULL,NULL,5),(64,'toilet005',NULL,NULL,NULL,NULL,NULL,6),(65,'toilet006',NULL,NULL,NULL,NULL,NULL,7),(66,'toilet007',NULL,NULL,NULL,NULL,NULL,8);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shower`
--

DROP TABLE IF EXISTS `shower`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shower` (
  `id` int NOT NULL AUTO_INCREMENT,
  `manufacturer` varchar(45) NOT NULL,
  `guarantee` varchar(45) NOT NULL,
  `height` int NOT NULL,
  `length` int NOT NULL,
  `width` int NOT NULL,
  `imgSours` varchar(45) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shower`
--

LOCK TABLES `shower` WRITE;
/*!40000 ALTER TABLE `shower` DISABLE KEYS */;
INSERT INTO `shower` VALUES (6,'Erlit','2 года',215,90,90,'/images/1615730989052-image.png','Душевая кабина Erlit ER 3509TP-C3-RUS 90*90*215 матовое стекло',27000),(7,'Erlit','2 года',215,90,90,'/images/1615731121832-image.png','Душевая кабина Erlit ER 3509P-C3 -RUS 90*90*215 матовое стекло',30000),(8,'Erlit','2 года',226,90,90,'/images/1615731192840-image.png','Душевая кабина Erlit ER 350926-C3-RUS 90*90*226',29500),(9,'Erlit','2 года',215,120,80,'/images/1615731291110-image.png','Душевая кабина Erlit ER 3512TPR-C3-RUS 120*80*215 матовое стекло',31500),(10,'Erlit','2 года',215,100,100,'/images/1615731413862-image.png','Душевая кабина Erlit ER 5710TP-C24 100*100*215',41000),(11,'Erlit','2 года',215,90,90,'/images/1615731632181-image.png','Душевая кабина Erlit ER 3509P-C4- RUS 90*90*215 тонированное стекло',28000);
/*!40000 ALTER TABLE `shower` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sinks`
--

DROP TABLE IF EXISTS `sinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sinks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `manufacturer` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `width` int NOT NULL,
  `depth` int NOT NULL,
  `guarantee` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `imgSours` varchar(45) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sinks`
--

LOCK TABLES `sinks` WRITE;
/*!40000 ALTER TABLE `sinks` DISABLE KEYS */;
INSERT INTO `sinks` VALUES (3,'Santek','Россия',38,36,'5 лет','Раковина Santek Бриз 40','/images/1615732185938-image.png',1300),(4,'Santek','Россия',46,28,'5 лет','Раковина Santek Форум 45','/images/1615732296356-image.png',1200),(5,'Santek','Россия',40,34,'5 лет','Раковина Santek Аллегро','/images/1615732273527-image.png',1300),(6,'Santek','Россия',40,31,'5 лет','Раковина Santek Анимо','/images/1615732384925-image.png',1200),(7,'Santek','Россия',36,36,'5 лет','Раковина Sanita Веер 36*36 угловая','/images/1615732480607-image.png',1400),(8,'Santek','Россия',50,40,'5 лет','Раковина Santek Анимо 50 без отверстий под смеситель','/images/1615732625411-image.png',1300);
/*!40000 ALTER TABLE `sinks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `toilet`
--

DROP TABLE IF EXISTS `toilet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `toilet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `manufacturer` varchar(45) NOT NULL,
  `width` varchar(45) NOT NULL,
  `depth` varchar(45) NOT NULL,
  `release_direction` varchar(45) NOT NULL,
  `seat_included` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `guarantee` varchar(45) NOT NULL,
  `name` varchar(100) NOT NULL,
  `imgSours` varchar(45) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `toilet`
--

LOCK TABLES `toilet` WRITE;
/*!40000 ALTER TABLE `toilet` DISABLE KEYS */;
INSERT INTO `toilet` VALUES (3,'OWL 1975','36','52','горизонтальное (в стену)','да','Швеция','10 лет для керамики и 2 года для сиденья','Подвесной унитаз OWL 1975 Eld Cirkel-H 36*52 безободковый с крышкой-сиденьем микролифт Slim','/images/1615736125637-image.png',12000),(4,'Berges','35','49','горизонтальное (в стену)','да','Германия','10 лет для керамики и 2 года для сиденья','Подвесной унитаз Berges Geo 35*49%2C1 безободковый с крышкой-сиденьем микролифт Geo slim SO','/images/1615736094099-image.png',13800),(5,'WeltWasser','39','68','горизонтальное (в стену)','да','Германия','5 лет','Унитаз-моноблок WeltWasser','/images/1615736402393-image.png',18500),(6,'WeltWasser','35','52','горизонтальное (в стену)','да','Германия','5 лет','Подвесной унитаз WeltWasser Salzbach','/images/1615736487744-image.png',15000),(7,'WeltWasser','36','52','горизонтальное (в стену)','да','Германия','5 лет','Подвесной унитаз WeltWasser Salzbach','/images/1615736583724-image.png',32500),(8,'Roca','36','68','горизонтальное (в стену)','да','Испания','10 лет','Унитаз-компакт Roca Debba 35%2C5*65%2C5 с крышкой-сиденьем','/images/1615736668967-image.png',10100);
/*!40000 ALTER TABLE `toilet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `login` char(100) DEFAULT NULL,
  `password` char(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','$2b$10$IPAnW1lSJpADnFk/NAl6W.LG/zJMQMd7m4T/IqG89TrAuBXsKLmwi');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-30 19:53:24
