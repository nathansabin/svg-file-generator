// grabs assets required to run this file
const inquirer = require('inquirer');

//class made to take user input
class DataInput {
constructor(character, wordColor, shape, shapeColorVal) {}

// takes up to 3 characters from the user
charInput() {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "char",
            message: "Enter up to three characters."  
        }
    ])
    .then((output) => {
        if (output.char.length > 3) {
            console.log("Three character limit")
            this.charInput()
        }
        else {
            this.character = output.char;
        }
    });
}

// checks if value is a color than will run a function if not, if it is will return true
isColor(inputColor) {
    const colors = ["red", "green", "blue"];

    for (let i = 0; i < colors.length; i++) {
        if (colors[i] == inputColor) {
            return true;
        }
    }

    if (inputColor.match(/[0-9A-Fa-f]{6}/g)) {
        return true;
    }
    else {
        console.log("Please enter an rgb color or hexadecimal value");
    }
}

// takes either a hexadecimal or an rgb color 
textColor() {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "textColor",
            message: "Enter either an rgb color or a hexadecimal"
        }
    ])
    .then((output) => {
        if(!this.isColor(output.textColor)) {
            this.textColor();
        }
        else {
            this.wordColor = output.textColor;
        }
    });
}

// Prompts users to pick a shape
shape() {
    return inquirer
    .prompt([ 
        {
            type: "list",
            name: "shape",
            message: "Select a shape",
            choices: ["circle", "triangle", "square"]
        }
    ])
    .then((output) => {
        this.shape = output.shape;
    })
}

// Makes a color for your shape
shapeColor() {
    return inquirer
    .prompt([ 
        {
            type: "input",
            name: "shapeColor",
            message: "Enter a color for your shape"
        }
    ])
    .then((output) => {
        if (!this.isColor(output.shapeColor)) {
            this.shapeColor();
        }
        else {
            this.shapeColorVal = output.shapeColor;
        }
    })
}

// runs all other functions for user input
init() {
    return this.charInput()
      .then(() => this.textColor())
      .then(() => this.shape())
      .then(() => this.shapeColor())
      .then(() => console.log(this));
}
}

// exports class to other files
module.exports = DataInput;

// TODO: fix bug where char input displays twice 