//first
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
let successfulPairs = function (spells, potions, success) {
    let res = []
    for (let i = 0; i < spells.length; i++) {
        let pairs = 0
        potions.forEach((potion) => {
            if (spells[i] * potion >= success) {
                pairs++
            }
        })
        res.push(pairs)
    }
    return res

};
//second
let successfulPairs2 = function (spells, potions, success) {
    return spells.map(spell => {
        let pairs = 0;
        for (let i = 0; i < potions.length; i++) {
            if (potions[i] * spell >= success) {
                pairs++;
            }
        }
        return pairs;
    });
};

//final
let successfulPairsFinal = function (spells, potions, success) {
    potions.sort((a, b) => a - b);
    const ans = [];
    for (const spell of spells) {
        const rel = success / spell;
        let left = 0, right = potions.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (potions[mid] < rel) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        ans.push(potions.length - left);
    }
    return ans;
};