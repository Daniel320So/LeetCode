/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {

    var objMap = {}
    var ranking = []
    
    mat.map((v, i) => {
        var index = v.indexOf(0)
        var num = index !== -1?  index : mat[0].length
        if (!ranking.includes(num)) ranking.push(num)
        if (!objMap[num]) objMap[num] = []
        objMap[num].push(i)
    })
    
    var result = []
    ranking = ranking.sort((a,b) => a-b)
    
    for (let i=0; i<k && k!=result.length; i++) {
        var map = objMap[ranking[i]]
        for (let j=0; j< map.length && k!=result.length; j++) {
            result.push(map[j])
        }
    }
    
    return result  
};