// Construct a 2*3 matrix A = [aᵢⱼ], whose elements are given by.
// formula aᵢⱼ = (i + 2j)**2 / 2

function matrix() {

    function row1clm123() {

    let i1 = 1;

    const j1 = 1;
    let numerator1 = Math.pow(i1 + 2*j1, 2);
    let denominator1 = 2;
    let res1 = `${numerator1} / ${denominator1}`;

    const j2 = 2;
    let numerator2 = Math.pow(i1 + 2*j2, 2);
    let denominator2 = 2;
    let res2 = `${numerator2} / ${denominator2}`;

    const j3 = 3;
    let numerator3 = Math.pow(i1 + 2*j3, 2);
    let denominator3 = 2;
    let res3 = `${numerator3} / ${denominator3}`;
    

    return {res1, res2, res3};
    }

    function row2clm123() {

        const i2 = 2;
        
        const j4 = 1;
        let numerator4 = Math.pow(i2 + 2*j4, 2);
        let denominator4 = 2;
        let res4 = numerator4 / denominator4;

        const j5 = 2;
        let numerator5 = Math.pow(i2 + 2*j5, 2);
        let denominator5 = 2;
        let res5 = numerator5 / denominator5;

        const j6 = 3;
        let numerator6 = Math.pow(i2 + 2*j6, 2);
        let denominator6 = 2;
        let res6 = numerator6 / denominator6;

        return {res4, res5, res6};
    }

    return {  row1:row1clm123(), row2:row2clm123() };
}

let finalResult = matrix();

console.log(`
[
    ${finalResult.row1.res1} , ${finalResult.row1.res2} , ${finalResult.row1.res3}
    
    ${finalResult.row2.res4} , ${finalResult.row2.res5} , ${finalResult.row2.res6}
]
    `);