/*
==================================
Array Mastery: Who's the winner?
==================================
Nama:________
[INSTRUKSI]
Ada dua tim, Gryffindor dan Slytherin yang sedang bertarung pada sebuah kompetisi futsal.
Function whosTheWinner akan menerima suatu parameter beruapa array berisikan nama
tim yang sudah mencetak gol. Apabila pada array jumlah "Gryffindor" lebih banyak
daripada "Slytherin" maka function akan mereturn "Gryffindor Juara Futsal Hogwarts 2018".
Sedangkan jika jumlah "Slytherin" lebih banyak daripada "Gryffindor" maka function
akan mereturn "Slytherin Juara Futsal Hogwarts 2018". Jika jumlah kedua tim sama,
maka function akan mereturn "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
Let's start our own wizardy, shall we?
[RULE]
- Wajib menuliskan algoritma/pseudocode. Tidak ada algoritma/pseudocode atau
  algoritma/pseudocode tidak match dengan kode maka indikasi soal tidak
  diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .map, .filter, atau .reduce!
*/

/*
PSEUDOCODE

  START
  SET function whosTheWinner with parameter(array)
  STORE 'nilaiGryffindor' with 0
  STORE 'nilaiSlytherin' with 0
  STORE i with 0
  FOR i LESS THEN array.length
    IF array[i] EQUALS TO 'Gryffindor' THEN
      SET 'nilaiGryffindor' + 1
    ELSE
      SET 'nilaySlytherin' + 1
      END IF
    i++
  END FOR
  STORE 'result' with 'any value 
  IF 'nilaiGryffindor' GREATER THEN 'nilaiSlytherin' THEN
    SET result with 'Gryffindor Juara Futsal Hogwarts 2019'
  ELSE IF  'nilaiGryffindor' EQUALS TO 'nilaiSlytherian' THEN
    SET result with 'Draw, pertandingan dilanjutkan dengan penalty kick'
  ELSE
    SET result with 'Slytherian Juara Futsal Hogwarts 2019'
  END IF
  RETURN result
  END
*/
function whosTheWinner(array) {
  var nilaiGryffindor = 0
  var nilaiSlytherin = 0
  for(var i = 0; i < array.length; i++) {
    if(array[i] === 'Gryffindor') {
      nilaiGryffindor += 1
    }
    else {
      nilaiSlytherin += 1
    }
  }
  var result = ''
  if(nilaiGryffindor > nilaiSlytherin) {
    result = 'Gryffindor Juara Futsal Hogwarts 2019'
  }
  else if (nilaiGryffindor === nilaiSlytherin) {
    result = 'Draw, pertandingan dilanjutkan dengan penalty kick'
  }
  else {
    result = 'Slytherian Juara Futsal Hogwarts 2019'
  }
  return result
}


// TEST CASES
console.log(whosTheWinner(["Gryffindor", "Slytherin", "Slytherin"])); // "Slytherin Juara Futsal Hogwarts 2018"
console.log(whosTheWinner(["Gryffindor", "Gryffindor", "Slytherin", "Slytherin", "Gryffindor"])); // "Gryffindor Juara Futsal Hogwarts 2018"
console.log(whosTheWinner(["Gryffindor", "Slytherin"])); // "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
console.log(whosTheWinner([])); // "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
console.log(whosTheWinner(["Slytherin"])); // "Slytherin Juara Futsal Hogwarts 2018"