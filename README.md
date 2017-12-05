# World - A graphing library 

## Introduction

A function grapher library to graph a function.



## Usage

Tip: The [function grapher file](./example/function-grapher.html) gives a complete example.

### Step 1: Dependencies

Add the dependencies and the `world.js` library:
  * https://cdnjs.cloudflare.com/ajax/libs/vega/3.0.7/vega.js
  * https://cdnjs.cloudflare.com/ajax/libs/vega-lite/2.0.1/vega-lite.js
  * https://cdnjs.cloudflare.com/ajax/libs/vega-embed/3.0.0-rc7/vega-embed.js
  * https://unpkg.com/worldjs


### Stap 2: Graph your function
```javascript
var func = (x) => Math.cos(x);

var graph = new world.func(func)
    .render(); 
```

<img src="https://raw.githubusercontent.com/gerardnico/world/master/example/default_cosine.svg?sanitize=true" alt="Default Cosine">

By default:
   * the coordinates of the function will be calculated on the range [-10,10] with an interval of 0.1 between each
   * the graph will be rendered:
      * in the `body` element of the page. **You need to define a selector in the render function, if you want to output more than one graph by page. See below.**
      * with a `width` of 600 pixels and an `height` of 300 pixels 


### Stap 3: Tweak the output

You can override and set new properties:

```javascript
var graph = new world.func(func)
    .setXMax(5)  // The Max value on the X axis 
    .setXMin(-5) // The Min value on the X axis
    .setStep(0.5) // The interval between each point on the X axis
    .setTitle("Cosine") // The title of the graph
    .setHeight(400) // The height of the graph
    .setWidth(400) // The width of the graph
    .render("#vis"); // Define a CSS selector 
```

<img src="https://raw.githubusercontent.com/gerardnico/world/master/example/tweaked_cosine.svg?sanitize=true" alt="Tweaked Cosine">




## Notes
  * An interactive function grapher: https://www.desmos.com/calculator
  * A function grapher for the terminal ?, see [function-graph](https://www.npmjs.com/package/function-graph)
  