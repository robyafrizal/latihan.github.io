/**
Highest Top Speed
=================
Implementasikan function `highestTopSpeed` untuk mencari
top speed yang paling tinggi dari data yang diberikan.
Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data string.
Di dalam string `data` terdapat nama orang dan top speed orang
tersebut. Tiap orang akan dipisah dengan tanda koma ','
Tugas kamu adalah untuk mencari top speed tertinggi dari
string yang telah diberikan
# Contoh I/O
Contoh input dan output bisa kamu lihat di test case
# Kondisi khusus
- Jika string kosong, maka tampilkan 'No data'
# Constraints
- DILARANG menggunakan built-in function .map, .filter, .reduce
- DILARANG menggunakan built-in object Math
- DILARANG menggunakan built-in function .sort
- DILARANG menggunakan built-in function .indexOf
*/
function highestTopSpeed(data) {
  if(data.length === 0) {
    return 'No data'
  }
  var outputSpeed = []
  var speedCount = 1
  for(var i = 0; i < data.length; i++) {
    if(data[i] == ':') {
      outputSpeed.push(speedCount = {
        name: '',
        speed: ''
      })
      speedCount++
    }
  }

  var speedAccess = 0
  var propertyAccess = 'name'

  for(var j = 0; j < data.length; j++) {
    if(data[j] !== ':' && data[j] !== ',') {
      outputSpeed[speedAccess][propertyAccess] += data[j]
    }
    else if(data[j] === ':') {
      propertyAccess = 'speed'
    }
    else if(data[j] === ',') {
      speedAccess++
      propertyAccess = 'name'
    }
  }

  var resultFastest = 0
  for(var i = 0; i < outputSpeed.length; i++) {
    var resultSpeed = parseInt(outputSpeed[i].speed)
    if(resultFastest < resultSpeed) {
      resultFastest = resultSpeed
    }
  }

  return resultFastest
}

console.log(highestTopSpeed('Nakazato:140 km/h,Ryosuke:180 km/h,Iketani:110 km/h'));
// 180

console.log(highestTopSpeed('Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h'));
// 200

console.log(highestTopSpeed('Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h'));
// 175

console.log(highestTopSpeed(''));
// No data