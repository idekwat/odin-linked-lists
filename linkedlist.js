class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export default class LinkedList {
    constructor() {
        this.headNode = null;
        this.tailNode = null;
        this.count = 0;
    }

    append(value) {
        if(this.headNode == null) {
            const currentNode = new Node(value, this.tailNode);
            this.count++;
            this.headNode = currentNode;
            this.tailNode = this.headNode;
        }
        else {
            const newNode = new Node(value);
            if(this.headNode.nextNode == null) {
                this.headNode.nextNode = newNode;
            }
            this.tailNode.nextNode = newNode;
            this.tailNode = newNode;
        }
        return console.log(this);
    }

    prepend(value) {
        const currentNode = new Node(value);
        this.count++;
        if(this.tailNode == null) {
            this.tailNode = currentNode;
            this.headNode = this.tailNode;
        }
        else {
            let prevNode = this.headNode;
            this.headNode = new Node(value);
            this.headNode.nextNode = prevNode;
        }
        //return console.log(this);
    }

    size() {
        return this.count;
    }

    head() {
        return this.headNode;
    }
    tail() {
        return this.tailNode;
    }

    at(index) {
        
    }
    pop() {
        this.tail = null;
        return this;
    }
    contains(value) {

    }
    find(value) {

    }
    toString() {
        return ("no")
    }
}

