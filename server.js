var express = require('express');
var index = require('./routes/index');
var athletes = require('./routes/athletes');
var app = express();

//Static files
app.use(express.static('public'));
//Routers
app.use('/', index);
app.use('/athletes', athletes);

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('listening on port', port);
});
