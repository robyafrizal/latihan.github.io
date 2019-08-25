/* 
Buatlah sebuah function yang menerima parameter array of numbers.

Function tersebut akan mereturn numbers dengan kondisi:
  - terurut dari yang terbesar
  - terfilter hanya yang diatas atau sama dengan rata-rata


RULES:
  - dilarang menggunakan built-in function apapun selain .push


CONTOH:

INPUT:
  [2, 3, 5, 5, 6, 7]

PROCESS:
  - rata-ratanya adalah 4.67
  - yang diatas atau sama dengan rata-rata [5, 5, 6, 7]
  - lalu diurut dari yang terbesar

OUTPUT: 
  [7, 6, 5, 5]
*/


// function sortAndFilterAboveMean(numbers) {
//   var output = []
//   var result = 0
//   for(var i = 0; i < numbers.length; i++) {
//     result += numbers[i]

//     output = Math.round(result / numbers.length)
//       if(numbers[i] > output) {
//         return numbers
//       }
//     }
// }

function sortAndFilterAboveMean(numbers) {
  var result = 0
  for(var i = 0; i < numbers.length; i++) {
    result += numbers[i]
  }

  var rata2 = Math.round(result / numbers.length)
  //console.log(rata2)
  var output = []
  for(var j = 0; j < numbers.length; j++) {
    if(numbers[j] >= rata2) {
      output.push(numbers[j])
    }
  }

  var tampung = 0
  for(var i = 0; i < output.length - 1; i++) {
    for(var j = i + 1; j < output.length; j++) {
      if(output[i] < output[j]) {
        tampung = output[i]
        output[i] = output[j]
        output[j] = tampung
      }
    }
  }
  return output
}



console.log(sortAndFilterAboveMean([2, 3, 5, 5, 6, 7])) // [ 7, 6, 5, 5 ]

console.log(sortAndFilterAboveMean([1, 10, 3, 9, 1, 4, 10])) // [ 10, 10, 9 ]

console.log(sortAndFilterAboveMean([45, 2, 8, 22, 3, 9])) // [ 45, 22 ]

console.log(sortAndFilterAboveMean([3, 5, 2, 6])) // [ 6, 5 ]