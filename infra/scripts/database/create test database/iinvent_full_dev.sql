CREATE DATABASE  IF NOT EXISTS `iinvent_dev` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `iinvent_dev`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: iconedatabase
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_admins`
--

DROP TABLE IF EXISTS `tb_admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_admins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `nivel_acesso` enum('admin','user') DEFAULT 'user',
  `data_criacao` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuario` (`usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_admins`
--

LOCK TABLES `tb_admins` WRITE;
/*!40000 ALTER TABLE `tb_admins` DISABLE KEYS */;
INSERT INTO `tb_admins` VALUES (23,'thiago','NeCXwlkubx9glW/aVo6QWBFTFYpL0J9R8eTgioP5PW8=','admin','2024-03-15 16:27:58'),(26,'teste','RgcNS/k0+w1LBtnixG40aUTjIkRJAKQ119mpXm10NfU=','admin','2024-03-19 09:19:41'),(27,'thiago2','yTHY5KTKvvG6chSvYNc3qb6DyurPwYGCZDTB45U4BVE=','user','2024-03-19 11:24:36'),(28,'admin','admin','user','2024-04-05 09:06:11'),(29,'teste2','','user','2024-04-15 15:23:12');
/*!40000 ALTER TABLE `tb_admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_produtos`
--

DROP TABLE IF EXISTS `tb_produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(50) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `modelo` varchar(50) DEFAULT NULL,
  `numero_registro` varchar(50) NOT NULL,
  `observacao` text,
  `status_emprestimo` varchar(100) DEFAULT NULL,
  `data_criacao` datetime DEFAULT CURRENT_TIMESTAMP,
  `id_usuario` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `numero_registro` (`numero_registro`),
  KEY `fk_usuario_id` (`id_usuario`),
  CONSTRAINT `fk_usuario_id` FOREIGN KEY (`id_usuario`) REFERENCES `tb_usuarios` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_produtos`
--

LOCK TABLES `tb_produtos` WRITE;
/*!40000 ALTER TABLE `tb_produtos` DISABLE KEYS */;
INSERT INTO `tb_produtos` VALUES (1,'NOTEBOOK','LENOVO','3i','27','intel i7',NULL,'2024-02-27 16:12:25',93),(87,'ASDFAS','ASDFASD','fasdfsdf','asdfas','sssssssssssssssssafsssssssssssssssssafsssssssssssssssssafsssssssssssssssssafsssssssssssssssssafsssssssssssssssssafsssssssssssssssssafsssssssssssssssssafsssssssssssssssssafsssssssssssssssssaf',NULL,'2024-03-05 15:18:18',93),(104,'MONITOR','3D','','fdsafdsafd','2323232323232323','Teste De Sistema','2024-03-08 14:13:51',91),(116,'NOTEBOOK','LENOVO','asdfsd','ewdeee','56454','Maria Eduarda Gomes','2024-03-13 15:16:09',94),(118,'ASDFASD','DSAFDSF','fsdfsdfs','dsfd','aaaaaaaaaaaaaaaa','João Marcos','2024-03-13 16:28:43',91),(125,'TECLADO','MULTILASER','TC065','dk','','João Marcos','2024-03-19 11:09:33',91),(126,'COMPUTADOR','LENOVO','A','123','BBBBB','Thiago Lucas Silveira Costa','2024-07-26 11:48:37',93),(128,'MOUSE','LOGITECH','mod','12355','obs',NULL,'2024-07-26 11:54:26',NULL);
/*!40000 ALTER TABLE `tb_produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_registro`
--

DROP TABLE IF EXISTS `tb_registro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_registro` (
  `id` int NOT NULL AUTO_INCREMENT,
  `responsavel_criacao` varchar(50) DEFAULT NULL,
  `nome_solicitante` varchar(50) DEFAULT NULL,
  `id_produto` int DEFAULT NULL,
  `data_registro` date DEFAULT NULL,
  `hora_registro` time DEFAULT NULL,
  `produto_tipo` varchar(50) DEFAULT NULL,
  `produto_marca` varchar(50) DEFAULT NULL,
  `produto_modelo` varchar(50) DEFAULT NULL,
  `produto_numero_registro` varchar(50) DEFAULT NULL,
  `produto_observacao` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_registro`
--

LOCK TABLES `tb_registro` WRITE;
/*!40000 ALTER TABLE `tb_registro` DISABLE KEYS */;
INSERT INTO `tb_registro` VALUES (1,'thiago','joão',1,'2024-03-08',NULL,NULL,NULL,NULL,NULL,NULL),(2,'teste',NULL,125,'2024-07-26','11:24:40','MULTILASER','kdsjf','dk','dk',''),(3,'teste',NULL,125,'2024-07-26','11:33:09','TECLADO','MULTILASER','dk','dk',''),(4,'teste','João Marcos',125,'2024-07-26','11:34:37','TECLADO','MULTILASER','TC065','dk',''),(5,'teste','Thiago Lucas Silveira Costa',0,'2024-07-26','11:48:37','COMPUTADOR','LENOVO','A','123','BBBBB'),(6,'teste',NULL,128,'2024-07-26','11:54:26','mouse','logitech','mod','12355','obs'),(7,'teste','João Marcos',1,'2024-07-26','14:19:59','Notebook','Lenovo','3i','556','intel i7'),(8,'teste','João Marcos',1,'2024-07-26','14:26:13','Notebook','Lenovo','3i','alskd566516','intel i7'),(9,'teste','',1,'2024-07-26','14:30:46','Notebook','Lenovo','3i','27','intel i7'),(10,'teste','Thiago Lucas Silveira Costa',1,'2024-07-26','14:31:34','NOTEBOOK','LENOVO','3i','27','intel i7'),(11,'teste','Thiago Lucas Silveira Costa',87,'2024-07-26','14:32:38','asdfas','asdfasd','fasdfsdf','asdfas','sssssssssssssssssafsssssssssssssssssafsssssssssssssssssafsssssssssssssssssafsssssssssssssssssafsssssssssssssssssafsssssssssssssssssafsssssssssssssssssafsssssssssssssssssafsssssssssssssssssaf'),(12,'teste','João Marcos',104,'2024-07-26','14:32:52','Monitor','3d','','fdsafdsafd','2323232323232323'),(13,'teste','João Marcos',118,'2024-07-26','14:32:56','asdfasd','dsafdsf','fsdfsdfs','dsfd','aaaaaaaaaaaaaaaa'),(14,'teste','',128,'2024-07-26','14:33:10','mouse','logitech','mod','12355','obs');
/*!40000 ALTER TABLE `tb_registro` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `before_insert_tb_registro` BEFORE INSERT ON `tb_registro` FOR EACH ROW BEGIN
    IF NEW.data_registro IS NULL THEN
        SET NEW.data_registro = CURDATE();
    END IF;
    IF NEW.hora_registro IS NULL THEN
        SET NEW.hora_registro = CURTIME();
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tb_usuarios`
--

DROP TABLE IF EXISTS `tb_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_completo` varchar(50) NOT NULL,
  `cpf` char(11) NOT NULL,
  `rg` char(14) DEFAULT NULL,
  `data_criacao` datetime DEFAULT CURRENT_TIMESTAMP,
  `uf_rg` enum('AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO') NOT NULL DEFAULT 'MG',
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome_completo` (`nome_completo`),
  UNIQUE KEY `cpf` (`cpf`),
  UNIQUE KEY `rg` (`rg`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_usuarios`
--

LOCK TABLES `tb_usuarios` WRITE;
/*!40000 ALTER TABLE `tb_usuarios` DISABLE KEYS */;
INSERT INTO `tb_usuarios` VALUES (79,'Testeste Testes','14321851602','1234566','2024-03-05 14:25:51','MG'),(91,'João Marcos','14321851607','20.925.597','2024-03-07 09:02:35','ES'),(93,'Thiago Lucas Silveira Costa','14321851603','31546545','2024-03-08 13:22:14','MG'),(94,'Maria Eduarda Gomes','13159394603','19158519','2024-03-13 15:13:00','MG'),(95,'Marcos Paulo','14321855561','6415644546','2024-03-15 08:10:01','RS');
/*!40000 ALTER TABLE `tb_usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'iconedatabase'
--

--
-- Dumping routines for database 'iconedatabase'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-26 20:28:31
