//first
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    let sorted = people.sort((a, b) => b - a)
    let boats = 0
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] == limit) {
            boats++
        } else if (sorted[i] < limit) {
            let twoPersons = sorted[i] + sorted[i++]
            if (twoPersons <= limit) {
                boats++
            } else if (twoPersons > limit || sorted[i] < limit) {
                boats++
            }
        }
    }
    return boats
};
//final
var numRescueBoats = function (people, limit) {
    let boats = 0
    let i = 0
    let n = people.length
    let sorted = people.sort((a, b) => b - a)
    while (i < n) {
        if (people[i] + people[n - 1] <= limit) {
            n--;
        }
        i++;
        boats++;
    }

    return boats;
};