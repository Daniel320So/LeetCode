/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var arrA = ransomNote.split("")
    var arrB = magazine.split("")
    
    for (let i=0; i < arrA.length; i++) {
        var c = arrA[i]
        var index = arrB.indexOf(c)
        if (index > -1) {
            arrB.splice( index,1)
        } else {
            return false
        }
    }
    return true
};