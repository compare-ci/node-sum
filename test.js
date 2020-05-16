const {sum} = require("./app.js");

describe("Test", () => {
    test("sum", async (done) => {
        expect(await sum(1, 2)).toBe(3);
        done();
    })
});