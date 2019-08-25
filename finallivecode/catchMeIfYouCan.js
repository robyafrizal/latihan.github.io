/*
==============
Catch Me if You Can
==============
Instruksi
=========
Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
Detektif memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.
Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '*' adalah jalanan biasa
 - 'Villain' adalah pelaku kejahatan
Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
*/

// Algoritma / Pseudocode here..

function cariPenjahat(str) {
  var limit = 3
  var output = []
  for(var i = 0; i < str.length; i++) {
    // output.push(str[i])
    if(str[i] === '@') {
      limit--
    }
    else if(str[i] === 'Villain' && limit !== 0) {
      output.push(str[i])
    }
  }
  if(limit === 0) {
    return 'Ooops, you die. You get ' + output.length + ' Villains'
  }
  else {
    return 'Nica work, detective! You got all Villain : ' + output.length
  }
}

console.log(cariPenjahat(['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']))//Nice work, detective! You got all villains: 2
console.log(cariPenjahat(['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@'])) //Ooops, you die. You got 3 villains
console.log(cariPenjahat(['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain'])) //Ooops, you die. You got 3 villains