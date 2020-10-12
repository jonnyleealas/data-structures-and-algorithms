'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;

  }
}

class Stack {

  constructor(){

    this.top = null;

  }
  //pushes new node to the top of the stack
  push(value) {

    //this creates new node with value
    let node = new Node(value);

    // here we are taking top and assigning it to our new node we created above
    node.next = this.top; // here node.next and top are the same

    //  here we need to reorder node and top, we reset this.top to be the new node we created above
    this.top = node

    return this.top;
  }
  // pops last stack off the top
  pop(){
    if(this.top === null) throw new Error ('STACK IS EMPTY');

    let take = this.top;
    this.top = this.top.next;
    return take.value;
  }
  // shows the first thing in a stack
  peek(){
    if(this.top === null) throw new Error ('STACK IS EMPTY');

    return this.top
  }
  // Returns true or false if stack stack is empty

  isEmpty(){
    if(this.top){
      return true
    } else{
      return false;
    }
  }

}

class Queue{
  constructor(){
    this.front = null;
    this.back = null;
    this.queue = [];
  }
  enqueue(value){
    let node = new Node(value);
    this.queue.push(node)
    if (this.front === null){
      this.front = node;
      this.rear = node;
    } else {
      this.rear = node;
    }
  }
  dequeue(){
    if(this.front === null) {
      throw new Error('Nothing to dequeue');
    }
    return this.queue.shift();

  }

  peek(){
    if (!this.front){
      return 'nothing to peek';
    } else if(this.front){
      console.log(this.front.value);
      return this.front.value;
    }
  }
  isEmpty(){
    if(this.front){
      return true
    } else{
      return false;
    }
  }
}

module.exports = {Stack, Queue, Node};
