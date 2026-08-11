
{

function findLucky(arr) {
    let freq = new Map();
    for(const num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    let res = -1;
    for(const [num, count] of freq) {
        if(num === count) res = Math.max(res, num)
    }
    return res;
}

console.log(findLucky([1, 2, 2, 3, 3, 3])); // Output: 3
console.log(findLucky([2, 2, 3, 4]));       // Output: 2
console.log(findLucky([5]));               // Output: -1
    
}