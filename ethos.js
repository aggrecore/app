/**
 * Created by Christopher C. White on 8/21/2014.
 */
  var express        = require('express');
  var app            = express();
  var bodyParser     = require('body-parser');

  app.use(express.static(__dirname + '/public'));
  app.get('*', function (req, res) {
    res.sendfile('./public/index.html');
  });

  app.listen(9000);
  console.log("online 9000");
