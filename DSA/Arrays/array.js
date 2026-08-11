{
function findMINorMAX(arr) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    return [sortedArr[0], sortedArr[sortedArr.length - 1]];
}

const arr = [1,8,3,15,53,32];
const result = findMINorMAX(arr);
//console.log(`${result[1]} ${result[0]}`);
}

{
function findMinAndMax(arr) {
    let mini = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    for(let num of arr) {
        if(num < mini) mini = num;
        if(num > max) max = num;
    }
    //console.log(mini, max);
}
findMinAndMax([1,8,3,15,53,32]);
}

{
function getMinMax(arr, low, high) {
    if(low === high) return [arr[low], arr[low]];
    if(high === low + 1)
    return arr[low] < arr[high]
    ? [arr[low], arr[high]]
    : [arr[high], arr[low]];
    const mid = Math.floor((low + high) / 2);
    const left = getMinMax(arr, low, mid);
    const right = getMinMax(arr, mid + 1, high);
    return [
        Math.min(left[0], right[0]),
        Math.max(left[1], right[1])
    ];
}
function findMinMax(arr) {
    return getMinMax(arr, 0, arr.length -1);
}
const arr = [3, 5, 4, 1, 9];
const result = findMinMax(arr);
console.log(result);
}