
{

function factorial(num) {
    if(num === 0) return 1;
    return num * factorial(num - 1);
}

function main() {
    let num = 6;
    let final = factorial(num);
    console.log(final);
}
main();

}

{

function fun(num) {
    if(num > 0) {
    //fun(num - 1);
        console.log(num);
    //fun(num - 1);
    } 
    }
let num = 6;
fun(num);

}