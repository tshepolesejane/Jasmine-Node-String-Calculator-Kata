var calculator = require('../calculator');
describe("String calculator test", function () {
    it("Should return zero when an empty string is passed", function () {
        expect(calculator.add('')).toBe(0);
    });
    it("Should return any single number passed in a string", function () {
        expect(calculator.add('1')).toBe(1);
    });
    it("Should return sum of any comma delimited numbers in a string", function () {
        expect(calculator.add('1,2')).toBe(3);
    });
    it("Should return sum of any comma and new line delimited numbers in a string", function () {
        expect(calculator.add('1,2\n3')).toBe(6);
    });
    it("Should return sum of any custom delimited numbers in a string", function () {
        expect(calculator.add('//;\n1,2\n3')).toBe(6);
    });
    it("Should return sum of any custom delimited numbers in a string", function () {
        expect(calculator.add('//;\n1,2\n6')).toBe(9);
    });
    it("Should throw an exception on negative numbers", function () {
        expect(function (){calculator.add('//;\n1,-2\n-6')}).toThrow(new Error('Negatives are not allowed: -2, -6'));
    });
});