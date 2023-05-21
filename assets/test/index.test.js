const Shape = require("../shapes.js");

describe("index.js", () => {
    describe("shape", () => {
        it("Should create a new triangle that is blue", () => {
            const shape = new Shape.Triangle();
            shape.shapeColor("blue");
            expect(shape.gen).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
})