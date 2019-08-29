/*Latihan Number Letter

Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
*/
/* PSEUDOCODE
  START
  SET function numberLetter with parameter(str)
  STORE 'output' with empty string
  STORE i with 0
  FOR i LESS THEN str.length
    IF (str[i] === 1)
      output = output + 'i'
    ELSE IF (str[i] === 4)
      output = output + 'a'
    ELSE IF (str[i] === 3)
      output = output + 'e'
    ELSE IF (str[i] === 7)
      output = output + 'u'
    ELSE IF (str[i] === 0)
      output = output + 'o'
    END IF
    i++
  END FOR
  RETURN output
  END

*/

/*
ALGORITMA
  Buat variable output dengan isi string kosong
  Looping variable str secara urut depan sampai belakang
  Buat conditional jika index str ke-i sama dengan '1' maka simpan output dengan 'i'
  Jika index str ke-i sama dengan '4' maka simpan output dengan 'a'
  Jika index str ke-i sama dengan '3' maka simpan output dengan 'e'
  Jika index str ke-i sama dengan '7' maka simpan output dengan 'u'
  Jika index str ke-i sama dengan '0' maka simpan output dengan 'o'
  Jika selain itu maka simpan output dengan index ke-i
  Kembalikan / tampilkan output
*/

function numberLetters(str) {
  var output = ""
  for(var i = 0; i < str.length; i++) {
    if(str[i] == 1) {
      output += 'i'
    }
    else if (str[i] == 4) {
      output += 'a'
    }
    else if (str[i] == 3) {
      output += 'e'
    }
    else if (str[i] == 7) {
      output += 'u'
    }
    else if (str[i] == 0) {
      output += '0'
    }
    else {
      output += str[i]
    }
  }
  return output
}

// Test cases
console.log(numberLetters('d1m1tr1w4hy7d1p7tr4')); // dimitriwahyudiputra
console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
console.log(numberLetters('j1nk4z4m4')); // jinkazama
console.log(numberLetters('s7m3t4l')); // sumetal
console.log(numberLetters('m04m3t4l')); // moametal
console.log(numberLetters('')); //

//With Switch Case
function numberLetter(str) {
  var result = ''
  for(var i = 0; i < str.length; i++) {
    switch(Number(str[i])) {
      case 1: result += 'i'; break ;
      case 3: result += 'e'; break ;
      case 4: result += 'a'; break ;
      case 7: result += 'u'; break ;
      case 0: result += '0'; break ;
      default: result += str[i]
    }
  }
  return result
}
// Test cases
console.log(numberLetters('d1m1tr1w4hy7d1p7tr4')); // dimitriwahyudiputra
console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
console.log(numberLetters('j1nk4z4m4')); // jinkazama
console.log(numberLetters('s7m3t4l')); // sumetal
console.log(numberLetters('m04m3t4l')); // moametal
console.log(numberLetters('')); //