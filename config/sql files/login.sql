-- --------------------------------------------------------
-- 호스트:                          conative.myds.me
-- 서버 버전:                        5.7.31 - MySQL Community Server (GPL)
-- 서버 OS:                        Linux
-- HeidiSQL 버전:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 테이블 5g_db.Login 구조 내보내기
DROP TABLE IF EXISTS `Login`;
CREATE TABLE IF NOT EXISTS `Login` (
  `uid` int(11) NOT NULL,
  `id` varchar(20) NOT NULL,
  `pw` varchar(20) NOT NULL DEFAULT '',
  `groups` varchar(30) DEFAULT '',
  `email` varchar(30) DEFAULT '',
  `s_date` date DEFAULT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 테이블 데이터 5g_db.Login:~1 rows (대략적) 내보내기
DELETE FROM `Login`;
/*!40000 ALTER TABLE `Login` DISABLE KEYS */;
INSERT INTO `Login` (`uid`, `id`, `pw`, `groups`, `email`, `s_date`) VALUES
	(1, '123', 'asd123123', 'UIT', 'hqweqwe@naver.com', '2020-12-23');
/*!40000 ALTER TABLE `Login` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
