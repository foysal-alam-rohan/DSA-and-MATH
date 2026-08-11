//reverse number

{

function reverseNum(n) {
    let reverse = 0;
    let num = Math.abs(n);
    while (num > 0) {
        reverse = reverse * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    if(reverse > 2**31 - 1) return 0
    return reverse * Math.sign(n);
}
console.log(reverseNum(8508));
console.log(reverseNum(-8508));

}

