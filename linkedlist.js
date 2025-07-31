class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = null;
    }
}

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    append(value) {
        const currentNode = new Node(value);
        this.count++;
        if(this.head == null) {
            this.head = currentNode;
            this.tail = currentNode.nextNode;
        }
        else {
            this.head.nextNode = currentNode;
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

