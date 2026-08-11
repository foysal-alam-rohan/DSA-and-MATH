// P = F / A
{

let P;
let r = 0.01;
let F = 50 * Math.sin(30 * Math.PI / 180);
let A = (Math.PI * Math.pow(r, 2));
console.log(P = F / A);

}

//Magnitude
{

  let A = 5;
  let B = 10;
  let R;
  R = Math.sqrt(Math.pow(A, 2) + Math.pow(B, 2) + 2 * A * B * Math.cos(120 * Math.PI / 180));
  console.log(R);

}

{

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }
  
  magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

}

let v1 = new Vector(3, 5); 
let v2 = new Vector(6, 2);
let v3 = v1.add(v2);
console.log(v3);

}