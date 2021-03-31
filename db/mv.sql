/*
 Navicat MySQL Data Transfer

 Source Server         : 本地环境
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : 127.0.0.1:3306
 Source Schema         : mv

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 16/03/2021 22:54:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tbl_movies
-- ----------------------------
DROP TABLE IF EXISTS `tbl_movies`;
CREATE TABLE `tbl_movies` (
  `mv_id` mediumint unsigned NOT NULL AUTO_INCREMENT,
  `mv_cover` varchar(75) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'cover_default.jpg',
  `mv_title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `mv_year` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `mv_runtime` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `mv_storyline` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `mv_trailer` varchar(75) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'trailer_default.jpg',
  `mv_release` varchar(125) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` tinyint unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`mv_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_movies
-- ----------------------------
BEGIN;
INSERT INTO `tbl_movies` VALUES (1, 'Adult1.png', 'Wandering Earth', '2020', '195', 'The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill&rsquo;s true parentage.', '', 'May 5, 2017', 1);
INSERT INTO `tbl_movies` VALUES (2, 'Adult2.png', 'Spider Man', '2021', '210', 'Allied soldiers from Belgium, the British Empire and France are surrounded by the German army and evacuated during a fierce battle in World War II.', '', 'July 21, 2017', 1);
INSERT INTO `tbl_movies` VALUES (3, 'Adult3.png', 'TITANIG', '2020', '120', 'In the near future, a weary Logan cares for an ailing Professor X, somewhere on the Mexican border. However, Logan&rsquo;s attempts to hide from the world, and his legacy, are upended when a young mutant arrives, pursued by dark forces.', '', 'March 3,2017', 1);
INSERT INTO `tbl_movies` VALUES (4, 'Adult4.png', 'The Wasted Times', '2020', '230', ' Meet Mija, a young girl who risks everything to prevent a powerful, multi-national company from kidnapping her best friend - a fascinating animal named Okja. ', '', 'June 28,2017', 1);
INSERT INTO `tbl_movies` VALUES (5, 'Adult5.png', 'The Grandmaster', '2019', '160', 'An adaptation of the fairy tale about a monstrous-looking prince and a young woman who fall in love. ', '', 'March 17, 2017', 1);
INSERT INTO `tbl_movies` VALUES (6, 'Adult6.png', 'Mulan', '2019', '180', 'WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people, and becomes the first man in American history to receive the Medal of Honor without firing a shot.', '', 'November 4, 2016', 1);
INSERT INTO `tbl_movies` VALUES (7, 'Adult7.png', 'Se7en', '2018', '220', 'A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.', '', 'Febuary 12, 2016', 1);
INSERT INTO `tbl_movies` VALUES (8, 'Adult8.png', 'Wall', '2016', '230', 'When twelve mysterious spacecraft appear around the world, linguistics professor Louise Banks is tasked with interpreting the language of the apparent alien visitors.', '', 'November 11, 2016', 1);
INSERT INTO `tbl_movies` VALUES (9, 'Adult9.png', 'Let Me In', '2016', '190', 'The story of Eddie Edwards, the notoriously tenacious British underdog ski jumper who charmed the world at the 1988 Winter Olympics.', '', 'Febuary 26, 2016', 1);
INSERT INTO `tbl_movies` VALUES (10, 'Adult10.png', 'Venom', '2016', '190', 'After the Bergens invade Troll Village, Poppy, the happiest Troll ever born, and the curmudgeonly Branch set off on a journey to rescue her friends.', '', 'November 4, 2016', 1);
INSERT INTO `tbl_movies` VALUES (11, 'Child1.png', 'Spongebob', '2015', '2h 36m', 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.', '', 'January 8, 2015', 1);
INSERT INTO `tbl_movies` VALUES (12, 'Child2.png', 'Brooklyn', '2021', '1h 57m', 'An Irish immigrant lands in 1950s Brooklyn, where she quickly falls into a romance with a local. When her past catches up with her, however, she must choose between two countries and the lives that exist within.', '', 'November 25, 2015', 2);
INSERT INTO `tbl_movies` VALUES (13, 'Child3.png', 'The Walk', '2019', '2h 3m', 'In 1974, high-wire artist Philippe Petit recruits a team of people to help him realize his dream: to walk the immense void between the World Trade Center towers.', '', 'October 9, 2015', 2);
INSERT INTO `tbl_movies` VALUES (14, 'Child4.png', 'Kong Fu Panda', '2018', '1h 46m', 'A young woman&rsquo;s desperate search for her abducted boyfriend that draws her into the infamous Colonia Dignidad, a sect nobody has ever escaped from.', '', 'April 15, 2015', 2);
INSERT INTO `tbl_movies` VALUES (15, 'Child5.png', 'Like Having', '2015', '2h 16m', 'Three decades after the Empire&rsquo;s defeat, a new threat arises in the militant First Order. Stormtrooper defector Finn and spare parts scavenger Rey are caught up in the Resistance&rsquo;s search for the missing Luke Skywalker.', '', 'December 18, 2015', 2);
INSERT INTO `tbl_movies` VALUES (16, 'Child6.png', 'TOY 3', '2019', '1h 47m', 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.', '', 'October 15, 2014', 2);
INSERT INTO `tbl_movies` VALUES (17, 'Child7.png', 'DIVERTIDA MENTE', '2014', '2h 1m', 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.', '', 'August 1, 2014', 2);
INSERT INTO `tbl_movies` VALUES (18, 'Child8.png', 'DARK STAR', '2021', '1h 30m', 'A New Jersey guy dedicated to his family, friends, and church, develops unrealistic expectations from watching porn and works to find happiness and intimacy with his potential true love.', '', 'September 27, 2013', 2);
INSERT INTO `tbl_movies` VALUES (19, 'Child9.png', 'YULE BELIEVE IN ELVES', '2015', '1h 31m', 'Two astronauts work together to survive after an accident which leaves them alone in space.', '', 'October 4, 2013', 2);
INSERT INTO `tbl_movies` VALUES (20, 'Child10.png', 'JACK FEOAT', '2012', '2h 7m', 'A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery. While cast away, he forms an unexpected connection with another survivor: a fearsome Bengal tiger.', '', 'November 21, 2012', 2);
INSERT INTO `tbl_movies` VALUES (21, 'Child11.png', 'THE EASTER BUNNY', '2012', '2h 2m', 'After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife. Things get more challenging when Pat meets Tiffany, a mysterious girl with problems of her own.', '', 'December 25, 2012', 2);
COMMIT;

-- ----------------------------
-- Table structure for tbl_user
-- ----------------------------
DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE `tbl_user` (
  `user_id` mediumint unsigned NOT NULL AUTO_INCREMENT,
  `user_fname` varchar(250) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `user_pass` varchar(250) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_ip` varchar(50) NOT NULL DEFAULT 'no',
  `user_admin` tinyint DEFAULT NULL,
  `user_access` tinyint DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_user
-- ----------------------------
BEGIN;
INSERT INTO `tbl_user` VALUES (1, 'admin', 'user1', '123456', 'admin@t.com', '2021-03-16 03:07:35', '127.0.0.1', 1, 5);
INSERT INTO `tbl_user` VALUES (2, 'jame', 'user2', '123456', 'admin@t.com', '2019-03-15 04:11:28', '127.0.0.1:8000', 1, 5);
INSERT INTO `tbl_user` VALUES (3, 'test', 'user3', '123456', 'admin@t.com', '2019-03-13 04:12:40', '127.0.0.1:8000', 0, 3);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
