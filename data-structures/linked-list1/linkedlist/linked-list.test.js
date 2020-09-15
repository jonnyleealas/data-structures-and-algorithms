'use strict'


const LinkedList = require('./linked-list');
const ZipList = require('./zipped-list');




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

describe('kthFromEnd',()=>{

  it('Should return number k spaces from the end',()=>{
    let ll1 = new LinkedList();
    ll1.append(1)
    ll1.append(2)
    ll1.append(3)
    ll1.append(4)
    ll1.append(5)
    let result = ll1.kthFromEnd(3);
    expect(result).toBe(2)
  })
})

