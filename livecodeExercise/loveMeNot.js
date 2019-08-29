// function shortestWords(words) {
//   var tampung = "";
//   var arr = [];

//   for (var i = 0; i < words.length; i++) {
//     if(words[i] !== " ") {
//       tampung += words[i];
//     } else {
//       arr.push(tampung);
//       tampung = " ";
//     }
//   }
//   arr.push(tampung);
//   return arr;
// }

// console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
// console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!']
// console.log(shortestWords('I am diligent')); // ['I']



// [INSTRUKSI]
// Seorang perempuan sedang menggalaui apakah seseorang menyukai dia atau tidak. Ketimbang mencabut kelopak bunga untuk menghitung jika dia suka atau tidak, perempuan tersebut membuat sebuah program.

// Function loveMeNot akan menerima satu parameter berupa array yang berisikan boolean.
// Apabila jumlah true dalam array lebih besar dari jumlah false, maka function akan mereturn "HE LOVES ME!". Jika tidak, maka return "HE DOES NOT LOVE ME :(".
// Jika jumlah true dan false sama, maka function akan me-return "GALAU".

var yes = 0
var no = 0
function loveMeNot(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === true) {
      yes += 1
    }
    if (arr[i] === false) {
      no += 1
    }
  }
    if(yes > no) {
      return 'He Loves Me'
    }
    if(yes < no) {
      return 'He Does Not Loves Me'
    }
    if(yes === no || arr.length === 0) {
      return 'Galau'
    }
}

// TEST CASES
console.log(loveMeNot([true, false, false])); // "HE DOES NOT LOVE ME :("
console.log(loveMeNot([true, true, false, false, true])); // "HE LOVES ME!"
console.log(loveMeNot([true, false])); // "GALAU"
console.log(loveMeNot([])); // "GALAU"
console.log(loveMeNot([false])); // "HE DOES NOT LOVE ME :("