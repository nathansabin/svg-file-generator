// imports from other files
const Shape = require("./assets/shapes.js");
const DataInput = require("./assets/user-input.js");
const fs = require("fs");

// prompts user than formats data for svg gen
const user = new DataInput()
user.init()

.then(() => {
    if (user.shape == "circle") {
        return new Shape.Circle();
    } else if (user.shape == "square") {
        return new Shape.Square();
    } else if (user.shape == "triangle") {
        return new Shape.Triangle();
    }
})

// svg gen
.then((data) => {
    fs.writeFile("logo.svg", data.gen() , (err) => {
        err ? console.log(err) : console.log("Generated logo.svg")
    })
})