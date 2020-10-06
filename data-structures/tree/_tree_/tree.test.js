'use strict';
const {BinarySearchTree, TreeNode} = require('../tree');


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
