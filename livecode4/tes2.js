/* 
Sebuah organisasi rahasia mengadakan pertemuan setiap bulan secara rutin.
Pada akhir tahun, bos besar dari organisasi ini ingin melakukan evaluasi terhadap anggota-anggotanya untuk memastikan loyalitas mereka.

Dalam melakukan evaluasi sang bos besar melihat dari kehadiran setiap anggotanya.
Anggota organisasi ini hanya akan aman jika tidak absen lebih dari 3 kali dan tidak pernah absen berturut-turut dalam 2 pertemuan atau lebih.

Buatlah sebuah function untuk menentukan nasib dari anggota organisasi tersebut

contoh 1:
evaluateMember('Boris',  [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1])
PROCESS:
  Total kehadiran: 10
  Total absen: 2 
  Karena tidak absen lebih dari 3 kali dan tidak berturut-turut dalam 2 pertemuan maka Boris aman
OUTPUT:
  'Keanggotaan Boris diperpanjang.'

contoh 2:
evaluateMember('Ivan',   [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1])
PROCESS:
  Total kehadiran: 10
  Total absen: 2 
  Karena absen berturut-turut dalam 2 pertemuan maka Ivan tidak aman
OUTPUT:
  'Ivan dikeluarkan.'

Contoh 3:
evaluateMember('Hamid',  [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1])
PROCESS:
  Total kehadiran: 8
  Total absen: 4
  Karena absen lebih dari 3 kali maka Hamid tidak aman
OUTPUT:
  'Hamid dikeluarkan.'
*/


// write the function here
function evaluateMember(str,arr) {
  var hadir = 0
  var absen = 0
  for(var i = 0; i < arr.length; i++) {
    hadir += arr[i]
    absen = arr.length - hadir

    if(arr[i] + arr[i+1] === 0) {
      return str + ' dikeluarkan'
    }
  }
  if(absen > 3) {
    return str + ' dikeluarkan'
  }
  else {
    return 'Keanggotaan ' + str + ' diperpanjang' 
  }
  //return 'Total kehadiran ' + str + ' : ' + hadir + '--' + absen
}

console.log(evaluateMember('Boris',  [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1])) // 'Keanggotaan Boris diperpanjang.'
console.log(evaluateMember('Ivan',   [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1])) // 'Ivan dikeluarkan.'
console.log(evaluateMember('Hamid',  [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1])) // 'Hamid dikeluarkan.'
console.log(evaluateMember('Kim',    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])) // 'Keanggotaan Kim diperpanjang.'
console.log(evaluateMember('Sutono', [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1])) // 'Keanggotaan Sutono diperpanjang.'