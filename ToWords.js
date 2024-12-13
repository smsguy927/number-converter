const under20 = [
    null,
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
];
Object.freeze(under20);

const tens = [
    null,
    null,
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
];
Object.freeze(tens);

const ions = [
    "thousand",
    "million",
    "billion",
    "trillion",
    "quadrillion",
    "quintillion",
    "sextillion",
    "septillion",
    "million",
    "nonillion",
    "decillion",
];
Object.freeze(ions);

const toWords = num => {
    const words = [];
    while (num > 0) {

        if (num < 20) {
            words.push(under20[num]);
            num = Math.floor(num / 100)
        } else {
            const ones = num % 10
            if (ones) {
                words.push(under20[ones])
            }
            num = Math.floor(num / 10)
            words.push(tens[num % 10])
            num = Math.floor(num / 10)
        }
        if(num > 0) {
            words.push('hundred');
        }
    }
    return words.reverse().join(' ')
}

export {under20, tens, ions, toWords}