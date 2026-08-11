{
    class node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }
    class circularLinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
        }
        insert(data) {
            const newNode = new node(data);
            if(!this.head) {
                this.head = newNode;
                this.tail = newNode;
                newNode.next = newNode;
            }else{
                this.tail.next = newNode;
                newNode.next = this.head;
                this.tail = newNode;
            }
        }
        print() {
            if(!this.head) {
                console.log("list is empty");
                return;
            }
            let temp = this.head;
            do {
                console.log(`I am circular ${temp.data}`);
                temp = temp.next;
            } while (temp !== this.head)
        }

        search(data) {
            if(!this.head) return "List is empty";
            let temp = this.head;
            do {
                if(temp.data === data) return true;
                temp = temp.next;
            } while(temp !== this.head);
            return false;
        }
        delete(data) {
            if(!this.head) return;
            let curr = this.head;
            let prev = this.tail;
            do {
                if(curr.data === data) {
                    if(curr === this.head) this.head = curr.next;
                    if(curr === this.tail)  this.tail = prev;
                    prev.next = curr.next;
                    return;
                }
                prev = curr;
                curr = curr.next;
            } while(curr !== this.head);
        }
        count() {
            if(!this.head) return "List is empty";
            let temp = this.head;
            let count = 0;
            do {
                temp = temp.next;
                count++;
            }while(temp !== this.head);
            return count;
        }
        toArray() {
            let result = [];
            if(!this.head) return result;
            let temp = this.head;
            do {
                result.push(temp.data);
                temp = temp.next;
            } while(temp !== this.head);
            return result;
        }
    }
    let cll = new circularLinkedList();
    cll.insert(1), cll.insert(2), cll.insert(3), cll.insert(4), cll.insert(5);
 
    console.log("Number is deleted " + cll.delete(10));
    console.log("Search Number " + cll.search(23));
    console.log("count data " + cll.count());
    console.log("Number of array " + cll.toArray());
    cll.print();
}