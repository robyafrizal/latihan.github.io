/*
==================================
Array Mastery: Largest Number
==================================
Nama:________
[INSTRUKSI]
Function largestNumber akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999, dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info tese case, bukan harus divalidasi/dicek).
largestNumber akan mengembalikan angka yang terbesar dari array tersebut.
[CONTOH]
input: [4, 2, 5, 1]
output: 4
[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Dilarang menggunakan .sort!


ALGORITMA
  Inisialisasi result, output dengan 0
  Looping array dengan index = 0, index < array length, index increement++
  Assign result = num[i]
  Jika result > output, assign output = result
  Return output

PSEUDOCODE
  START
  SET function largestNumber with parameter(num)
  STORE 'result' with 0
  STORE 'output' with num[0]
  STORE i with 0
  FOR i LESS THEN num.length
    SET result EQUALS TO num[i]
    IF result GREATER THEN output THEN
      SET output EQUALS TO result
    END IF
    i++
  END FOR
  RETURN output
  END
*/
function largestNumber(num) {
  var result = 0
  var output = num[0]
  for(var i = 0; i < num.length; i++) {
    result = num[i]
    if(result > output) {
      output = result
    }
  }
  return output
}

// TEST CASES
console.log(largestNumber([5, 2, 1, 4])); // 5
console.log(largestNumber([999, 5, 0, 1, 4, 998])); // 999
console.log(largestNumber([15, 32, 11, 14])); // 32
console.log(largestNumber([5, 4, 3, 2, 1, 0])); // 5
console.log(largestNumber([123, 321, 143, 313])); // 321