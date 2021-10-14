CREATE DATABASE chat;

USE chat;
/* Describe your table here.*/

CREATE TABLE usernames (
  id INT auto_increment,
  username varchar(20),
  CONSTRAINT usernames_pk PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int auto_increment,
  messages varchar(150),
  roomname varchar(20),
  usernameId int,
  CONSTRAINT messages_pk PRIMARY KEY (id),
  FOREIGN KEY (usernameId) REFERENCES usernames(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/



-- insert into messages (messages, usernameId, roomname) values ('In mercy's name, three days is all I need.', (select id from usernames where username = 'Valjean'), 'Hello')