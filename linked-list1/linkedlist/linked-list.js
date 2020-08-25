('use strict');
const Node = require('./node')


class LinkedList {
  constructor(){
    this.head = null;
  }

  append(value){
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let current = this.head;
    while (current.next) {
      current = current.next
    }
    current.next = node;

    return this;
  }
  //this is used to insert to the beggining of a linked list
  insert(value){
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  includes(value){
    let currentNode = this.head;
    let node = currentNode.value

    while (currentNode.next) {
      if(node === value){
        return true;
      }
      currentNode = currentNode.next;
      node = currentNode.value

    }
    if(node === value){
      return true;
    }
    return false;
  }

  toString() {
    let stringToReturn = '';
    let current = this.head;
    while (current.next) {
      stringToReturn += '{ ' + current.value + ' } -> '
      current = current.next
    }
    stringToReturn += '{ ' + current.value + ' } -> '
    return stringToReturn + 'NULL';
  }
}

module.exports = LinkedList;

let testLinkedList = new LinkedList();

testLinkedList.append('a');
testLinkedList.append('b');
testLinkedList.append('c');
// testLinkedList.insert('d');
testLinkedList.insert('d',1);
console.log(testLinkedList.includes('c'));
// console.log(testLinkedList);
console.log(testLinkedList.toString());
