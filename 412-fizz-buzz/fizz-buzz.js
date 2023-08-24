/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var result = []
    for (let i=1; i<=n; i++) {
        var temp = ""
        if (i%3 == 0) temp += "Fizz"
        if (i%5 == 0) temp += "Buzz"
        if (temp == "") {
            result.push(i.toString())
        } else {
            result.push(temp)
        }
    }
    return result
};