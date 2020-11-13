CREATE TABLE `books` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(250) NOT NULL,
	`isbn` INT(15) NOT NULL,
	`book_image` VARCHAR(250) NOT NULL,
	`author` VARCHAR(250) NOT NULL,
	`price` DOUBLE(10) NOT NULL,
	`description` VARCHAR(250) NOT NULL,
	PRIMARY KEY (`id`)
);