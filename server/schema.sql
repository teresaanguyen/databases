CREATE DATABASE chat;

USE chat;
/* Describe your table here.*/

CREATE TABLE usernames (
  id INT auto_increment,
  username varchar(20),
  CONSTRAINT usernames_pk PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id int auto_increment,
  roomName varchar(30),
  CONSTRAINT rooms_pk PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int auto_increment,
  messages varchar(150),
  usernameId int,
  roomnameId int,
  CONSTRAINT messages_pk PRIMARY KEY (id),
  FOREIGN KEY (usernameId) REFERENCES usernames(id),
  FOREIGN KEY (roomnameId) REFERENCES rooms(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

