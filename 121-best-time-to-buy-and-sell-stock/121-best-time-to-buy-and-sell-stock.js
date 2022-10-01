/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let currentPrice = Infinity;
    let profit = 0;
    
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < currentPrice) {
            currentPrice = prices[i]
        }
        
        if (prices[i] - currentPrice > profit) {
            profit = prices[i] - currentPrice;
        }
    }
    
    return profit
};