/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    let sum1 = 1;
    let sum2 = 2;

    for (let i=3; i<n+1; i++){
        let temp = sum1
        sum1 = sum2
        sum2 = sum1 + temp
    }
    return n == 1? sum1 : sum2
}