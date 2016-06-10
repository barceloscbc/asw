USE `ASWF`;

--
-- Table structure for table `Lehrveranstaltung`
--

DROP TABLE IF EXISTS `Lehrveranstaltung`;
CREATE TABLE `Lehrveranstaltung` (
  `LVID` varchar(16) NOT NULL,
  `Raum` varchar(16) DEFAULT NULL,
  `Semester` int(11) DEFAULT NULL,
  `Titel` varchar(256) DEFAULT NULL,
  `Zeit` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`LVID`)
);

--
-- Table structure for table `Studiengang`
--

DROP TABLE IF EXISTS `Studiengang`;
CREATE TABLE `Studiengang` (
  `SGID` varchar(16) NOT NULL,
  `Bezeichnung` varchar(128) DEFAULT NULL,
  `Abschluss` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`SGID`)
);

--
-- Table structure for table `Studenten`
--

DROP TABLE IF EXISTS `Studenten`;
CREATE TABLE `Studenten` (
  `MatrNr` varchar(16) NOT NULL,
  `Name` varchar(64) DEFAULT NULL,
  `Strasse` varchar(64) DEFAULT NULL,
  `PLZ` varchar(5) DEFAULT NULL,
  `ORT` varchar(16) DEFAULT NULL,
  `Telefon` varchar(16) DEFAULT NULL,
  `EmailAdresse` varchar(64) DEFAULT NULL,
  `SGID` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`MatrNr`),
  KEY `SGID` (`SGID`),
  CONSTRAINT `Studenten_ibfk_1` FOREIGN KEY (`SGID`) REFERENCES `Studiengang` (`SGID`)
);

--
-- Table structure for table `besteht_aus`
--

DROP TABLE IF EXISTS `besteht_aus`;
CREATE TABLE `besteht_aus` (
  `SGID` varchar(16) NOT NULL,
  `LVID` varchar(16) NOT NULL,
  PRIMARY KEY (`SGID`,`LVID`),
  KEY `LVID` (`LVID`),
  CONSTRAINT `besteht_aus_ibfk_1` FOREIGN KEY (`SGID`) REFERENCES `Studiengang` (`SGID`),
  CONSTRAINT `besteht_aus_ibfk_2` FOREIGN KEY (`LVID`) REFERENCES `Lehrveranstaltung` (`LVID`)
);

--
-- Table structure for table `besuchen`
--

DROP TABLE IF EXISTS `besuchen`;
CREATE TABLE `besuchen` (
  `MatrNr` varchar(16) NOT NULL,
  `LVID` varchar(16) NOT NULL,
  `Note` int(11) DEFAULT NULL,
  PRIMARY KEY (`MatrNr`,`LVID`),
  KEY `LVID` (`LVID`),
  CONSTRAINT `besuchen_ibfk_1` FOREIGN KEY (`MatrNr`) REFERENCES `Studenten` (`MatrNr`),
  CONSTRAINT `besuchen_ibfk_2` FOREIGN KEY (`LVID`) REFERENCES `Lehrveranstaltung` (`LVID`)
);