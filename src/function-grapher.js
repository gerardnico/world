
// Define a Person as an Object Literal
var grapher = function(func){
    this.func = func;
    this.getData = function getData(){
        var data = [];
        for (var i=this.xMin;i<this.xMax;i=i+this.step){
            data.push({ "x" : i, "y": Math.cos(i)});
        }
        return data;
    }
};

// Set the prototype to be the person object (dynamic inheritance)
// All new ColoredPerson must inherit its properties.
grapher.prototype = {
    xMax : 10,
    xMin : -10,
    step : 0.1
};


export {grapher as default};

