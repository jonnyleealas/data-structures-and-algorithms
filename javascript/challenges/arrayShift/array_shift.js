// To add a number to the middle of an array I would first start by finding the middle of the array.
// I would do so by running it through a loop.
// Next I would cut the array down the middle.
// With the left and right side of the arrays split I could then insert a given number in the middle.
// Next I would need to combine the left side, the middle number, and the right side. 
// This would make a new array with the given number in the middle.




const middleNumber = 5;
const arrayOfNumbers = [1,3,4,6,7,8,4]
const arrayOfNums = [1,3,5,6,0,2,8,9,0,5]


const insertShiftArray = (arr,num) => {
  // We can use slice to slice the array at length/2. Meaning slice the array down the center.
  // this does it on the right side using math.floor by giving it the 0 index as a starting point. Math.ceil won't get us zero which we need to count correctly.
  const first = arr.slice(0,Math.floor(arr.length/2))

  // We run the slice method again at arr.length to catch the left side.
  const second = arr.slice(Math.floor(arr.length/2), arr.length)

  // We can then return concat for (first) with (num) and concat on (second)
  // This would concatinate the left + middle + right, giving us a new array.
  return first.concat(num).concat(second)
};

console.log(insertShiftArray(arrayOfNums,5));
console.lot(insertShiftArray(arrayOfNumbers, middleNumber))
