-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: library_db
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `title` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `date` int DEFAULT NULL,
  `genre` varchar(50) DEFAULT NULL,
  `pages` int DEFAULT NULL,
  `checked_out_by` varchar(255) DEFAULT NULL,
  `instock` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES ('Gone with the Wind','Margaret Mitchell',1936,'Classic',1037,NULL,1),
  ('Lord of the Flies','William Golding',1954,'Fantasy',224,NULL,1),
  ('Animal Farm','George Orwell',1945,'Fantasy',92,NULL,1),
  ('Wicked','Gregory Maguire',1995,'Fantasy',560,NULL,1),
  ('Son of a Witch','Gregory Maguire',2005,'Fantasy',352,NULL,1),
  ('A Lion Among Men','Gregory Maguire',2008,'Fantasy',309,NULL,1),
  ('Out of Oz','Gregory Maguire',2011,'Fantasy',592,NULL,1),
  ('Fahrenheit 451','Ray Bradbury',1953,'Dystopian',156,NULL,1),
  ('Fellowship of the Ring','J.R.R Tolkien',1954,'Fantasy',423,NULL,1),
  ('A Court of Silver Flames','Sarah J. Maas',2021,'Fantasy',784,NULL,1),
  ('The Housemaid','Freida McFadden',2022,'Mystery',336,NULL,1),
  ('Then She Was Gone','Lisa Jewell',2017,'Mystery',384,NULL,1),
  ('The Social Animal','David Brooks',2011,'Non-fiction',448,NULL,1),
  ('Hidden Figures','Margot Lee Shetterly',2016,'Non-fiction',368,NULL,1),
  ('The Outsiders','S.E. Hinton',1967,'Classic',192,NULL,1),
  ('Odyssey','Homer',1614,'Classic',461,NULL,1),
  ('Diary of a Wimpy Kid','Jeff Kinney',2007,'Comedy',221,NULL,1),
  ('The Cat in the Hat','Dr. Seuss',1957,'Comedy',36,NULL,1),
  ('1984','George Orwell',1949,'Dystopian',328,NULL,1),
  ('Gone Girl','Gillian Flynn',2012,'Mystery',432,NULL,1),
  ('A Midsummer Nights Dream','William Shakespeare',1600,'Classic',83,NULL,1),
  ('Divergent','Veronica Roth',2011,'Dystopian',487,NULL,1),
  ('The Maze Runner','James Dashner',2009,'Dystopian',375,NULL,1),
  ('The Scorch Trials','James Dashner',2010,'Dystopian',360,NULL,1),
  ('The Death Cure','James Dashner',2011,'Dystopian',325,NULL,1),
  ('The Firm','John Grisham',1991,'Mystery',432,NULL,1),
  ('The Lightning Thief','Rick Riordan',2005,'Fantasy',377,NULL,1),
  ('The Sea of Monsters','Rick Riordan',2006,'Fantasy',279,NULL,1),
  ('The Titans Curse','Rick Riordan',2007,'Fantasy',312,NULL,1),
  ('The Battle of the Labyrinth','Rick Riordan',2008,'Fantasy',361,NULL,1),
  ('The Last Olympian','Rick Riordan',2009,'Fantasy',381,NULL,1);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_info` (
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
INSERT INTO `user_info` VALUES ('evanTrejo','password','et@example.com'),('AshM','AshM','am@example.com'),('ChaHesub','strongpassword','ch@example.com'),('elliott','12345','ee@example.com');
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-03 16:55:58
