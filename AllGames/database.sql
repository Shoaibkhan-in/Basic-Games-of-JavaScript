create database if not exists Gamebits;
use Gamebits;
CREATE TABLE if not exists users (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
);
select * from users;