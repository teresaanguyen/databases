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
    models.messages.create(data, (error, results) => {
      if (error) {
        res.status(400).send(error);
      } else {
        console.log('results from controller', results);
        res.status(200).send('Message received'); // or send nothing since we dont need anything
      }
    });
  }
};


// node version of request handler
//request handler
// var utils = require('./utils');

// var objectIdCounter = 1;
// var messages = [
//   // Note: an initial message is useful for debugging purposes.
//   /*
//   {
//     text: 'hello world',
//     username: 'fred',
//     objectId: objectIdCounter
//   }
//   */
// ];

// var actions = {
//   'GET': function(request, response) {
//     utils.sendResponse(response, {results: messages});
//   },
//   'POST': function(request, response) {
//     utils.collectData(request, function(message) {
//       message.objectId = ++objectIdCounter;
//       messages.push(message);
//       utils.sendResponse(response, {objectId: message.objectId}, 201);
//     });
//   },
//   'OPTIONS': function(request, response) {
//     utils.sendResponse(response, null);
//   }
// };

// exports.requestHandler = utils.makeActionHandler(actions);

// // utils
// var headers = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10, // Seconds.
//   'Content-Type': 'application/json'
// };

// exports.sendResponse = function(response, data, statusCode) {
//   statusCode = statusCode || 200;
//   response.writeHead(statusCode, headers);
//   response.end(JSON.stringify(data));
// };

// exports.collectData = function(request, callback) {
//   var data = '';
//   request.on('data', function(chunk) {
//     data += chunk;
//   });
//   request.on('end', function() {
//     callback(JSON.parse(data));
//   });
// };

// exports.makeActionHandler = function(actionMap) {
//   return function(request, response) {
//     var action = actionMap[request.method];
//     if (action) {
//       action(request, response);
//     } else {
//       exports.sendResponse(response, '', 404);
//     }
//   };
// };