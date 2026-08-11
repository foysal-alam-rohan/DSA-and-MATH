function calculateStaticElectricityForce(q1, q2, r) {
    const k = 8.9875517923e9;
    let force = k * Math.abs(q1 * q2) / (r * r); return force;
}

let charge1 = 20; let charge2 = 50; distance = 0.5
console.log(calculateStaticElectricityForce(charge1, charge2, distance));   //35950207169200// 