'use strict';
const {BinarySearchTree, TreeNode} = require('../tree.js');






describe('Binary tree tests', () => {
  it('can instantiate an empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree).toBeDefined();
  });

  it('can successfully instantiate a tree with a single root node', () => {
    const tree = new BinarySearchTree('howdy');
    expect(tree.root).toBe('howdy');
  });

  it('can successfully add a left child and right child to a single root node', () => {
    const apples = new TreeNode('apples', 'bananas', 'cherries');
    const tree = new BinarySearchTree(apples);
    expect(apples.value).toBe('apples');
    expect(apples.left).toBe('bananas');
    expect(apples.right).toBe('cherries');
  });

  it('can successfully return a collection from a preorder traversal', () => {
    // const apples = new Node('apples', 'bananas', 'cherries');
    const banana = new TreeNode('banana');
    const cherries = new TreeNode('cherries');
    const apple = new TreeNode('apples', banana, cherries);
    const tree = new BinarySearchTree(apple);

    expect(tree.preOrder()).toEqual(['apples', 'banana', 'cherries']);

  });
  it('can successfully return a collection from a in order traversal', () => {
    
    const banana = new TreeNode('banana');
    const cherries = new TreeNode('cherries');
    const apple = new TreeNode('apples', banana, cherries);
    const tree = new BinarySearchTree(apple);

    expect(tree.inOrder()).toEqual(['banana', 'apples', 'cherries']);

  });

  it('can successfully return a collection from a postorder traversal', () => {

    const banana = new TreeNode('banana');
    const cherries = new TreeNode('cherries');
    const apple = new TreeNode('apples', banana, cherries);
    const tree = new BinarySearchTree(apple);

    expect(tree.postOrder()).toEqual(['banana', 'cherries', 'apples']);
  });

  it('should add to root of empty tree', () => {
    let trees = new BinarySearchTree();
    let cow = trees.add(24)
    expect(cow.root.value).toBe(24);
  });

  it('should add to a 1 item tree -- go left', () => {
    const tree = new BinarySearchTree(new TreeNode(10));

    tree.add(5);

    expect(tree.root.value).toBe(10);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.right).toBe(null);
  });

  it('should add to a 1 item tree -- go right', () => {


    const ten = new TreeNode(10);
    const five = new TreeNode(5);
    const fifteen = new TreeNode(15);

    ten.left = five;
    ten.right = fifteen;
    const tree = new BinarySearchTree(ten);
    tree.add(25);

    expect(tree.root.value).toBe(10);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.right.right.value).toBe(25);
  })


  it('Can successfully find the largest value in a tree', ()=>{
    const eight = new TreeNode(8);
    const six = new TreeNode(6);
    const five = new TreeNode(5, eight, six);
    const tree = new BinarySearchTree(five);
    expect(tree.findMaximumValue()).toEqual(8);
  })
});
