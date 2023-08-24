/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    // use map to store character position 
    let charMap = {}
    let reverseCharMap = {}
    let sArr = s.split("")
    let tArr = t.split("")

    for (let i=0; i<sArr.length; i++){
        //if not mapped, add in mapping
        if (!charMap[sArr[i]]) {
            charMap[sArr[i]] = tArr[i]
            if (reverseCharMap[tArr[i]] && reverseCharMap[tArr[i]] !== sArr[i]) return false;
            reverseCharMap[tArr[i]] = sArr[i]
        } else{
            //check whether it is matched
            if (charMap[sArr[i]] !== tArr[i]) return false;
        }
    }

    return true;


};