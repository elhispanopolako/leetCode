/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
let canPlaceFlowers = function (flowerbed, n) {
    let ones = flowerbed.filter(f => f == 1)
    let zeros = flowerbed.filter(f => f == 0)
    return zeros.length - ones.length == n
};
//ultimate solution
let canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) continue;

        if (
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
        ) {
            flowerbed[i] = 1;
            n--;
        }
    }

    return n <= 0;
};