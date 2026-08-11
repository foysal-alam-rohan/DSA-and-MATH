var arr = [8,10,12,5,3,6];
let root = arr[8];
let vr = {};
for(let i = 0; i < arr.length; i++) {
    if(arr[i] < root) {
        vr.left = arr[i]; 
    }else {
        vr.right = arr[i];
    }
}
console.log(vr);