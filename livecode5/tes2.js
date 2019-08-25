/*
============
dataSiswa
============

[INSTRUCTIONS]
dataSiswa adalah sebuah fungsi yang menerima parameter berupa string.
String tersebut memiliki format `studentID-nama-nilai`.

Function akan membaca data siswa dari input dan mengubahnya menjadi array of objects.


[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan hasil tes hari ini"
2. Diasumsikan tidak ada siswa yang memperoleh nilai yang sama

[RULES]
2. Dilarang menggunakan built-in split

*/


//Salah Belum Dapat HaAsilnya :
// function dataSiswa(scoreRecord) {
//   // Your code here.
//   if(scoreRecord.length === '') {
//     scoreRecord = 'tidak ada catatan hasil tes hari ini'
//   }
//   else {

//   var output = []
//   for(var i = 0; i < scoreRecord.length; i++) {
//     for(var j = 0; j < scoreRecord[i].length; j++) {
//       var result = {
//         id : scoreRecord[i][j][0],
//         name : scoreRecord[i][j][1],
//         score : scoreRecord[i][j][2]
//       }
//     }
//     output.push(result)
//   }
//   }
//   return output
// }

//Cara lain :
function datasiswa(data) {
  if(data.length === 0) {
    return 'tidak ada catatan hasil tes hari ini'
  }

  var output = []
  var result = ''
  for(var i = 0; i < data.length; i++) {
    if(data[i] !== ',') {
      result += data[i]
    }
    else {
      output.push(result)
      result = ''
    }
  }
  output.push(result)

  var tampung = []
  for(var i = 0; i < output.length; i++)
    

}



console.log(dataSiswa("001-Radith-88,002-Putra-100,003-Levy-83"))
/* 
[
  { id: '001', name: 'Radith', score: 88 },
  { id: '002', name: 'Putra', score: 100 },
  { id: '003', name: 'Levy', score: 83 }
]
 */

console.log(dataSiswa("001-Radith-5,002-Putra-92,003-Levy-100"))
/* 
[
  { id: '001', name: 'Radith', score: 5 },
  { id: '002', name: 'Putra', score: 92 },
  { id: '003', name: 'Levy', score: 100 }
]
 */

console.log(dataSiswa("001-Radith-88,002-Putra-70,003-Levy-65,004-Radinka-88,005-Bagas-90"))
/* 
[
  { id: '001', name: 'Radith', score: 88 },
  { id: '002', name: 'Putra', score: 70 },
  { id: '003', name: 'Levy', score: 65 },
  { id: '004', name: 'Radinka', score: 88 },
  { id: '005', name: 'Bagas', score: 90 }
]
 */

console.log(dataSiswa("")) // tidak ada catatan hasil tes hari ini