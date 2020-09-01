'use strict'

const LinkedList = require('./linked-list');

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
/// kthFromEnd
console.log('kthFromEnd:',testLinkedList.kthFromEnd(3));
/// To String
console.log(testLinkedList.toString());
