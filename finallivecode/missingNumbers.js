/*
Missing Numbers
-------------------
Implementasikan function `missingNumbers` untuk mencari
angka yang hilang dari array `numbers`.
Contoh:
  - Input: [9, 4, 2, 8]
    Output: [1, 3, 5, 6, 7]
  - Input: [8, 3, 2, 1, 7, 5, 6]
    Output: [4]
  - Input: [4, 2, 3, 1]
    Output: []
RULES:
--------
- WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
- Dilarang menggunakan built-in function:
  - .max()
  - .min()
  - .sort()
- Dilarang menggunakan spread operator ( abaikan jika tidak tahu ini apa, belum penting untuk sekarang :) )
*/

function missingNumbers(arr) {
  //var arrSort = arr.sort()
  var output = []
  if(!arr.length) {
    return output
  }
  //Sort terlebih dahulu (bubble sort method)
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++) {
      if(arr[j] > arr [j+1]) {
        var arrSort = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = arrSort
      }
    }
  }
  for(var k = 1; k < arr.length; k++) {
    if(arr[k] - arr[k-1] !== 1) {
      var plus = arr[k] - arr[k-1]

      for(var l = 1; l < plus; l++) {
        output.push(arr[k-1] + l)
      }
    }
  }
  return output
}


console.log(missingNumbers([1, 5, 10, 7, 6])); // [2, 3, 4, 8, 9]
console.log(missingNumbers([10, 1])); // [2, 3, 4, 5, 6, 7, 8, 9]
console.log(missingNumbers([90, 92, 91])); // []
console.log(missingNumbers([60, 54, 50])); // [51, 52, 53, 55, 56, 57, 58, 59]
console.log(missingNumbers([])); // []