// Q1.

//let arr = [1,2,3,4,5]
//let reverse = []

//while(arr.length > 0){
    //reverse.push(arr.pop())
//}
//console.log(reverse) 

// Q2.

//let array = [5,-7,12,-6,9,-3,15]
//positive = []

//while(array.length > 0){
    //let val = arr.shift()
    //if(val > 0){
      //  positive.push(val)
    //}
//}
//console.log(positive)

// Q3.

let arr = [1, 2, 3, 2, 1]
let original = []
let reverse = []

function palindrome() {

  // push given array elements into original array
  for (let i = 0; i < arr.length; i++) {
    original.push(arr[i])
  }

  // reverse the given array
  while (arr.length > 0) {
    reverse.push(arr.pop())
  }

  // compare original and reverse array
  for (let i = 0; i < original.length; i++) {
    if (original[i] !== reverse[i]) {
      return "not a palindrome"
    }
  }

  return "palindrome"
}

console.log(palindrome())
