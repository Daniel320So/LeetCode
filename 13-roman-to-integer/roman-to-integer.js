/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    var symbolToValueMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    
    var symbolReduceMap = {
        "I": ["V", "X"],
        "X": ["L", "C"],
        "C": ["D", "M"],
    }
        
    var splitRoman = Array.from(s)
    var length = splitRoman.length
    var result = 0
    
    for (let i = 0; i<length; i++) {
        var lastRomanNumber = splitRoman.shift()
        if (symbolToValueMap[lastRomanNumber]) {
            if (symbolReduceMap[lastRomanNumber] && symbolReduceMap[lastRomanNumber].includes(splitRoman[0])) {
                result -= symbolToValueMap[lastRomanNumber]
            } else {
                result += symbolToValueMap[lastRomanNumber]
            }
        }
    }
    return result
};