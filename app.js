var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    controller = require('./controllers')(http);

app.get('/*', function(req, res, next){
    if(req.url.indexOf('.js') === -1 &&
        req.url.indexOf('.css') === -1) {
        req.url = '/tracker.html';
    }
    next();
});

app.use(express.static(__dirname + '/public'));

http.listen(8080);