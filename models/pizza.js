var Pizza = function () {

    this.x = Math.floor((Math.random() * 10) + 1);
    this.y = Math.floor((Math.random() * 10) + 1);
    this.color = '#' + Math.floor(Math.random()*16777215).toString(16);

    this.getLocation = function () {
        this.x = Math.floor((Math.random() * 10) + 1);
        this.y = Math.floor((Math.random() * 10) + 1);
    };
};

module.exports = Pizza;
