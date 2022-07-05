'use strict'

// To reverse an array I would need to start at the end of the array. 
// Starting at the end of the array I would need to send each number into an empty array.
// I would need to do this by making a loop that goes from the end of the array to the beginning. 
// The loop will start at array.length -1 index position. 
// It goes through the array length and subtracts 1; this will be the new starting position.
// Every position the loop is in currently would need to be pushed into the new empty array.
// Lastly I would need to return the new array.




function reverseArray(array){
  let newArray = []
  for(let i = array.length - 1; i >= 0; i--){
    newArray.push(array[i])
  }
  return newArray
}

module.exports = reverseArray;
