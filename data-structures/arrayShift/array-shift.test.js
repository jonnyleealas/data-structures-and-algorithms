'use strict'
const arrayShift = require ('./array-shift.js');



describe('InsertShiftArray', () => {

  it('Should return inserted element in the middle of the array',()=>{
    const testArray = [1,2,3,4,]
    const results = arrayShift(testArray, 'element')

    expect(results).toEqual([1,2,'element',3,4])
  })
})


