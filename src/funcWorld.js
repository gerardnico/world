import {default as vegaEmbed} from "vega-embed";

class funcWorld {

    constructor(func) {

        // Only the function is mandatory
        this.func = func;

        // Default graph Properties
        this.xMax = 10;
        this.xMin = -10;
        this.step = 0.1;
        this.width = 600;
        this.height = 300;
        this.title = func.toString();

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
        return this;

    }

    setWidth(width) {

        this.width = width;
        return this;

    }

    setHeight(height) {

        this.width = height;
        return this;

    }

    setTitle(title) {

        this.title = title;
        return this;

    }

    /**
     * Set the X minimal value of the graph
     * Value checks are done when running any function (not at the setter level)
     * @param number
     */
    setXMin(number) {

        this.xMin = number;
        return this;

    }

    /**
     * Set the X maximal value of the graph
     * Value checks are done when running any function (not at the setter level)
     * @param number
     */
    setXMax(number) {

        this.xMax = number;
        return this;

    }

    render(selector){

        if ("undefined"==typeof selector){
            selector = "body";
            console.warning("Without selector, only one graph can be rendered in the document.")
        }

        var vlSpec = {
            "title": this.title,
            "height": this.height,
            "width": this.width,
            "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
            "data": {
                "values": this.getData(),
            },
            // "mark": {"type": "point", "filled": true}, // or line
            "mark": {"type": "line", "interpolate": "basis"}, // or line
            "encoding": {
                "x": {
                    "field": "x",
                    "type": "quantitative",
                    "axis": {
                        "title": "X"
                    }
                },
                "y": {
                    "field": "y",
                    "type": "quantitative",
                    "axis": {
                        "title": "Y"
                    }
                }
                //, "tooltip": {"field": "y", "type": "quantitative"}
            }
        };

        // https://github.com/vega/vega-embed
        var opt = {
            actions: false,
            renderer: "svg"
        };
        vegaEmbed(selector, vlSpec, opt);
    }


}



export {funcWorld as default};

