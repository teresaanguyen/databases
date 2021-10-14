var db = require('../db');
var {pool} = require('../db/index.js');

module.exports = {
  // a function which produces all the messages
  getAll: function (callback) {
    let q = 'select u.username, m.messages, m.roomname from messages m inner join usernames u on m.usernameId = u.id;';

    // let q = 'select u.username, m.messages, r.roomname from messages m inner join usernames u on m.usernameId = u.id inner join rooms r on r.id = m.roomnameId;';

    // let q = 'SELECT u.username, m.messages, r.roomname FROM usernames u, messages m, rooms r WHERE u.id = m.usernameId AND r.id = m.roomnameId;'; // another easier to read way

    pool.query(q, (error, results) => {
      if (error) {
        callback(error);
      } else {
        console.log(results);
        callback(null, results);
      }
    });

  },

  // a function which can be used to insert a message into the database
  create: function (data, callback) {
    var { username, message, room } = data;
    let q = `insert into messages (messages, usernameId, roomname) values ('${message}', (select id from usernames where username = '${username}'), '${room}')`;
    pool.query(q, (error, results) => {
      if (error) {
        callback(error);
      } else {
        console.log('insert successful');
        callback(results);
      }
    });
  }
};



// INSERT INTO rooms (roomName) VALUE ('lobby'); // Insertion method

// to reset the auto_increment delete rows from table and use alter table
// DELETE FROM rooms WHERE roomName = 'lobby';
// ALTER TABLE rooms AUTO_INCREMENT = 1;

