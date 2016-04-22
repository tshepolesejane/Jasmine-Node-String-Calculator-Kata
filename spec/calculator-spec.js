var calculator = require("../calculator");

describe("string calculator", function () {
    it("should return 0 if string is empty", function () {
        var calculatorResult = calculator.add('');
        expect(calculatorResult).toBe(0);
    });
    it("Should return the entered number if String has one number",function () {
        expect(calculator.add("1")).toBe(1)
    })
    it("Should return a sum of numbers that are separated by commas on input", function () {
        expect(calculator.add("1,2,3")).toBe(6)
    })
    it("Should return a sum of numbers that are separated by a new line and commas", function () {
        expect(calculator.add("1\n2,3")).toBe(6)
    })
    it()
});