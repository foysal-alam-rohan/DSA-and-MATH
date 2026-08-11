
{

function selectionSort(array) {
    
    let arr = array.slice();
    let n = arr.length;

    for(let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for(let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        
        if(minIndex !== i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}

let finalSelection = [4,2,74,2,313,41,43,1,34,4];
console.log(selectionSort(finalSelection));

}
