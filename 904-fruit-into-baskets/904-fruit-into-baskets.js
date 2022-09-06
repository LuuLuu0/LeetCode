/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let windowStart = 0;
    let maxLen = 0;
    let fruitMap = {};
    
    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        const currFruit = fruits[windowEnd];
        if (!fruitMap[currFruit]) {
            fruitMap[currFruit] = 0;
        }
        fruitMap[currFruit] += 1;
        
        while(Object.keys(fruitMap).length > 2) {
            const prevFruit = fruits[windowStart];
            fruitMap[prevFruit] -= 1;
            
            if (fruitMap[prevFruit] === 0) {
                delete fruitMap[prevFruit];
            }
            windowStart += 1;
        }
        
        maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
    }
    
    return maxLen;
};