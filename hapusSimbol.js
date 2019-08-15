 /**
  Hapus Simbol
  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai simbol,
  hanya menyisakan a-z dan angka 0-9.
  RULES:
  - WAJIB MENGGUNAKAN algoritma / pseudocode
  - DILARANG menambahkan parameter baru
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
**/
/*
PSEUDOCODE
  START
  SET hapusSimbol with parameter(str)
  STORE 'output' with any value
  STORE 'hurufAngka' with 'abcdefghijklmnopqrstuvwxyz'
  STORE i with 0
  FOR i LESS THEN str.length
    STORE j with 0
    FOR j LESS THEN hurufAngka.length
      IF str[i] EQUALS TO hurufAngka[j]
        SET output EQUALS TO output + str[i]
      END IF
      j++
    END FOR
    i++
  END FOR
  RETURN output
  END
*/
function hapusSimbol(str) {
  var output = ''
  var hurufAngka = 'abcdefghijklmnopqrstuvwxyz0123456789'
  for(var i = 0; i < str.length; i++){
    for(var j = 0; j < hurufAngka.length; j++) {
      if(str[i] === hurufAngka[j]) {
        output += str[i]
      }
    }
  }
  return output
}

//TEST CASE
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100