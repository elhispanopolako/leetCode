//mine
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let results = []
    for (let i = 0; i < prices.length; i++) {
        const restArr = prices.slice(i)
        let max = Math.max(...restArr)
        results.push(max - prices[i])
    }
    return Math.max(...results)
};
//Optimized
var maxProfit = function (prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }

    return maxProfit;
};