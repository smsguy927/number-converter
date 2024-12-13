const assert = require('assert');
const {toWords} = require("../ToWords");
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});
describe('toWords()', function () {
    it('should return a string of words that represent the number passed in 0', function () {
        // Setup
        const input = 7
        const expected = "seven"

        // Exercise
        const result = toWords(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it('should return a string of words that represent the number passed in 1', function () {
        // Setup
        const input = 11
        const expected = "eleven"

        // Exercise
        const result = toWords(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it('should use the arrays of number parts to build a string', function () {
        // Setup
        const input = 69
        const expected = "sixty nine"

        // Exercise
        const result = toWords(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it("doesn't use the null values in the number parts arrays", function () {
        // Setup
        const input = 40
        const expected = "forty"

        // Exercise
        const result = toWords(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it("doesn't use the null values in the number parts arrays again 0", function () {
        // Setup
        const input = 420
        const expected = "four hundred twenty"

        // Exercise
        const result = toWords(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it("doesn't use the null values in the number parts arrays again 1", function () {
        // Setup
        const input =  1515
        const expected = "one thousand five hundred fifteen"

        // Exercise
        const result = toWords(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it("converts big numbers correctly 0", function () {
        // Setup
        const input = 80085
        const expected = "eighty thousand eighty five"

        // Exercise
        const result = toWords(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it("converts big numbers correctly 1", function () {
        // Setup
        const input = 12345
        const expected = "twelve thousand three hundred forty five"

        // Exercise
        const result = toWords(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it("converts big numbers correctly 2", function () {
        // Setup
        const input = 666666
        const expected = "six hundred sixty six thousand six hundred sixty six"

        // Exercise
        const result = toWords(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it("converts big numbers correctly 3", function () {
        // Setup
        const input = 113650390
        const expected = "one hundred thirteen million six hundred fifty thousand three hundred ninety"

        // Exercise
        const result = toWords(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it("converts big numbers correctly 4", function () {
        // Setup
        const input = 109110111
        const expected = "one hundred nine million one hundred ten thousand one hundred eleven"

        // Exercise
        const result = toWords(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it("converts the max safe int in JS", function () {
        // Setup
        const input = Number.MAX_SAFE_INTEGER
        const expected = "nine quadrillion seven trillion one hundred ninety nine billion two hundred fifty four million seven hundred forty thousand nine hundred ninety one"

        // Exercise
        const result = toWords(input);

        // Verify
        assert.strictEqual(result, expected);
    })
})