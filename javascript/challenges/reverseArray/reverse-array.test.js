('use strict');
const reverseArray= require ('./reverse-array.js');


describe('Reverse Array', () => {

  it('Should take an array of number and return a reversed array', () => {
    let testArray = [1,2,3]
    let results = reverseArray(testArray)
    expect(results).toEqual([3,2,1])
  })

  it('should take an array of words and return an array with words in reversed order', () => {

    let testWords = ['one', 'two', 'three'];
    let results = reverseArray(testWords)
    expect(results).toEqual(['three', 'two', 'one'])
  })
})

