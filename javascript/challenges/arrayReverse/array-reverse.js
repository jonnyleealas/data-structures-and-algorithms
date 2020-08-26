'use strict'

// To reverse an array I would need to start at the end of the array. 
// Starting at the end of the array I would need to send each number into an empty array.
// I would need to do this by making a loop that goes from the end of the array to the beginning. 
// The loop will start at array.length -1 index position. 
// It goes through the array length and subtracts 1; this will be the new starting position.
// Every position the loop is in currently would need to be pushed into the new empty array.
// Lastly I would need to return the new array.


const arrayOfNumbers = [89, 2354, 3546, 23, 10, -923, 823, -12]

const reverseFunction = (arr) =>{
  let newArray = [];
  for ( let i= arr.length -1; i>=0; i--){
    newArray.push(arr[i]);
  }
  return newArray;
}

console.log(reverseFunction(arrayOfNumbers));