/*
  ///////////
  diagonAlley
  ///////////
  Function diagonAlley adalah sebuah function yang membentuk tulisan dalam bentuk diagonal dan
  membentuk bingkai kotak seperti pada test cases. function ini akan menerima parameter string, dan
  function ini berfungsi hanya untuk menampilkan.

  [EXAMPLE]
  INPUT: non
  OUTPUT: 
    |-n
    |o|
    n-|

  NOTES:
    - word membentuk diagonal
    - tepi bingkai horizontal disambung dengan -
    - tepi bingkai vertical disambung dengan |
    - Ukuran bingkai sesuai dengan panjang karakter yang diberikan.
    - Minimal panjang karakter yang diinput adalah 3. Tampilkan 'Invalid input' jika kondisi ini tidak terpenuhi.
*/

// function diagonAlley(word) {
//   // code here
//   var output = []
//   var result = ''
//   if(word.length < 3) {
//     return 'Invalid input'
//   }

//   for(var i = 0; i < word.length; i++) {
//     for(var j = word[i].length; j > i; j--) {
//       result += word[i][0]  
//     }
//      output.push(result)
//   }
//   return output
// }


function diagonAlley(word) {
  // code here

  if (word.length < 3) {
    return 'Invalid Input'
  } else {
    var output = ''
    for(var i = 0; i < word.length; i++){  
      var str = ''
      for(var j = word.length-1; j >= 0; j--){
        if (i === j) {
          str += word[i];
        } else if (i >= 1 && j === 0 || i < word.length && j === word.length-1) {
          str += '|'
        } else {
          str += '-'
        }
      }
      output += str 
      output += '\n'
    }
  }
  return output
}



// TEST CASES

console.log(diagonAlley('kuroko'))
/*
  |----k
  |---u|
  |--r-|
  |-o--|
  |k---|
  o----|
*/
console.log('')

console.log(diagonAlley('non'))
/*
  |-n
  |o|
  n-|
*/
console.log('')

console.log(diagonAlley('basuke'))
/*
  |----b
  |---a|
  |--s-|
  |-u--|
  |k---|
  e----|
*/
console.log('')

console.log(diagonAlley('no'))
// Invalid input