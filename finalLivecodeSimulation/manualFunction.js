//menggabungkan array menjadi string
function join(arr,hub) {
  var word = ''
  for (var i=0; i<arr.length; i++) {
      word += arr[i] 
      if (i<arr.length-1) word += hub
  }
  return word
}

console.log(join(['d','e','v','i','t','a',' ','s','a','r','i'],'*'))
console.log(['d','e','v','i','t','a',' ','s','a','r','i'].join('*'))



// menghapus elemen array paling akhir
function pop(arr) {
  var arr1 = []
  for (var i=0; i<arr.length-1; i++) {
      arr1[i] = arr[i]
  }
  return arr1
}

console.log(pop(['harry','hermione','ron']))





//menambah elemen array di indeks paling akhir
function push(arr, x) {
  arr[arr.length] = x
  return arr
}

arr1 = ['harry','hermione']
console.log(push(arr1,'ron'))




//menghapus elemen array paling depan
function shift(arr) {
  var arr1 = []
  for (var i=1; i<arr.length; i++) {
      arr1[i-1] = arr[i]
  }
  return arr1
}

var arr = ['harry','hermione','ron']

console.log(shift(arr))






//slice mengambil elemen array dari indek ke x sampai y-1
//jika y kosong, maka elemen array akan diambil sampai akhir
function slice(arr,x,y) {
  var arr1 = []
  if (!y) {
      for (var i=x; i<arr.length; i++) {
              arr1[i-x] = arr[i]
      } 

  } else {
      for (var i=x; i<y; i++) {
          arr1[i-x] = arr[i]
      }
  }
  return arr1
}

console.log(slice([0,1,2,3,4,5],1,4))




//mengurutkan mulai dari terkecil atau terbesar
function sort(arr) {
  for (var i=0; i<arr.length; i++) {
      for (var j=i+1; j<arr.length; j++) {
          if (arr[j] < arr[i]) {      //untuk mengurutkan dari kecil ke besar, jika ingin mengurutkan dari besar ke kecil maka ganti < menjadi >
          var tampung = arr[i]
          arr[i] = arr[j]
          arr[j] = tampung
          }
      }
  }
  return arr
}

arr = [ 'b', '1']
console.log(sort(arr))






// split berfungsi untuk memisahkan string berdasarkan tanda tertentu menjadi elemen-elemen array
// split yang saya buat memiliki kelemahan yaitu tidak bisa memisahkan string jika tanda nya lebih dari satu karakter

function split(string, tanda) {
  var arr = []
  var kata = ''
  for (var i=0; i<string.length; i++) {
      if (string[i] === tanda) { //jika tanda lebih dari satu karakter, tambahkan string[i] dengan string sebelumnya atau setelahnya
          arr.push(kata)
          kata = ''
      } else {
          kata += string[i]
      }
      if (i === string.length-1) {
          arr.push(kata)
      }
  }
  return arr
}

console.log(split('you&me','&')) //menggunakan fungsi manual
console.log('you&me'.split('&')) //menggunakan built in function