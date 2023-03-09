/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let res = Math.min(height[i], height[j]) * (j - i)
            if (maxArea < res) {
                maxArea = res
            }
        }
    }
    return maxArea

};
//optimized
var maxArea = function (height) {
    let maxArea = 0
    let left = 0
    let right = height.length - 1

    while (left < right) {
        let currentArea = Math.min(height[left], height[right]) * (right - left)
        maxArea = Math.max(maxArea, currentArea)

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return maxArea
}