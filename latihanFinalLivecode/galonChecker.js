/*
================
Galon Checker
================
[INSTRUCTIONS]
galonChecker adalah sebuah function yang menerima satu parameter berupa array of string.
function tersebut akan menghitung jumlah galon yang penuh (F), setengah penuh (H) dan galon kosong (E)
dan function akan mereturn jumlah masing2 jenis galon dan total galon secara keseluruhan.
Adapun ketentuannya:
Full (F) = 1
Half (H) = 1/2
Empty (E) = 0
[RULE]
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()
[EXAMPLE]
galonChecker(['F','H','F'])
output: jumlah F: 2, jumlah H: 1, jumlah E: 0. Dan totalnya adalah: 2.5
*/
function galonChecker(arr) {
  if(arr.length === 0) {
    return 'No Data'
  }

  var result = 0
  var F = 0
  var H = 0
  var E = 0
  for(var i = 0; i < arr.length; i++) {
    //output.push(arr[i])
    if(arr[i] === 'F') {
      result += 1
      F++
    }
    else if(arr[i] === 'H') {
      result += 0.5
      H++
    }
    else if(arr[i] === 'E') {
      result += 0
      E++
    }
  }
  return 'jumlah F : ' + F + ', jumlah H : ' + H + ', jumlah E : ' + E + '. Dan totalnya adalah : ' + result
}


console.log(galonChecker(['F','H','F']));
// jumlah F: 2, jumlah H: 1, jumlah E: 0. Dan totalnya adalah: 2.5
console.log(galonChecker(['H','H','F','F','E']));
// // jumlah F: 2, jumlah H: 2, jumlah E: 1. Dan totalnya adalah: 3
console.log(galonChecker(['E','F','F','F','H']));
// // jumlah F: 3, jumlah H: 1, jumlah E: 1. Dan totalnya adalah: 3.5
console.log(galonChecker(['E','H']));
// // jumlah F: 0, jumlah H: 1, jumlah E: 1. Dan totalnya adalah: 0.5
console.log(galonChecker(['H','H','H','H']));
// // jumlah F: 0, jumlah H: 4, jumlah E: 0. Dan totalnya adalah: 2
console.log(galonChecker([])); //NO DATA