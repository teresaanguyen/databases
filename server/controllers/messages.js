var models = require('../models');

module.exports = {
  // a function which handles a get request for all messages
  get: function (req, res) {
    // invoke model function
    // send back data retreived

    models.messages.getAll( (error, results) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.status(200).send(JSON.stringify(results));
      }
    });

  },


  // a function which handles posting a message to the database
  post: function (req, res) {
    // console.log(req.body);
    var data = req.body;
    console.log(data);
    models.messages.create(data, (error, results) => {
      if (error) {
        res.status(400).send(error);
      } else {
        // console.log('results from controller', results);
        res.status(201).end('Message received'); // or send nothing since we dont need anything
      }
    });
  }
};