import LinkedList from "./linkedlist.js"

const list = new LinkedList();

/*
list.prepend("dog");
list.prepend("cat");
list.prepend("parrot");
list.prepend("hamster");
list.prepend("snake");
list.prepend("turtle");
*/

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());