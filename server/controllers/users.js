var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll( (error, results) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.status(200).send(JSON.stringify(results));
      }
    });
  },

  post: function (req, res) {
    console.log(req.body);
    var data = req.body;
    models.users.create(data, (error, results) => {
      if (error) {
        res.status(400).send(error);
      } else {
        console.log('results from controller', results);
        res.status(200).send('User received'); // or send nothing since we dont need anything
      }
    });
  }

};
