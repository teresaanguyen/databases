var db = require('../db');
var {pool} = require('../db/index.js');

module.exports = {
  getAll: function (callback) {
    let q = 'select u.username from usernames u';
    pool.query(q, (error, results) => {
      if (error) {
        callback(error);
      } else {
        callback(null, results);
      }
    });
  },

  create: function (data, callback) {
    var user = data.username;
    console.log(user);
    let q = `insert into usernames (username) value ('${user}');`;
    pool.query(q, (error, results) => {
      if (error) {
        callback(error);
      } else {
        callback(null, results);
      }
    });
  }

};
