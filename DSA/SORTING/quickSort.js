function partition(arr, left, right) {
    let pivot = arr[0];
    let swap;
    while(arr[left] <= pivot) {
        left++;
    }
    while(arr[right] > pivot) {
        right--;
    }
    if(left < right){
        swap = arr[left], arr[right];
    } else {
        swap = arr[0], arr[right];
    }
    return right;
}

function quickSort(arr, l, r) {
    let j = partition(arr, l, r);
    quickSort(arr, l, j - 1);
    quickSort(arr, j + 1, r);
}


const result = [3,41,341,4123,21,1,2,41,3];
//console.log(quickSort(result));






{
    function quickSort(nums, st = 0, end = nums.length - 1) {
    if (st >= end) return;

    // Random pivot selection to ensure O(n log n) on sorted data
    let pivotIndex = Math.floor(Math.random() * (end - st + 1)) + st;
    
    // Swap pivot to the end
    [nums[pivotIndex], nums[end]] = [nums[end], nums[pivotIndex]];

    const pivot = nums[end];
    let i = st - 1;

    for (let j = st; j < end; j++) {
        if (nums[j] < pivot) {
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    // Move pivot to its correct sorted position
    [nums[i + 1], nums[end]] = [nums[end], nums[i + 1]];
    
    let partition = i + 1;

    // Recursive calls
    quickSort(nums, st, partition - 1);
    quickSort(nums, partition + 1, end);
}

// Example usage:
const nums = [12, 13, 17, 19, 11, 21, 29, 23, 16, 25, 22];
quickSort(nums);
console.log(nums);
}