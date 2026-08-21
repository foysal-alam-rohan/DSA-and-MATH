class Queue<T> {

    private lowestCount = 0;
    private count = 0;
    private items: Record<number, T> = {};

    enqueue(element: T): void {
        this.items[this.count] = element;
        this.count++;
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.items[this.lowestCount];

        delete this.items[this.lowestCount];
        this.lowestCount++;

        return result;
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.lowestCount];
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    size(): number {
        return this.count - this.lowestCount;
    }

    clear(): void {
        this.lowestCount = 0;
        this.count = 0;
        this.items = {};
    }
}

// Number Queue

const numbers = new Queue<number>();

numbers.enqueue(10);
numbers.enqueue(20);
numbers.enqueue(30);

console.log(numbers.dequeue()); // 10
console.log(numbers.peek());    // 20
console.log(numbers.size());    // 2

// String Queue

const names = new Queue<string>();

names.enqueue("Rohan");
names.enqueue("Foysal");
names.enqueue("Alex");

console.log(names.dequeue()); // Rohan
console.log(names.peek());    // Foysal

// Object Queue

type User = {
    id: number;
    name: string;
};

const users = new Queue<User>();

users.enqueue({ id: 1, name: "Foysal" });
users.enqueue({ id: 2, name: "Alam" });

console.log(users.dequeue());
// { id: 1, name: "Foysal" }

console.log(users.peek());
// { id: 2, name: "Alam" }

console.log(users.size());
// 1