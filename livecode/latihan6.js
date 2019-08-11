/*
    Diberikan sebuah function numberArrayOperation dengan sebuah parameter array
    bertipe number, dimana output dari function ini adalah array yang telah mengalami
    proses perkalian terlebih dahulu dan kemudian menjumlahkan semua value didalamnya.
    Ketentuan perkalian sebagai berikut:
    - jika angka merupakan bilangan genap maka kalikan bilangan tersebut dengan 3
    - jika angka merupakan bilangan ganjil maka kalikan angka tersebut dengan 4
    - jika angka merupakan bilangan kelipatan 4 maka kalikan angka tersebut dengan 5
    Kemudian jumlahkan semua angka yang telah mengalami proses perkalian!
    Contoh:
    input : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]
    
    proses :
      * angka 1 merupakan bilangan ganjil, maka 1x4 = 4;
      * angka 2 merupakan bilangan genap, maka 2x3 = 6;
      * angka 3 merupakan bilangan ganjil, maka 3x4 = 12;
      * angka 4 merupakan bilangan genap TAPI merupakan bilangan kelipatan 4, maka 4x5 = 20;
      * angka 5 merupakan bilangan ganjil, maka 5x4 = 20;
      * ... dst
      * angka 12 merupakan bilangan genap TAPI merukapan bilangan kelipatan 4, maka 12x5 = 60;
      * angka 13 merupakan bilangan ganjil, maka 13x4 = 52;
      Kemudian jumlahkan angka-angka yang telah mengalami proses perkalian:
      4 + 6 + 12 + 20 + 20 + ... + 60 + 52 = 370
    output : 370
    RULES:
    - DILARANG menggunakan built in function .map, .filter dan .reduce!!!
*/
/*
PSEUDOCODE
  START
  SET function numberArrayOperation with parameter(arr)
  STORE 'result' with empty array
  STORE 'output' with 0
  STORE i with 0
  FOR i LESS THEN arr.length
    IF arr[i] mod 4 EQUALS TO 0 THEN
      PUSH arr[i] * 5 TO result
    ELSE IF arr[i] mod 2 === 1 THEN
      PUSH arr[i] * 4 TO result
    ELSE
      PUSH arr[i] * 3 TO result
    END IF
    i++
    FOR i LESS THEN result.length
      SET output EQUALS TO output + result[i]
      i++
    END FOR
  END FOR
  RETURN output
  END

*/

function numberArrayOperation(arr) {
  var result = []
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 4 === 0) {
      result.push(arr[i] * 5)
    }
    else if(arr[i] % 2 === 1) {
      result.push(arr[i] * 4)
    }
    else{
      result.push(arr[i] * 3)
    }
  }
  var output = 0
  for(var i = 0; i < result.length; i++) {
    output += result[i]
  }
  return output
}


//TEST CASE
console.log(numberArrayOperation([ 22, 4, 5, 9, 44, 8, 12, 23 ])); // 554
console.log(numberArrayOperation([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ])); // 370