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
    it('should return a string of words that represent the number passed in', function () {
        // Setup
        const input = 7
        const expected = "seven"

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
    it("doesn't use the null values in the number parts arrays again", function () {
        // Setup
        const input = 420
        const expected = "four hundred twenty"

        // Exercise
        const result = toWords(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it("converts big numbers correctly", function () {
        // Setup
        const input = 80085
        const expected = "eighty thousand eighty five"

        // Exercise
        const result = toWords(input);

        // Verify
        assert.strictEqual(result, expected);
    })
})