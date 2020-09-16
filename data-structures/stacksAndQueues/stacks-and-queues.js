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
  push(value){
    let node = new Node(value);
    node.next = this.top;
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
  isEmpty() {
    if (this.top){
      console.log('STACK IS EMPTY');
      return true;
    } else if(!this.top){
      console.log('STACK IS NOT EMPTY');
      return false;
    }
  }
}


module.exports = {Stack, Queue};
