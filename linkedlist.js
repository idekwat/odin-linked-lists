class Node {
    constructor(value = null, nextNode = null) { //Node constructor, setting both elements as null on default
        this.value = value;
        this.nextNode = nextNode;
    }
}

export default class LinkedList {
    constructor() { //LinkedList container also set at null on default
        this.headNode = null;
        this.tailNode = null;
        this.count = 0; //will be used for counting the number of nodes created;
    }

    append(value) {
        if(this.headNode == null) { // if there's no current headnode
            const currentNode = new Node(value, this.tailNode); //create new node
            this.count++; //add node count after creating node
            this.headNode = currentNode; //currentnode will be headnode
            this.tailNode = this.headNode; //currentnode will both be headnode and tailnode
        }
        else { //if there's another node present as headnode
            const newNode = new Node(value); // create another node
            this.count++; //add another count for new node
            if(this.headNode.nextNode == null) { //if headnode is not linked to another node
                this.headNode.nextNode = newNode; //the newly created node is the nextnode
            }
            this.tailNode.nextNode = newNode; //to connect different nodes, the tailnode's nextnode;
            this.tailNode = newNode;//and the tailnode itself will be the new node.
        }   //return console.log(this); used to illustrate node pairings
    }

    prepend(value) {
        if(this.tailNode == null) { //if there's no current tail node
            const currentNode = new Node(value); //create a new node
            this.count++; // add a count
            this.tailNode = currentNode; // the new node will be the tail node;
            this.headNode = this.tailNode; // will also being the head node
        }
        else { //if there's  tail node present
            let prevNode = this.headNode; //the current headnode will be referenced as a previous node
            this.headNode = new Node(value); //create a new node
            this.count++; // add count
            this.headNode.nextNode = prevNode; //the new headnode's nextnode will be the previous headnode
        }   //return console.log(this); used to illustrate node pairings
    }

    size() {
        return this.count; //return the number of adds to count++
    }

    head() {
        return this.headNode; //returns the current head node
    }

    tail() {
        return this.tailNode; //returns the current tail node
    }

    at(index) {
        if(index > this.count) { //check if index input is greater than current number of nodes
            return console.log("index greater than node size");
        }
        else { 
            let num = 1; //used as index
            let node = this.headNode; //head node will be the start for searching
            while(num<index) { //iterate through every node while num is less than index
                node = node.nextNode;
                num++;
            }
            return node; //returns node at the given index
        }
    }

    pop() {
        let node = this.headNode; //start of checking will always be head node
        let i = 1; //iterator
        while(i < this.count) { //iterate through node
            node = node.nextNode; //check next node
            i++; //iterator
            if(i == this.count) { //when reaching last node
                this.count--; //remove node count
                node.value = null; //node value 
                node.nextNode = null; //no next node
            }
        }
        return console.log("last element removed");
    }
    contains(val) {
        let node = this.headNode; //start of checking will always be head node
        let i = 1; //iterator
        while(i <= this.count) { //iterate through node
            if(node.value == val) { //if the node value is equal to given val
                return true;
            }
            else {
                node = node.nextNode; //check the next node
            }
            i++; //iterator
        }
        if(i >= this.count && val != this.tailNode.value) { //if count is greater than node size count, and value is not found
            return false;
        }
    }

    find(val) {
        let node = this.headNode; //start of checking will always be head node
        let i = 1; //iterator
        while(i <= this.count) { //iterate through node
            if(node.value == val) { //if the node value is equal to given val
                return i;
            }
            else {
                node = node.nextNode; //check the next node
            }
            i++; //iterator
        }
        if(i >= this.count && val != this.tailNode.value) { //if count is greater than node size count, and value is not found
            return null;
        }
    }

    toString() {
        let node = this.headNode; //start of checking will always be head node
        let i = 1; //iterator
        let str = ""; //container for string
        while(i <= this.count) { //iterate through node
            str += "( " + node.value + " ) -> "; //update str with node value
            node = node.nextNode; //go to next node
            i++; //iterator
        }
        return str + "null" //return str and use null as the end
    }
}

