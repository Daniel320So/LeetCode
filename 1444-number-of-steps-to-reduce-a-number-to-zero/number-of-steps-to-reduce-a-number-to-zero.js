/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    var step = 0
    while (num!=0) {
        if (num%2) {
            num = num-1
        } else {
            num = num/2
        }
        step ++
    }
    return step
};