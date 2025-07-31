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
            this.count++;
            if(this.headNode.nextNode == null) {
                this.headNode.nextNode = newNode;
            }
            this.tailNode.nextNode = newNode;
            this.tailNode = newNode;
        }
        //return console.log(this);
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
        if(index > this.count) {
            return console.log("index greater than node size");
        }
        else {        
            let num = 1;
            let node = this.headNode;
            while(num<index) {
                node = node.nextNode;
                num++;
            }
            return node;
        }
    }
    pop() {

    }
    contains(val) {

    }
    find(val) {

    }
    toString() {
        let node = this.headNode;
        let i = 0;
        let str = "";
        while(i < this.count) {
            str += "( " + node.value + " ) -> ";
            node = node.nextNode;
            i++;
        }
        return str + "null"
    }
}

