/*
Highest Global Minimum

[INSTRUCTIONS]
highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.
[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while dan if-else untuk pemecahan masalah.
- Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.
- Penggunaan sintaks .sort() array tidak diperbolehkan.

[EXAMPLE]
highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])
firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]
nilai minimum dari firstArr = 1
nilai minimum dari secondArr = 8
karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.
*/
function highestGlobalMinimum(arr1, arr2) {
  for(var i = 0; i < arr1.length; i++) {
    for(var j= 0; j < arr1.length; j++) {
      if(arr1[j] > arr1[j+1]) {
        var result = arr1[j]
        arr1[j] = arr1[j+1]
        arr1[j+1] = result
      }
    }
  }

  for(var i = 0; i < arr2.length; i++) {
    for(var j = 0; j < arr2.length; j++) {
      if(arr2[j] > arr2[j+1]) {
        var result1 = arr2[j]
        arr2[j] = arr2[j+1]
        arr2[j+1] = result1
      }
    }
  }

  if(arr2[0] < arr1[0]) {
    return arr1[0]
  }
  else if(arr2[0] > arr1[0]) {
    return arr2[0]
  }
  //bila arr2[0] dan arr1[0] diganti arr2[1] dan arr1[1] akan menghasilkan highest global minimum kedua (kedua terkecil)
}


console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5