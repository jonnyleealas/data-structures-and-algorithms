const insertionSort = require ('./insertionSort.js');

describe('insertion sort testing', () => {

  it('should return a sorted array',()=>{
    let array = [3,4,6,2,8,5,10];

    let value = insertionSort(array)
    expect(value).toEqual([2,3,4,5,6,8,10])
  })

  it('should return [3,3,3,3]', ()=>{

    let array = [3,3,3,3];


    expect(insertionSort(array)).toEqual([3,3,3,3])
  })
})
