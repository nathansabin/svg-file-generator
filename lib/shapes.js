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
            <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
            <text x="135" y="120" fill="${this.textColor}">${this.text}</text>
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
             <circle cx="50" cy="50" r="50" fill="${this.shapeColor}"/>
            <text x="40" y="55" fill="${this.textColor}">${this.text}</text>
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
            <rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}" />
            <text x="90" y="100" fill="${this.textColor}">${this.text}</text>
            </svg>`;
        }
}

// exports the class
module.exports = {shape, Triangle, Circle, Square};


