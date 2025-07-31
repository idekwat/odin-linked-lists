import LinkedList from "./linkedlist.js"

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

/*
list.prepend("dog");
list.prepend("cat");
list.prepend("parrot");
list.prepend("hamster");
list.prepend("snake");
list.prepend("turtle");
*/

console.log(list.size());
console.log(list.toString());
console.log(list.pop());
console.log(list.size());
console.log(list.toString());