/*
EVEN PAIRS SUM

Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan
- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap
- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62
  Karena ada pasangan genap (30, 32) maka akan dijumlahkan
NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir
RULES:
 - WAJIB MENGGUNAKAN algoritma/pseudocode, tidak menyertakan algoritma/pseudocode maka codingan dianggap tidak valid


PSEUDOCODE
  START
  Set function evenPairSum with parameter(str)
  STORE 'totalSum' with 0
  STORE 'result' with empty array
  STORE 'output' with empty array
  STORE i with 0
  FOR i LESS THEN str.length
    PUSH str[i] AND str[i+1] TO result
    i += 2
  IF str.length MOD 2 NOT EQUALS TO 0
    POP result
    PUSH str[str.length - 1] + str[0]
  
  STORE j with 0
  FOR j LESS THEN result.length
    PUSH result[j] TO output
    j++
  
  STORE k with 0
  FOR k LESS THEN output.length
    PUSH Number(output[k]) TO totalSum
    i += 2

  RETURN totalSum
  END
 */

function evenPairsSum(str) {
  var totalSum = 0
  var result = []
  var output = []

  for(var i = 0; i < str.length; i+=2) {
    result.push(str[i] + str[i+1])
  }

  if(str.length % 2 !== 0) {
    result.pop()
    result.push(str[str.length-1 ] + str[0])
  }

  for(var j = 0; j < result.length; j++)   {
    if(result[j] % 2 === 0) {
      output.push(result[j])
    }
  }

  for(var k = 0; k < output.length; k++) {
    totalSum += Number(output[k])
  }

  return totalSum
}

console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134