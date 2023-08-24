/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var wealthes = accounts.map( v => {
        return v.reduce((prev, next) => prev + next)
    })
    return Math.max(...wealthes)
};