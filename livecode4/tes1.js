/*
================
Kalkulator Nilai
================

[INSTRUCTIONS]
Kamu diminta menghitung Nilai Ujian Nasional dari sebuah laporan nilai murid.
Buatlah function kalkulatorNilai yang menerima satu parameter berupa string.
function tersebut akan menghitung total nilai dan memutuskan apakah murid tersebut lulus/tidak.
Adapun ketentuannya:
  - A bernilai 4
  - B bernilai 3
  - C bernilai 2
  - D bernilai 1
  - E bernilai 0
  - Murid dinyatakan TIDAK LULUS jika ada mata pelajaran memperoleh nilai E, selain itu LULUS.

[RULES]
  - WAJIB menggunakan ALGORITMA atau PSEUDOCODE.
*/


/* Algorithm or pseudocode here
    START
    SET function kalkulatorNilai with parameter(nilai)
    STORE 'result' with 0
    STORE 'lulus' with true
    STORE i with 0
    FOR i LESS THEN nilai.length
      IF nilai[i] EQUALS TO 'A'
        SET result EQUALS TO 4
      ELSE IF nilai[i] EQUALS TO 'B'
        SET result EQUALS TO 3
      ELSE IF nilai[i] EQUALS TO 'C'
        SET result EQUALS TO 2
      ELSE IF nilai[i] EQUALS TO 'D'
        SET result EQUALS TO 1
      ELSE IF nilai[i] EQUALS TO 'E'
        SET result EQUALS TO 0
        SET lulus with false
      END IF
    END FOR
    IF lulus === false THEN
      RETURN 'Total NIlai : + result  + '. Maaf kamu TIDAK LULUS'
    ELSE
      RETURN  'Total Nilai : ' + result + '. Selamat kamu LULUS'
    END FOR
    END
*/

function kalkulatorNilai(nilai) {
  var result = 0
  var lulus = true
  for(var i = 0; i < nilai.length; i++) {
    if(nilai[i] === 'A') {
      result += 4
    }
    else if(nilai[i] === 'B') {
      result += 3
    }
    else if(nilai[i] === 'C') {
      result += 2
    }
    else if(nilai[i] === 'D') {
      result += 1
    }
    else if(nilai[i] === 'E') {
      result += 0
      lulus = false  
    }
  }
  if(lulus === false) {
    return 'Total Nilai : ' + result + '. Maaf kamu TIDAK LULUS'
  }
  else {
    return 'Total Nilai : ' + result + '. Selamat kamu LULUS' 
  }
}

console.log(kalkulatorNilai("AABCADDA")); // Total Nilai: 23. Selamat kamu LULUS!
console.log(kalkulatorNilai("AAAAEA")); // Total Nilai: 20. Maaf kamu TIDAK LULUS.
console.log(kalkulatorNilai("ABCDD")); // Total Nilai: 11. Selamat kamu LULUS!