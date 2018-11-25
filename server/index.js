var express = require('express'),
  proxy = require('express-http-proxy'),
  path = require('path'),
  fs = require('fs');

var app = express();
var staticRoot = __dirname + '/../dist/';

var backendServer = (process.env.BACKEND_SERVER || 'localhost:8080')

app.set('port', (process.env.PORT || 4200));

app.use(express.static(staticRoot));

app.use(function (req, res, next) {

  // if the request is not html then move along
  var accept = req.accepts('html', 'json', 'xml');
  if (accept !== 'html') {
    return next();
  }

  // if the request has a '.' assume that it's for a file, move along
  var ext = path.extname(req.path);
  if (ext !== '') {
    return next();
  }

  fs.createReadStream(staticRoot + 'index.html').pipe(res);

});

app.use('/api', proxy(backendServer, {
  forwardPath: function (req, res) {
    return '/api' + require('url').parse(req.url).path;
  }
}));

app.listen(app.get('port'), function () {
  console.log('app running on port', app.get('port'));
});
