/*
PROBLEM
=======
Bilangan prima adalah sebuah bilangan dimana hanya bisa habis dibagi oleh angka 1 dan angka itu sendiri.
Contoh:
7 adalah bilangan prima, karena hanya habis dibagi angka 1 dan 11.
22 bukan bilangan prima, karena habis dibagi 1, 2, 11, dan 22.
BUATLAH sebuah pseudocode untuk membuat program bilangan prima!
note: pastikan tidak menggunakan sintaks javascript, tapi fokus ke logika
REMINDER ABOUT PSEUDOCODE
=========================
Contoh Pseudocode yang Kurang Tepat (tidak ada hubungan dengan soal):
var num
for i = 0 , i < 8, i++
  if i = 5
    num++
Contoh Pseudocode yang Benar (tidak ada hubungan dengan soal):
STORE num with any value
WHILE i < 8
  IF i equals to 5
    ADD num by 1
=============================================
//jawaban pesudocode bilangan prima
FUNCTION bilanganPrima 
parameter : number (type of data is integer)
START FUNCTION
  STORE 'result' with type data array
  STORE 'i' with 2
  FOR i LESS THEN number
    IF i % 2 NOT EQULAS TO 0 && i % 3 NOT EQULAS TO 0 && i % 5 NOT EQUALS TO 0
      result.push(i)
    END IF
  END FOR
  RETURN result
END FUNCTION
*/

function isPrime(num) {
  var output = true
  for(var i = 2; i < num; i++) {
    if(num % i == 0) {
      output =  false
    }
  }
  return output
}

console.log(isPrime(11))
console.log(isPrime(15))