const {add} = require("./app.js");

describe("Test", () => {
    test("addition", async (done) => {
        expect(await add(1, 2)).toBe(3);
        done();
    })
});