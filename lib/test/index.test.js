// takes the classes from shapes
const Shape = require("../shapes.js");

// checks to see if data can be entered into the shape correctly
describe("index.js", () => {
    describe("shape", () => {
        it("Should create a new triangle that is black, with red text", () => {
            const shape = new Shape.Triangle("tes", "red", "triangle", "000000");
            expect(shape.gen()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <polygon points="150, 18 244, 182 56, 182" fill="000000" />
            <text x="135" y="120" fill="red">tes</text>
            </svg>`);
        })
    })
})