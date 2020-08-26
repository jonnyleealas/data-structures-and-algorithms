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
  //this is used to insert to the beginning of a linked list
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

  insertBefore(value, newVal){
    let currentNode = this.head;
    while(currentNode.next !== currentNode){
      if(currentNode.next.value === value){
        let node = new Node(newVal);
        node.next = currentNode.next;
        currentNode.next = node;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  insertAfter(value, newVal){
    let newNode = new Node(newVal)

    if(this.head.value === value){
      newNode.next = this.head.next;
      this.head.next = newNode;
      return
    }
    let currentNode = this.head;
    let nextNode;
    while(currentNode.next){
      nextNode = currentNode.next;
      if(currentNode.next.value === value){
        newNode = new Node(newVal, nextNode)
        currentNode.next = newNode;
        return
      }
      currentNode = currentNode.next
    }
    return
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
/// Append
testLinkedList.append('a');
testLinkedList.append('b');
testLinkedList.append('c');
testLinkedList.append('e')
/// Insert
testLinkedList.insert('d',1);
/// Insert Before
testLinkedList.insertBefore('c', 'f' );
/// Insert After
testLinkedList.insertAfter('c', 'g');
testLinkedList.insertAfter('g','jonny')
/// Includes
console.log('Includes:',testLinkedList.includes('jonny'));
/// To String
console.log(testLinkedList.toString());
