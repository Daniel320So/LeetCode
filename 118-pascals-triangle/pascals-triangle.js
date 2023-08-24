/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    let result = [[1]]

    for (let i=1; i<numRows; i++) {
        let prev = result[i-1]
        let next = [1]
        for (let j=0; j< prev.length-1; j++) {
            next.push(prev[j] + prev[j+1])
        }
        next.push(1)
        result.push(next)
    }

    return result
};