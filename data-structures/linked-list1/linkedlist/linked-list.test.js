'use strict'


const LinkedList = require('./linked-list');
const ZipList = require('./zipped-list');

let testLinkedList = new LinkedList();


describe('Combine two linked list',()=>{

  it('It should take two linked list and combine one node at a time',()=>{

    let ll1 = new LinkedList();
    let ll2 = new LinkedList();
    ll1.append(1)
    ll1.append(3)
    ll1.append(5)
    ll2.append(2)
    ll2.append(4)
    ll2.append(6)
    let newZipList = new ZipList();
    newZipList.zip(ll1,ll2);
    const value = newZipList.toString();
    expect(value).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL')
  })
})


/// Append
// testLinkedList.append('a');
// testLinkedList.append('b');
// testLinkedList.append('c');
// testLinkedList.append('e')
/// Insert
// testLinkedList.insert('d',1);
/// Insert Before
// testLinkedList.insertBefore('c', 'f' );
/// Insert After
// testLinkedList.insertAfter('c', 'g');
// testLinkedList.insertAfter('g','jonny')
/// Includes
// console.log('Includes:',testLinkedList.includes('jonny'));
/// kthFromEnd
// console.log('kthFromEnd:',testLinkedList.kthFromEnd(3));
/// To String
// console.log(testLinkedList.toString());
