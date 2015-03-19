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
            var pizza = pizzas[pizzaId];

            pizza.oldX = pizza.x;
            pizza.oldY = pizza.y;
            pizza.getLocation();
            io.emit('singlepizza', pizza);
        }, 1000);
    });
}