/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let max = 0
    const split = (s) => {
        let arr = []
        let splitted = false;
        for (let i=0; i<s.length & !splitted; i++) {
            let char =s[i]
            let next = s.indexOf(char)
            let prev = next;
            let findNext = s.indexOf(char, next+1)
            if (findNext !== -1 ) {
                let findArr = []
                while (next != -1) {
                    findArr.push(next)
                    next = s.indexOf(char, prev+1)
                    prev = next;
                }

                // first
                arr.push(s.substring(0, findArr[1]))

                // all
                for (let i=1; i < findArr.length; i++){
                    arr.push(s.substring(findArr[i-1]+1, findArr[i+1]))
                }

                // last
                arr.push(s.substring(findArr[findArr.length-1]))
                splitted = true;
            }

        }

        if (!splitted) {
            if (s.length > max) max = s.length
        } else {
            for (let i=0; i<arr.length; i++) {
                if (arr[i].length > max){
                    split(arr[i])
                }
            }    
        }
    }

    split(s)
    return max
};