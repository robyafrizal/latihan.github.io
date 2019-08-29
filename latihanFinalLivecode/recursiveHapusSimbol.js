/*
  Hapus Simbol Rekursif
  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai simbol,
  hanya menyisakan a-z dan angka 0-9.
  RULES:
  - Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function hapusSimbolRec
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function hapusSimbolRec
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function hapusSimbolRec(str) {
  var output = ''
  
  if (str[0] === "a" || str[0] === "b" || str[0] === "c" || str[0] === "d" || str[0] === "e" || str[0] === "f" || str[0] === "g" || str[0] === "h" || str[0] === "i" ||
    str[0] === "j" || str[0] === "k" || str[0] === "l" || str[0] === "m" || str[0] === "n" || str[0] === "o" || str[0] === "p" || str[0] === "q" ||
    str[0] === "r" || str[0] === "s" ||
    str[0] === "t" || str[0] === "u" || str[0] === "v" || str[0] === "w" || str[0] === "x" || str[0] === "y" || str[0] === "z" || str[0] === "0" ||
    str[0] === "1" ||
    str[0] === "2" || str[0] === "3" || str[0] === "4" || str[0] === "5" || str[0] === "6" || str[0] === "7" || str[0] === "8" || str[0] === "9") {
    output += str[0]
  }

  var result = str.split('')
  result.shift()
  var tampung = result.join('')

  if(str.length === 0) {
    return output
  }
  else {
    return output + hapusSimbolRec(tampung)
  }
}


console.log(hapusSimbolRec('test%$4aa')); // test4aa
console.log(hapusSimbolRec('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbolRec('ma@#k!an~')); // makan
console.log(hapusSimbolRec('coding')); // coding
console.log(hapusSimbolRec('1+3-5*2=100')); // 1352100