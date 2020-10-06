'use strict'

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(node = null){
    this.root = node;
  }
  preOrder(){
    let results = [];
    const _walk = (node)=>{
      results.push(node.value);
      if(node.left){ _walk(node.left);}
      if(node.right){ _walk(node.right);}
    }
    _walk(this.root)
    return results;

  }
  inOrder(){
    let results = [];
    const _walk = (node)=>{
      if(node.left){ _walk(node.left);}
      results.push(node.value)
      if(node.right){ _walk(node.right);}

    }
    _walk(this.root);
    return results;

  }
  postOrder(){
    let results = []
    const _walk = (node) =>{
      if(node.left){ _walk(node.left);}
      if(node.right){ _walk(node.right);}
      results.push(node.value);
    }
    _walk(this.root);
    return results;
  }
}



let twenty = new TreeNode(20);
let twelve = new TreeNode(12);
let six = new TreeNode(6);
let seventeen = new TreeNode(17);
let thirtytwo = new TreeNode(32);
let twentyfive = new TreeNode(25);
let fourty = new TreeNode(40);
let seventy = new TreeNode(70)

twenty.left = twelve;
twenty.right = thirtytwo;
twelve.left = six;
twelve.right = seventeen;
thirtytwo.right = fourty;
thirtytwo.left = twentyfive;
fourty.right= seventy;

let tree = new BinaryTree(twenty);

console.log(tree.preOrder());
// console.log(tree.inOrder());
// console.log(tree.postOrder());
// console.log(JSON.stringify(tree, undefined, 4))


class BinarySearchTree extends BinaryTree {
  add(value) {
    const output = [];

    let newNode = new TreeNode(value);
    while (this.left || this.right){
      if (this.root === null) {
        this.root = newNode;
      }
      if (newNode.value < this.root) {
        this.root = this.root.left;
      }
      if (newNode.value > this.root) {
        this.root = this.root.right;
      }
    }
    output.push(newNode);
    return output;
  }
  contains(value) {

    while (this.root) {
      if( this. root === value)
        return true;
      if (value > this.root) {
        this.root = this.right;
      } else if(value < this.root){
        this.root = this.left;
      } else {
        return false;
      }
    }

  }
}

module.exports = { BinarySearchTree, TreeNode};
