//Normal merge
{
    function merge(left, right) {
        let i = 0, j = 0;
        let res = [];
        while(i < left.length && j < right.length){
            if(left[i] < right[j]){
                res.push(left[i]);
                i++;
            } else {
                res.push(right[j]);
                j++;
            }
        }
        return res.concat(left.slice(i)).concat(right.slice(j));
    }
    function mergeSort(array) {
        if(array.length <= 1) return array;
        let mid = Math.floor(array.length / 2);
        let left = array.slice(0, mid);
        let right = array.slice(mid);
        return merge(mergeSort(left), mergeSort(right));
    }
    let array = [43,23,3,35,34,342,534 ,123,4];
    console.log(mergeSort(array));
}

//turbo merge
{
    function insertionSort(arr, start, end, comparator) {
        for(let i = start + 1; i < end; i++) {
            let key = arr[i];
            let j = i - 1;
            while(j >= start && comparator(arr[j], key) > 0) {
                arr[j + 1] = arr[j];
                j--
            }
            arr[j + 1] = key;
        }
    }
    function merge(arr, left, mid, right, buffer, comparator) {
        let i = left, j = mid, k = left;
        while(i < left && j < right) {
            if(comparator(arr[i], arr[j]) <= 0){
                buffer[k++] = arr[i++];
            } else {
                buffer[k++] = arr[j++];
            }
        }
        while(i < mid) buffer[k++] = arr[i++];
        while(j < right) buffer[k++] = arr[j++];
        for(let i = left; i < right; i++) arr[i] = buffer[i];
    }
    function turboMergeSort(arr, comparator = (a, b) => a - b) {
        const n = arr.length;
        const buffer = new Array(n);
        function sort(left, right) {
            if(right - left <= 16) {
                insertionSort(arr, left, right, comparator);
                return;
            }
            const mid = Math.floor((left + right) / 2);
            sort(left, mid); sort(mid, right);
            if(comparator(arr[mid - 1], arr[mid]) <= 0) return;
            merge(arr, left, mid, right, buffer, comparator);
        }
        sort(0, n)
        return arr;
    }


    console.log(turboMergeSort([43421,2323,234,23,23,12,2,23,232,3,23435,1]));
    let students = [
        {name: "sat", score: 9864},
        {name: "sun", score: 32889898},
        {name: "mon", score: 42}
    ];
    console.log(turboMergeSort(students, (a, b) => a.score - b.score));
}





{

function merge(arr, st, mid, end) {
    let temp = [];
    let i = st;
    let j = mid + 1; 

    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i]);
            i++;
        } else {
            temp.push(arr[j]);
            j++;
        }
    }

    while (i <= mid) {
        temp.push(arr[i]);
        i++;
    }

    while (j <= end) {
        temp.push(arr[j]);
        j++;
    }

    for (let idx = 0; idx < temp.length; idx++) {
        arr[idx + st] = temp[idx];
    }
}

/**
 * Main recursive function to divide the array
 */
function mergeSort(arr, st, end) {
    if (st < end) {
        let mid = Math.floor(st + (end - st) / 2);

        mergeSort(arr, st, mid);
        mergeSort(arr, mid + 1, end); 

        merge(arr, st, mid, end);
    }
}

// --- Driver Code ---
const arr = [12, 13, 65, 34, 98, 78, 90, 54, 91];
const n = arr.length;

mergeSort(arr, 0, n - 1);

console.log("Sorted array:", arr.join(" "));
}