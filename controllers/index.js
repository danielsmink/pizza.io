

module.exports = function (http) {
    var io = require('socket.io')(http),
        models = require('./../models'),
        pizzas = [],
        numberOfPizzas = Math.floor((Math.random() * 50) + 1);

    for (var i = 0; i < numberOfPizzas; i++) {
        var pizza = new models.pizza();
        pizzas.push(pizza);
    }

    io.on('connection', function(socket){

        io.emit('pizzas', pizzas);
        setInterval(function(){
            var pizzaId = Math.floor((Math.random() * numberOfPizzas) + 1) - 1;

            pizzas[pizzaId].oldX = pizzas[pizzaId].x;
            pizzas[pizzaId].oldY = pizzas[pizzaId].y;
            pizzas[pizzaId].getLocation();
            io.emit('singlepizza', pizzas[pizzaId]);
        }, 1000);
    });
}