function binaryIterative (arr, data) {
    let start = 0, end = arr.length - 1;
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === data) return true;
        else if(arr[mid] < data) {
             start = mid + 1;
        }else {
             end = mid - 1;
        }
    }
    return false;
}

console.log(binaryIterative([2, 7, 9, 11, 25], 11));