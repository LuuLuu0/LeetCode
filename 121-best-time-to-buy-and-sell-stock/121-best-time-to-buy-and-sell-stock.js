/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let windowStart = 0;
    let maxProfit = 0;
    for (let windowEnd = 1; windowEnd < prices.length; windowEnd++) {
        if (prices[windowEnd] <= prices[windowStart]) {
            windowStart = windowEnd;
        } else {
            let currentProfit = prices[windowEnd] - prices[windowStart];
            maxProfit = Math.max(currentProfit, maxProfit);   
        }
    }
    console.log(maxProfit)
    return maxProfit
};