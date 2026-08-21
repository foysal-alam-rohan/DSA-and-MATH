class Deque<T> {

    private front = 0;
    private back = 0;
    private items: Record<number, T> = {};

    // Add element to front
    insertFront(element: T): void {
        this.front--;
        this.items[this.front] = element;
    }

    // Add element to back
    insertBack(element: T): void {
        this.items[this.back] = element;
        this.back++;
    }

    // Remove element from front
    removeFront(): T | undefined {
        if (this.isEmpty()) return undefined;

        const value = this.items[this.front];

        delete this.items[this.front];
        this.front++;

        return value;
    }

    // Remove element from back
    removeBack(): T | undefined {
        if (this.isEmpty()) return undefined;

        this.back--;

        const value = this.items[this.back];

        delete this.items[this.back];

        return value;
    }

    // Get front element
    peekFront(): T | undefined {
        if (this.isEmpty()) return undefined;

        return this.items[this.front];
    }

    // Get back element
    peekBack(): T | undefined {
        if (this.isEmpty()) return undefined;

        return this.items[this.back - 1];
    }

    // Check if empty
    isEmpty(): boolean {
        return this.front === this.back;
    }

    // Get size
    size(): number {
        return this.back - this.front;
    }

    // Clear deque
    clear(): void {
        this.front = 0;
        this.back = 0;
        this.items = {};
    }

    // Convert deque to array
    toArray(): T[] {
        const result: T[] = [];

        for (let i = this.front; i < this.back; i++) {
            result.push(this.items[i]);
        }

        return result;
    }

    // Convert deque to string
    toString(): string {
        return this.toArray().join(", ");
    }
}


// ======================================================
// Number Example
// ======================================================

const numbers = new Deque<number>();

numbers.insertFront(10);
numbers.insertFront(20);
numbers.insertBack(10);

console.log(numbers.toString());
// 20, 10, 10

console.log(numbers.removeFront());
// 20

console.log(numbers.removeBack());
// 10

console.log(numbers.peekFront());
// 10

console.log(numbers.peekBack());
// 10

console.log(numbers.size());
// 1


// ======================================================
// Object / User Example
// ======================================================

type User = {
    id: number;
    name: string;
};

const users = new Deque<User>();

users.insertFront({
    id: 1,
    name: "Rohan"
});

users.insertFront({
    id: 2,
    name: "Foysal"
});

users.insertBack({
    id: 3,
    name: "Alex"
});

console.log(users.toArray());

/*
[
    { id: 2, name: "Foysal" },
    { id: 1, name: "Rohan" },
    { id: 3, name: "Alex" }
]
*/

// Remove first user
const firstUser = users.removeFront();

console.log(firstUser);
// { id: 2, name: "Foysal" }

// Peek first user
const frontUser = users.peekFront();

console.log(frontUser);
// { id: 1, name: "Rohan" }

// Peek last user
const backUser = users.peekBack();

console.log(backUser);
// { id: 3, name: "Alex" }