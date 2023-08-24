/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {

    let result = []
    let map = {}
    for (let i=0; i<temperatures.length; i++) {
        let days = 1
        if (map[temperatures[i]] && map[temperatures[i]]-i > 0) {
            result.push(map[temperatures[i]]-i)
        } else {
            while (temperatures[i] >= temperatures[i + days] ) {
                days++
            }
            if (i + days == temperatures.length) {
                result.push(0)
            } else {
                result.push(days)
                map[temperatures[i]] = i + days
            }
        }
    }  
    return result
};