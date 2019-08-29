/*
  FUNCTION TUKAR GANJIL
  
  Fungsi Tukar Ganjil akan mengubah besar dan kecil huruf apabila berada di index yang ganjil.
  [PROCESS]
  INPUT:
  'Dana K'
  PROCESS:
  1 => d (karena 1 ganjil)
  2 => a
  3 => N (karena 3 ganjil)
  4 => a
  5 => ' ' (diabaikan)
  6 => K
  OUTPUT:
  daNa K
  [RULES]
  - Dilarang menggunakan built in function apapun
*/
function lowerCase(str) {
  var output = ''
  var hurufKecil = 'abcdefghijklmnopqrstuvwxyz'
  var hurufBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for(var i = 0; i < str.length; i++) {
    var result = ''
    for(var j = 0; j < hurufBesar.length; j++) {
      if(str[i] == hurufBesar[j]) {
        result = hurufKecil[j]
        break
      }
      else {
        result = str[i]
      }
    }
    output += result
  }
  return output
}

function upperCase(str) {
  var output = ''
  var hurufKecil = 'abcdefghijklmnopqrstuvwxyz'
  var hurufBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for(var i = 0; i < str.length; i++) {
    var result = ''
    for(var j = 0; j < hurufKecil.length; j++) {
      if(str[i] == hurufKecil[j]) {
        result = hurufBesar[j]
        break
      }
      else {
        result = str[i]
      }
    }
    output += result
  }
  return output
}

function tukarGanjil(str) {
  var output = ''
  for(var i = 0; i < str.length; i++) {
    if((i+1) % 2 != 0) {
      if(str[i] == upperCase(str[i])) {
        output += lowerCase(str[i])
      }
      else if(str[i] == lowerCase(str[i])) {
        output += upperCase(str[i])
      }
      else {
        output += str[i]
      }
    }
    else {
      output += str[i]
    }
  }
  return output
}

console.log(tukarGanjil('Hello World')) // "heLlO woRlD"
console.log(tukarGanjil('I aM aLAY')) // "i AM alAy"
console.log(tukarGanjil('My Name is Bond!!')) // "my NAmE Is BOnD!!"
console.log(tukarGanjil('IT sHOULD bE me')) // "iT shOuLd BE mE"
console.log(tukarGanjil('001-A-3-5TrdYW')) // "001-a-3-5TRdyW"