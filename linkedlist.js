class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    append(value) {
        this.count++;
        if(this.head == null && this.tail == null) {
            this.head = new Node(value, null);
        }
        else {
            this.tail = new Node(value, null);
            this.head = this.tail;
        }
        return console.log(this);
    }

    prepend(value) {
        const currentNode = new Node(value);
        this.count++;
        if(this.head == null) {
            this.head = currentNode;
        }
        return (console.log("prepend " + value));
    }

    size() {
        return this.count;
    }
    head() {

    }
    tail() {

    }

    at(index) {
        return this;
    }
    pop() {

    }
    contains(value) {

    }
    find(value) {

    }
    toString() {

    }
}

