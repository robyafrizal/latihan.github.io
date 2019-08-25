/*
=====
Hacktiv Mining
=====

[INSTRUCTIONS]
salesAmount adalah fungsi yang mengambil parameter:
    1. array penjualan/sales hasil tambang dari berbagai macam tambang yang dimiliki oleh perusahaan Hacktiv
    2. nama mineral yang ingin diketahui jumlah salesnya dari semua tambang-tambang tersebut.

Fungsi ini akan me-return amount atau jumlah dari sales suatu mineral. 

Berikut ini adalah daftar mineral beserta harga-harganya:
    - sulfur dengan harga 10
    - silver dengan harga 30
    - malachite dengan harga 50
    - gold dengan harga 50
    - diamond dengan harga 100

[EXAMPLE]
INPUT : 
- hasil tambang: [['silver','silver','gold'], ['gold','malachite']]
- mineral yang dicari nilai penjualannya: gold

PROSES:
1. Ada 2 tambang, tambang pertama menghasilkan [silver,silver,gold] dan tambang kedua menghasilkan [gold,malachite]
2. Di semua tambang perusahaan Hacktiv, terdapat 2 biji hasil tambang gold.
3. Harga gold adalah 50, jadi hasil penjualan gold adalah 100

OUTPUT:
100

[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin

*/


// Write the function here

/*
PSEUDOCODE
  START
  SET function salesAmount with parameter(arr)
  STORE 'output' with empty array
  STORE 'harga mineral' with any value
  STORE i with 0
  FOR i LESS THEN salesAmount.length
    IF arr[i] EQUALS TO 'sulfir'
    SET arr[i] to 10
   

  END
*/

// function salesAmount(arr) {
//   var output = []
//   var hargaMineral = 0
//   for(var i = 0; i < arr.length; i++) {
//     var result = []
//     for(var j = 0; j < arr[i]; j++) {
//       if(arr[i] === 'sulfur') {
//         hargaMineral += 10
//       }
//       else if(arr[i] === 'ilver') {
//         hargaMineral += 30
//       }
//       else if(arr[i] === 'malachite') {
//         hargaMineral += 50
//       }
//       else if(arr[i] === 'gold') {
//         hargaMineral += 50
//       }
//       else if(arr[i] === 'diamond') {
//         hargaMineral += 100
//       }
//     }
//     output.push(hargaMineral)
//   }
//   return Number(output)
// }


//Hasil yang benar
function salesAmount(jenis, nilai) {
  var output = 0
  for(var i = 0; i < jenis.length; i++) {
    var result = 0
    for(var j = 0; j < jenis[i].length; j++) {
      if(jenis[i][j] === nilai) {
        if(nilai === 'sulfur') {
          result += 10
        }
        else if(nilai === 'silver') {
          result += 30
        }
        else if(nilai === 'malachite') {
          result += 50
        }
        else if(nilai === 'gold') {
          result += 50
        }
        else if(nilai === 'diamond') {
          result += 100
        }
      }

    }
    output += result
  }
  return output
}

var tambangA = [
  ['gold', 'gold', 'gold', 'diamond', 'diamond', 'sulfur'],
  ['sulfur', 'sulfur', 'sulfur', 'diamond', 'diamond', 'gold']
]
console.log(salesAmount(tambangA, 'gold')); // 200

var tambangB = [
  ['gold', 'gold', 'gold', 'diamond', 'diamond', 'sulfur'],
  ['sulfur', 'sulfur', 'sulfur', 'diamond', 'diamond', 'gold'],
  ['sulfur', 'sulfur', 'sulfur', 'diamond', 'diamond', 'gold'],
]
console.log(salesAmount(tambangB, 'diamond')); // 600

var tambangC = [
  [],
  ['sulfur', 'sulfur', 'silver', 'gold'],
  ['gold', 'diamond']
]
console.log(salesAmount(tambangC, 'sulfur')) // 20