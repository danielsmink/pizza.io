var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.get('/*', function(req, res, next){
    res.sendFile('./public/tracker.html');
});

app.listen(8080);