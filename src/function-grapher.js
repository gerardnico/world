class Grapher {

    constructor(func) {
        this.func = func;
        this.xMax = 10;
        this.xMin = -10;
        this.step = 0.1;
    }

    getData() {

        // Checks
        if (this.xMin > this.xMax) {
            throw "The xMin value (" + this.xMin + ") cannot be greater than the actual xMax value (" + this.xMax + ")";
        }

        var data = [];
        for (var i = this.xMin; i < this.xMax; i = i + this.step) {
            data.push({"x": i, "y": this.func(i)});
        }
        return data;
    }

    setStep(step) {

        this.step = Math.abs(step);

    }

    /**
     * Set the X minimal value of the graph
     * Value checks are done when running any function (not at the setter level)
     * @param number
     */
    setXMin(number) {

        this.xMin = number;


    }

    /**
     * Set the X maximal value of the graph
     * Value checks are done when running any function (not at the setter level)
     * @param number
     */
    setXMax(number) {

        this.xMax = number;

    }
}

// Define a Person as an Object Literal
// var grapher = function(func){
//     this.func = func;
//     this.getData = function getData(){
//         var data = [];
//         for (var i=this.xMin;i<this.xMax;i=i+this.step){
//             data.push({ "x" : i, "y": Math.cos(i)});
//         }
//         return data;
//     }
// };
//
// // Set the prototype to be the person object (dynamic inheritance)
// // All new ColoredPerson must inherit its properties.
// grapher.prototype = {
//     xMax : 10,
//     xMin : -10,
//     step : 0.1
// };


export {Grapher as default};

