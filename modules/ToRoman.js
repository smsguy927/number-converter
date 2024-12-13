const romanNums = [
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"]
]
const validRoman = {
    min: 1,
    max: 3999,
}

const invalidRoman = {
    tooLow: "Please enter a number greater than or equal to 1",
    tooHigh: "Please enter a number less than or equal to 3999",
    notANumber: "Please enter a valid number"
}
Object.freeze(romanNums)
const toRoman = num => {
    num = parseInt(num)
    const romanResult = []
    if(isNaN(num)) return invalidRoman.notANumber
    if(num < validRoman.min) return invalidRoman.tooLow
    if(num > validRoman.max) return invalidRoman.tooHigh
    let romanIt = romanNums.length - 1
    while(num > 0){
        if(num < romanNums[romanIt][0]){
            romanIt--
        } else{
            romanResult.push(romanNums[romanIt][1])
            num -= romanNums[romanIt][0]
        }
    }
    return romanResult.join('')
}
export {romanNums, validRoman, invalidRoman, toRoman}