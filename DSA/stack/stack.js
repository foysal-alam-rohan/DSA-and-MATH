class Stack {
    constructor(cap) {
        this.cap = cap;
        this.top = - 1;
        this.a = new Array(cap);
    }
    push(x) {
        if(this.top >= this.cap - 1) {
            console.log("Stack Overflow");
            return false;
        }
        this.a[++this.top] = x;
        return true;
    }
    pop() {
        if(this.top < 0) {
            console.log("Stack Underfow");
            return 0;
        }
        return this.a[this.top--];
    }
    peek() {
        if(this.top < 0) {
            console.log("Stack is empty");
            return 0;
        }
        return this.a[this.top];
    }
    isEmpty() {
        return this.top < 0;
    }
}

let s = new Stack(5);
s.push(10);s.push(20);s.push(340);s.push(37);s.push(305);
// console.log(s.pop() + " Popped from stack");
console.log("Top element is: " + s.peek());
console.log("Elements present is stack");

while(!s.isEmpty()) {
    console.log(s.peek() + " ");
    s.pop();
}