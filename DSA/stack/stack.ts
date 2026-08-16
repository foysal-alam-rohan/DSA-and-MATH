class StackObjectBased {

    private count: number;
    private items: {[key: number]: number};

    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(element: number): void  {
        this.items[this.count] = element;
        this.count++;
    } 

    size(): number {
        return this.count;
    }

    isEmpty(): boolean {
        return this.count === 0
    }

    pop(): number | undefined  {
        if(this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek(): number | undefined {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    clear() {
        this.items = {};
        this.count = 0;
    }

    print() {
        while(!this.isEmpty()) {
            this.pop()
    }
    }

}

const stackN = new StackObjectBased();
stackN.push(10);
stackN.push(20);
stackN.push(30);
console.log(stackN.size());    // 2
console.log(stackN.peek());    // 30
console.log(stackN.pop());     // 30
console.log(stackN.peek());    // 20
console.log(stackN.size());    // 2