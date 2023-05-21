const shape = require("../shapes.js");

descibe("index.js", () => {
    descibe("shape", () => {
        it("Should create a new triangle that is blue", () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
})