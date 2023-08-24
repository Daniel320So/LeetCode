/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sArr = s.split("")
    let prev=-1
    for (let i=0; i<sArr.length; i++) {
        prev = t.indexOf(sArr[i], prev+1)
        if (prev == -1) return false;
    }

    return true;
};