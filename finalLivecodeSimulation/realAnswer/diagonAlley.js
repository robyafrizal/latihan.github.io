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

function diagonAlley(word) {
  // code here
  if (word.length < 3) {
    return 'Invalid input'
  }

  var output = []
  
  for (let i = 0; i < word.length; i++) {
    output.push([])
    for (let j = 0; j < word.length; j++) {
        if (j == 0) {
          output[i].push("|")
        } else if (j == word.length-1) {
          output[i].push("|")
        } else {
          output[i].push("-")
        }
        
    }
  }

  // console.log(output)
  for( var i = 0; i < word.length; i++){
    // saat i = 0, ak mau posisi word[i] ada di output[i][output.length-i]
    // console.log(output[i])
    output[i][output.length-1-i] = word[i]
    // console.log(i, output[i],"\n====")
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