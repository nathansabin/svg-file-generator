// imports from other files
const Shape = require("./lib/shapes.js");
const DataInput = require("./lib/user-input.js");
const fs = require("fs");

// prompts user than formats data for svg gen
const user = new DataInput()
user.init()

.then((data) => {
    if (user.shape == "circle") {
        return new Shape.Circle(user.character, user.wordColor, user.shape, user.shapeColorVal);
    } else if (user.shape == "square") {
        return new Shape.Square(user.character, user.wordColor, user.shape, user.shapeColorVal);
    } else if (user.shape == "triangle") {
        return new Shape.Triangle(user.character, user.wordColor, user.shape, user.shapeColorVal);
    }
})

// svg file gen
.then((user) => {
    fs.writeFile("logo.svg", user.gen() , (err) => {
        err ? console.log(err) : console.log("Generated logo.svg")
    })
})