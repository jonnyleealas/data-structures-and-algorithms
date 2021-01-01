// To add a number to the middle of an array I would first start by finding the middle of the array.
// I would do so by running it through a loop.
// Next I would cut the array down the middle.
// With the left and right side of the arrays split I could then insert a given number in the middle.
// Next I would need to combine the left side, the middle number, and the right side. 
// This would make a new array with the given number in the middle.




const insertShiftArray = (arr,num) => {
  const first = arr.slice(0,Math.floor(arr.length/2))
  const second = arr.slice(Math.floor(arr.length/2), arr.length)
  return first.concat(num).concat(second)
};


module.exports = insertShiftArray;
