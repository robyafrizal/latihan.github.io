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

// function sort(arr) {
//   for(var i = 0; i < arr.length; i++) {
//     for(var j = 0; j < arr.length; j++) {
//       if( arr[j] < arr[j+1]) {
//         var result1 = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = result1
//       }
//     }
//   }
//   return arr
// }

// function sortAndFilterAboveMean(arr) {
//   var sum = 0
//   for(var i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }

//   var avg = sum / (arr.length + 1)
  
//   var output = []
//   for(i = 0; i < arr.length; i++) {
//     if(arr[i] > avg) {
//       output.push(arr[i])
//     }
//   }
// return sort(output)
// }


// function sortAndFilterAboveMean(arr) {
//   for(i = 0; i < arr.length; i++) {
//     for(j = 0; j < arr.length; j++) {
//       if(arr[j] > arr[j+1]) {
//         result1 = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = result1
//       }
//     }
//   }
//   total = 0
//   for(i = 0; i < arr.length; i++) {
//     total += arr[i]
//   }

//   rata2 = total / arr.length

//   output = []
//   for(i = 0; i < arr.length; i++) {
//     if(arr[i] > rata2) {
//       output.push(arr[i])
//     }
//   }
// return output
// }


function sortAndFilterAboveMean(arr) {
  result = 0
  for(var i = 0; i < arr.length; i++){
    result += arr[i]
  }
  
  var avg = (result/arr.length)
  var output = []
  for(i = 0; i < arr.length; i++) {
    if(arr[i] >= arr.length) {
      output.push(arr[i])
    }
  }

  for(i = 0; i < output.length; i++) {
    for(j = 0; j < output.length; j++) {
      if(output[j] > output[j+1]) {
        result1 = output[j]
        output[j] = output[j+1]
        output[j+1] = result1
      }
    }
  }

  return output
}


console.log(sortAndFilterAboveMean([2, 3, 5, 5, 6, 7])) // [ 7, 6, 5, 5 ]

console.log(sortAndFilterAboveMean([1, 10, 3, 9, 1, 4, 10])) // [ 10, 10, 9 ]

console.log(sortAndFilterAboveMean([45, 2, 8, 22, 3, 9])) // [ 45, 22 ]

console.log(sortAndFilterAboveMean([3, 5, 2, 6])) // [ 6, 5 ]