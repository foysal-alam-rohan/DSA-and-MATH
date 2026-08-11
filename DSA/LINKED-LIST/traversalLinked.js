class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
function travel(head) {
    let res = "";
    while(head != null){
        res += head.data + " ";
        head = head.next;
    } 
    console.log(res);
}
function main() {
    let num = new Node(21);
    num.next = new Node(43);
    num.next.next = new Node(342);
    travel(num);
}
main();