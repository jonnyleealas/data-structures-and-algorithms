'use strict'

const shiftArray = require ('../challenges/array_shift.js');





it('shiftArray exists',()=>{
  test('It should add a number to the middle of the array',()=>{

    expect(shiftArray).toBeDefined();
  })
})

it('length should increase by 1',()=>{
  const startArray = ['x','x','x','x','x','x','x'];
  const resultArray = shiftArray(startArray, 'y');
  expect(startArray.length).toBe(6);
})

it('should have item added in correct spot',()=>{
  const startArray = ['x','x','x','x','x','x','x'];
  const shiftArray = shiftArray(startArray, 'y');
  expect(resultArray[3]).toBe('y');
})
