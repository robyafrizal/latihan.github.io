/*
******
Cari Student
******


Function studentFinder menerima input berupa string berisi nama-nama student sebuah batch, dipisahkan oleh " " atau ",".
Function ini mengeluarkan output berupa nama student dengan jumlah huruf terpendek.
Apabila ada 2 nama student yang terpendek, maka function akan mengeluarkan nama yang berada di posisi sebelah kiri terlebih dahulu!


[RULES]
  - Dilarang menggunakan built-in function .split

*/

function studentFinder(students) {
  // your code here
  var output = []
  for(var i = 0; i < students.length; i++) {
    var result = ''
    for(var j = 0; j < students.length; j++) {
      result += students[j]
    }
  }
  if(result[i] < result[i+1]) {
    var huruf = result[i]
    result[i] = result[i+1] 
    result[i+1] = huruf
  }
  output.push(huruf)
  return output
}



console.log(studentFinder('Hanif Ranev Tio Tirta Igor Yusril Tia Titania')); // Tio
console.log(studentFinder('Yogi Hengky Trina An Hamzah')); // An
console.log(studentFinder('Huday,Kay,Trisna,Kinan,Hazman')); // Kay