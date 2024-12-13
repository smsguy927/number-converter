import * as assert from "node:assert";
import {toWords} from "../modules/ToWords.js";
import {invalidRoman, toRoman, validRoman} from "../modules/ToRoman.js";


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
describe('toRoman()', function () {
    it(`doesn't convert values less than ${validRoman.min} or greater than ${validRoman.max} B`, function () {
        // Setup
        const input = -123
        const expected = invalidRoman.tooLow

        // Exercise
        const result = toRoman(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it(`doesn't convert values less than ${validRoman.min} or greater than ${validRoman.max} B`, function () {
        // Setup
        const input = 0
        const expected = invalidRoman.tooLow

        // Exercise
        const result = toRoman(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it(`doesn't convert values less than ${validRoman.min} or greater than ${validRoman.max} C`, function () {
        // Setup
        const input = 4000
        const expected = invalidRoman.tooHigh

        // Exercise
        const result = toRoman(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it("Passes FCC test A", function () {
        // Setup
        const input = 9
        const expected = "IX"

        // Exercise
        const result = toRoman(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it("Passes FCC test B", function () {
        // Setup
        const input = 16
        const expected = "XVI"

        // Exercise
        const result = toRoman(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it("Passes FCC test C", function () {
        // Setup
        const input = 649
        const expected = "DCXLIX"

        // Exercise
        const result = toRoman(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it("Passes FCC test D", function () {
        // Setup
        const input = 1023
        const expected = "MXXIII"

        // Exercise
        const result = toRoman(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it("Passes FCC test E", function () {
        // Setup
        const input = 3999
        const expected = "MMMCMXCIX"

        // Exercise
        const result = toRoman(input);

        // Verify
        assert.strictEqual(result, expected);
    })
})