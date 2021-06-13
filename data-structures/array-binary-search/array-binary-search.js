const keyIndex = 23;
const array = [4,8,15,16,23,42]
const arr2 = Array.from(Array(1000000).keys())

function binarySearch (arr, key){
  let start = 0;
  let end = arr.length -1;

  while ( start <= end){
    // want it to round down because rounding ceil will miss numbers
    let middle = Math.floor((start + end)/2);
    //check best case senmerio by checking to see if middle matches the key number. return middle
    if( arr[middle] === key){

      return middle
    }
    if(arr[middle] < key){
      start = middle + 1

    } else {
      end = middle -1

    }
  }
  return false
}

module.exports = binarySearch;
