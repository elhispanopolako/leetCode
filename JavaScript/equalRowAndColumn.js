/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    let row = grid
    let col = []
    for (let i = 0; i < grid.length; i++) {
        let c = []
        for (let j = 0; j < grid.length; j++) {
            c.push(grid[j][i])
        }
        col.push(c)
    }
    let count = 0
    for (let k = 0; k < col.length; k++) {
        for (let l = 0; l < col.length; l++) {
            if (JSON.stringify(col[k]) === JSON.stringify(row[l])) {
                count++
            }
        }
    }
    return count
};