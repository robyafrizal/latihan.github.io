/*
Minimum Distance Between Greatest Element
Diberikan sebuah function minDistanceBetweenGreatest yang menerima sebuah parameter array of number. Dimana array tersebut akan memiliki nilai terbesar yang kemunculannya bisa lebih dari satu kali. Tentukan minimum jarak antara nilai terbesar satu ke nilai terbesar lainnya.
Contoh 1:
Input : [ 3, 5, 2, 3, 5, 3, 5 ]
Output : 2
Karena nilai terbesar dari array tersebut adalah 5 dan indeksnya adalah 1, 4 dan 6
- indeks 1 ke indeks 4, jaraknya adalah 3
- indeks 4 ke indeks 6, jaraknya adalah 2
Jadi minimum jarak adalah 2
Contoh 2:
Input : [ 1, 1, 1, 1, 1, 1 ]
Output : 1
Karena nilai terbesar dari array tersebut adalah 1 dan indeksnya adalah 0, 1, 2, 3, 4 dan 5
- indeks 0 ke indeks 1, jaraknya adalah 1
- indeks 1 ke indeks 2, jaraknya adalah 1
- indeks 2 ke indeks 3, jaraknya adalah 1
- indeks 3 ke indeks 4, jaraknya adalah 1
- indeks 4 ke indeks 5, jaraknya adalah 1
Jadi minimum jarak adalah 1
RULE:
 - Dilarang menggunakan .map, .filter dan .reduce
*/

/*
Minimum Distance Between Greatest Element
Diberikan sebuah function minDistanceBetweenGreatest yang menerima sebuah parameter array of number. Dimana array tersebut akan memiliki nilai terbesar yang kemunculannya bisa lebih dari satu kali. Tentukan minimum jarak antara nilai terbesar satu ke nilai terbesar lainnya.
Contoh 1:
Input : [ 3, 5, 2, 3, 5, 3, 5 ]
Output : 2
Karena nilai terbesar dari array tersebut adalah 5 dan indeksnya adalah 1, 4 dan 6
- indeks 1 ke indeks 4, jaraknya adalah 3
- indeks 4 ke indeks 6, jaraknya adalah 2
Jadi minimum jarak adalah 2
Contoh 2:
Input : [ 1, 1, 1, 1, 1, 1 ]
Output : 1
Karena nilai terbesar dari array tersebut adalah 1 dan indeksnya adalah 0, 1, 2, 3, 4 dan 5
- indeks 0 ke indeks 1, jaraknya adalah 1
- indeks 1 ke indeks 2, jaraknya adalah 1
- indeks 2 ke indeks 3, jaraknya adalah 1
- indeks 3 ke indeks 4, jaraknya adalah 1
- indeks 4 ke indeks 5, jaraknya adalah 1
Jadi minimum jarak adalah 1
RULE:
 - Dilarang menggunakan .map, .filter dan .reduce
*/

function minDistanceBetweenGreatest(arr) {
  var tampung = []
  for(var i = 0; i < arr.length; i++) {
    tampung.push(arr[i])
  }

  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j+1]) {
        var result = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = result
      }
    }
  }

  var output = []
  for(var k in tampung) {
    if(arr[0] === tampung[k]) {
      output.push(Number(k))
    }
  }

  if(output.length == 1) {
    return 0
  }
  else if (output.length ===tampung.length) {
    return 1
  }

  var hasil = []
  for(var i = 1; i < output.length; i++) {
    hasil.push(arr[i] - arr[i-1])
  }
  return hasil[hasil.length - 1]
}
console.log(minDistanceBetweenGreatest([ 3, 5, 2, 3, 5, 3, 5 ])); //2
console.log(minDistanceBetweenGreatest([ 1, 1, 1, 1, 1, 1 ])); //1
console.log(minDistanceBetweenGreatest([ 7, 8, 5, 2, 1, 1 ])); //0