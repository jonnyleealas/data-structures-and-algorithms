'use strict';
const {BinarySearchTree, TreeNode, BinaryTree} = require('../tree');


describe('Binary tree tests', () => {
  it('can instantiate an empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree).toBeDefined();
  })

  it('can add single root node', () => {
    const tree = new BinarySearchTree('jerry');
    expect(tree.root).toBe('jerry');
  })

  it('can successfully add to a single root node', () => {
    const apples = new TreeNode(1,2, 3);
    const tree = new BinarySearchTree(apples);
    expect(apples.value).toBe(1);
    expect(apples.left).toBe(2);
    expect(apples.right).toBe(3);
  })

  it(' returns a collection from a preorder traversal', () => {
    // const apples = new Node('apples', 'bananas', 'cherries');
    const jerry = new TreeNode('jerry');
    const garcia = new TreeNode('garcia');
    const bruce = new TreeNode('bruce', jerry, garcia);
    const batman = new BinarySearchTree(bruce);

    expect(batman.preOrder()).toEqual(['bruce', 'jerry', 'garcia']);

  });
  it('return a collection from a ordered traversal', () => {

    const mike = new TreeNode('mike');
    const lina = new TreeNode('lina');
    const bob = new TreeNode('sam', mike, lina);
    const tree = new BinarySearchTree(bob);

    expect(tree.inOrder()).toEqual(['mike', 'sam', 'lina']);

  });

  it('returns a collection from a post order traversal', () => {

    const banana = new TreeNode('banana');
    const cherries = new TreeNode('cherries');
    const apple = new TreeNode('apples', banana, cherries);
    const tree = new BinarySearchTree(apple);

    expect(tree.postOrder()).toEqual(['banana', 'cherries', 'apples']);
  });

});

describe(' find max value method', () => {

  it('Should traverse through a binary tree and return max value', () => {

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

    let tree = new BinaryTree(twenty)
    let result = tree.findMaxValue()
    expect(result).toBe(70);

  })
})
