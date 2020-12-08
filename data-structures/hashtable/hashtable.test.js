const hashtable = require('./hashtable.js');
const {HashTable} = require ('./hashtable.js')


describe('should hash a key', () => {
  it('hashtable.hashed() returns a key index', () => {
    const hashTable = new HashTable(4)
    const value = hashTable.hashed('jason')
    expect(value).toBe(0)
  })

  it('adds to hashtable', () => {
    const hashTable = new HashTable(4)
    hashTable.add('jason', 1000)
    const value = hashTable.contains('jason')
    expect(value).toBe(true)
  })

  it(' adds key/value successfully', () => {
    const hashTable = new HashTable(4)
    hashTable.add('jason', 1000)
    const value = hashTable.get('jason')
    expect(value).toEqual(1000)
  })

  it('Takes a key and returns its value', () => {
    const hashTable = new HashTable(4)
    hashTable.add('jason', 1000)
    const value = hashTable.get('jason')
    expect(value).toBe(1000)
  })


});
