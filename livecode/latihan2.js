/*
==================================
Array Mastery: Pair Up
==================================
Nama:________
[INSTRUKSI]
Setiap student di HACKTIV8 ditugaskan untuk membuat tim project dengan komposisi tim dua orang.
Kita membutuhkan sebuah program untuk membuat tim-tim tersebut.
Function pairUp akan menerima satu parameter berupa array yang berisi string nama student.
Function ini akan mengelompokkan setiap dua nama menjadi satu kelompok, dan apabila tersisa satu student, student terakhir akan bersama instruktur.
Hasil pengelompokkan adalah sebuah array yang berisi string berupa nama dua orang student sebagai satu tim.
Formatnya adalah <Nama Student 1> dan <Nama Student 2>.
[CONTOH]
input: ['Budi', 'Badu', 'Indra', 'Indri']
output: ['Budi dan Badu', 'Indra dan Indri']
input: ['Budi', 'Badu', 'Indra', 'Indri', 'James']
output: ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']
input: []
output: []
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .map, .filter, atau .reduce!
*/

/*
PSEUDOCODE
  START
  SET function pairUp with parameter(str)
  STORE 'result' with empty array
  STORE 'students' with any value
  STORE i with 0
  FOR i LESS THEN str.length
    IF str.length[i+1] NOT EQUALS undefined THEN
      SET students with 'str[i] + ' dan ' + str[i+1]
    ELSE
      SET students with 'str[i] + ' dan Instruktur'
    END IF
    i += 2
    PUSH students TO result
  END FOR
  return result
  END
*/

function pairUp(str) {
  var result = []
  var students = ""
  for(i = 0; i < str.length; i+=2) {
    if(str[i+1] !== undefined) {
      students = str[i] + ' dan ' + str[i+1]
    } else {
      students = str[i] + ' dan Instruktur'
    }
    result.push(students)
  }
  return result
}

// TEST CASES
console.log(pairUp(['Budi', 'Badu', 'Roby']));
console.log(pairUp(['Budi', 'Dian'])); 
console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri'])); // ['Budi dan Badu', 'Indra dan Indri']
console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri', 'James'])); // ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']
console.log(pairUp([])); // []