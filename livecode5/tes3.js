/*
============
rapotAsrama
============
rapotAsrama adalah sebuah fungsi yang menerima parameter berupa array of object.
Function akan menerima sebuah parameter array of object dengan format:

  [
    { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
    { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
    ...
  ]

Data di atas merupakan campuran seluruh nilai murid dari asrama manapun.

Function akan memproses array of object tersebut untuk membuat sebuah rapot dalam bentuk array of object dengan format:

  [
    { asrama: <nama asrama>, lulus: <array berisi nama murid yg lulus>, gagal: <array berisi nama murid yg gagal> },
    { asrama: <nama asrama>, lulus: <array berisi nama murid yg lulus>, gagal: <array berisi nama murid yg gagal> },
    ...
  ]

Data yang diharapkan merupakan akumulasi murid yang lulus dan tidak dari setiap asrama.
Standard kelulusan adalah minimum 70.

*/

function rapotAsrama(students) {
  // Your code here
  var output = []
  for(var i = 0; i < students.length; i++) {
    var tampung = true
    for(var j = 0; j < output.length; j++) {
      if(output[j] === students[i].asrama) {
        tampung = false
      }
    }
    if(tampung) {
      output.push(students[i].asrama)
    }
  }

  var result = []
  for(var j = 0; j < output.length; j++) {
    var obj = {}
      obj.asrama = output[j]
      obj.lulus = []
      obj.gagal = []
      for(var k = 0; k < students.length; k++) {
        if(output[j] === students[k].asrama) {
          if(students[k].nilai >= 70) {
            obj.lulus.push(students[k].nama)
          } else {
            obj.gagal.push(students[k].nama)
          }
        }
      }
      result.push(obj)
  }
  return result
}



//Cara lain tapi salah belum sesuai hasilnya :
// function rapotAsrama(students) {
//   for(var i = 0; i <students.length; i++) {
//     var result = {}

//     for(var j = 0; j < students.length; j++) {
//       if(students[i].asrama === students[j].asrama) {
//         result.asrama = students[j].asrama
        
//         for(var k = 0; k < students.length; k++) {
//           if(students[k].nilai >= 70) {
//             if(result.lulus === undefined) {
//               result.lulus = []
//             }
//             result.lulus = [students[k].nama]
//           }
          
//           else if(students[k].nilai < 70) {
//             if(result.gagal === undefined) {
//               result.gagal = []
//             }
//             result.gagal = [students[k].nama]
//           }
          
//         }
//       }
//     }

//   }
//   return result
// }


var data = [
  { nama: 'Harry Potter', nilai: 80, asrama: 'Griffindor' },
  { nama: 'Cho Chang', nilai: 60, asrama: 'Ravenclaw' },
  { nama: 'Pansy Parkinson', nilai: 70, asrama: 'Slyterin' },
  { nama: 'Dean Thomas', nilai: 50, asrama: 'Griffindor' },
  { nama: 'Ginny Weasley', nilai: 10, asrama: 'Griffindor' },
  { nama: 'Gregory Goyle', nilai: 10, asrama: 'Slyterin' },
  { nama: 'Penelope Clearwater', nilai: 10, asrama: 'Ravenclaw' },
  { nama: 'Tom Marvolo Riddle', nilai: 90, asrama: 'Slyterin' },
];

console.log(rapotAsrama(data));

/* 
[
  {
    asrama: 'Griffindor',
    gagal: ['Dean Thomas', 'Ginny Weasley'],
    lulus: ['Harry Potter']
  },
  {
    asrama: 'Ravenclaw',
    gagal: ['Cho Chang', 'Penelope Clearwater'],
    lulus: []
  },
  {
    asrama: 'Slyterin',
    gagal: ['Gregory Goyle'],
    lulus: ['Pansy Parkinson', 'Tom Marvolo Riddle']
  }
]
*/