// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

//Solution

function findUniq(arr) {
    let primero = arr[0]
    if (primero == arr[1]) {
      for (let i=2; i<arr.length; i++){
        if (primero != arr[i]) return arr[i]
      }
    }
    else if (arr[1]==arr[2]) return primero
    else return arr[1]
  }