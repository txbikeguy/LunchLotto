DROP DATABASE IF EXISTS lunch_db;
CREATE DATABASE lunch_db;
USE lunch_db;

CREATE TABLE lunch
(
    id int NOT NULL AUTO_INCREMENT,
    user_name varchar (50) NOT NULL,
    group_name varchar (50) NOT NULL,
    restaurant_name varchar (50) NOT NULL,
    PRIMARY KEY (id)

);  