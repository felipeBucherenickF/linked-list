import { LinkedList } from "./linked-list-factory.mjs";

const myList = new LinkedList();

myList.append("dog");
myList.append("cat");
myList.append("parrot");
myList.append("hamster");
myList.append("snake");
myList.append("turtle");

const toStringRes = myList.toString();
console.log(toStringRes);
