{
   function binarySearch1(arr, search) {
    let left = 0, right = arr.length -1;
    let mid;
    while(left <= right) {
        mid = Math.floor((left + right) / 2);
        if(arr[mid] === search) return mid;
        else if(arr[mid] < search) return left = mid + 1;
        else right = mid - 1;
    }
    return -1;
   }
   let arr = [2.3,52,43,34,2,52,344];
   let search = 52;
   let res = binarySearch1(arr, search);
   if(res === -1) {
    console.log(`${search} I am not found ${res}`);
   }else {
    console.log(`${search} is found at index ${res}`);
   }                                
}

{
    function binarySearch2(arr, left, right, target) {
        if(left >= right) return -1;
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) return mid;
        else if(target < arr[mid]) return binarySearch2(arr, left, mid - 1, target);
        else return binarySearch2(arr, mid + 1, right, target);
    }
    let arr = [2,4,5,1,53,6];
    let target = 4;
    if(target === "" || target === null || target === undefined){
        console.log("fri")
    } else {
        arr.sort((a, b) => a - b);
        let left = 0, right = arr.length - 1;
        let res = binarySearch2(arr, left, right, target);
        if(res === -1) {
            console.log("Element is not found");
        }else {
            console.log(`Element is found index = ${res} and result = ${arr[res]}`);
        }
    }
}

{
    function binarySearch3(arr, x) {
        let left = 0, right = arr.length - 1, result = - 1;
        while(left <= right) {
            const mid = Math.floor((left + right) / 2);
            if(arr[mid] === x) {
                result = mid;
                right = mid - 1;
            }else if(arr[mid] > x) {
                right = mid - 1; 
            }else {
                left = mid + 1;
            }
        } 
        return result;
    }
    let arr = [2.3,52,43,34,2,52,344];
   let x = 52;
   let res = binarySearch3(arr, x);
   if(res === -1) {
    console.log(`Element is not found ${res}}`);
   }else {
    console.log(`Element is found at index ${res}`);
   }
}
