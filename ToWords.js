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
    null,
    "thousand",
    "million",
    "billion",
    "trillion",
    "quadrillion",
    // not used until refactored to allow strings and BigInt
    "quintillion",
    "sextillion",
    "septillion",
    "million",
    "nonillion",
    "decillion",
];
Object.freeze(ions);

const toWords = num => {
    if (num === 0) return "zero";
    const isNegative = num < 0;
    if (isNegative) {
        num *= -1
    }
    const words = [];
    let ionsIt = 0
    while (num > 0) {
        ionsIt && words.push(ions[ionsIt]);
        const tensOnes = num % 100
        if (tensOnes < 20) {
            words.push(under20[tensOnes]);
            num = Math.floor(num / 100)
        } else {
            const ones = num % 10
            ones && words.push(under20[ones])

            num = Math.floor(num / 10)
            words.push(tens[num % 10])
            num = Math.floor(num / 10)
        }
        if (num > 0) {
            const ones = num % 10
            if (ones) {
                words.push('hundred');
                words.push(under20[ones]);
            }

            num = Math.floor(num / 10)
        }
        if (num > 0) {
            ionsIt++
        }
    }
    isNegative && words.push("negative");
    return words.reverse().join(' ')
}

export {under20, tens, ions, toWords}