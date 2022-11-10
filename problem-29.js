/*Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, and the negatives become positives.
 You can assume that all values are integers.*/

function invert(array) {
    const arr = [];
    if (array.length == 0)
        return array
    for (let e of array) {
        arr.push(-e)
    }

    return arr;
}