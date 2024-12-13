

// Roman Converter Elements

import {romanNums, validRoman, invalidRoman, toRoman} from "./modules/ToRoman.js";
import {under20, tens, ions, toWords} from "./modules/ToWords.js";

// Roman Converter Elements
const romanConvertInput = document.getElementById("toRomanNum");
const romanConvertButton = document.getElementById('toRomanConvertBtn')
const romanOutput = document.getElementById('toRomanOutput')

// Words Converter Elements
const wordsConvertInput = document.getElementById("toWords");
const wordsConvertButton = document.getElementById('toWordsConvertBtn')
const wordsOutput = document.getElementById('toWordsOutput')

// Roman Converter Event Handlers
const handleRomanConvert = (e) => {
const numberInput = romanConvertInput.value
romanOutput.classList.remove('hidden')
romanOutput.innerText = toRoman(numberInput)
}
romanConvertButton.addEventListener("click", handleRomanConvert)

// Words Converter Event Handlers
const handleWordsConvert = (e) => {
    const numberInput = wordsConvertInput.value
    wordsOutput.classList.remove('hidden')
    wordsOutput.innerText = toWords(numberInput)
}
wordsConvertButton.addEventListener("click", handleWordsConvert)