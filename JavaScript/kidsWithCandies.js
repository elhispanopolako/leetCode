/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
let kidsWithCandies = function (candies, extraCandies) {
    let res = []
    let maxCandy = Math.max(...candies)
    candies.map((candy) => {
        let allCandies = candy + extraCandies
        if (allCandies >= maxCandy) {
            res.push(true)
        } else {
            res.push(false)
        }
    })
    return res
};