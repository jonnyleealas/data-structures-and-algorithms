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

  push(value){
    let node = new Node(value);
    node.next = this.top;
    this.top = node
    return this.top;
  }

  pop(){
    if(this.top === null) throw new Error ('Empty');

    let take = this.top;
    this.top = this.top.next;
    return take.value;
  }

  peek(){
    if(this.top === null) throw new Error ('Empty');

    return this.top
  }


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
    let newNode = new Node(value);
    if (this.front === null){
      this.front = this.rear
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }
  dequeue(){
    if(this.front ===null) {
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

module.exports = {Stack, Queue};
