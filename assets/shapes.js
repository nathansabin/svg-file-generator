// grabs the class from user-input.js
const DataInput = require("./user-input.js");

// A class will be inherited into the subclasses
class shape {
    constructor(text, textColor, shapeType, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeType = shapeType;
        this.shapeColor = shapeColor;
    }
}

shape.prototype.setColor = (color) => {
    this.shapeColor = color;
}

// give us the dimensions for a triangle
class Triangle extends shape {
    constructor(text, textColor, shapeType, shapeColor) {
        super(text, textColor, shapeType, shapeColor)
    }
        gen() {
            return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor} />
            <h2 x="100" y="120" fill="${this.textColor}">${this.text}</h2>
            </svg>`;
        }

}

// gives us the dimensions for a circle
class Circle extends shape {
    constructor(text, textColor, shapeType, shapeColor) {
        super(text, textColor, shapeType, shapeColor)
    }
        gen() {
             return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
             circle cx="50" cy="50" r="50" fill="${this.shapeColor}"/>
            <h2 x="100" y="120" fill="${this.textColor}">${this.text}</h2>
            </svg>`;
        }
}

// gives us the dimensions for a square
class Square extends shape {
    constructor(text, textColor, shapeType, shapeColor) {
        super(text, textColor, shapeType, shapeColor)
    }
        gen() {
            return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor} />
            <h2 x="100" y="120" fill="${this.textColor}">${this.text}</h2>
            </svg>`;
        }
}

// exports the class
module.exports = {shape, Triangle, Circle, Square};

// <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
//   <rect x="50" y="50" width="100" height="100" fill="white" stroke="black" />
//   <text x="100" y="120" font-family="Arial" font-size="16" fill="blue">Hello, World!</text>
// </svg>

const newShape = new Triangle();
newShape.setColor("blue");
console.log(newShape);
