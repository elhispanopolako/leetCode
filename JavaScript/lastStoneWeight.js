/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    if (stones.length == 1) { return 1 }
    while (stones.length > 1) {
        stones.sort((a, b) => b - a)
        stones[1] = stones[0] - stones[1]
        stones.shift()
    }
    return stones[0]

}