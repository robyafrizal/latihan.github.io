/*
Implementasikan function formatDuration() yang akan menerima satu parameter yaitu jumlah detik
dan akan mengembalikan string berupa detik yang sudah di-format supaya bisa dibaca oleh manusia
Function ini hanya menerima angka yang tidak negatif (0..MAX INTEGER). Jika angka adalah 0, maka
function akan mengembalikan string "Sekarang". Jika tidak, maka akan mengembalikan durasi yang
sudah di-format (kombinasi JAM, MENIT DAN DETIK).
Contoh:
  formatDuration(62)    // "1 menit 2 detik"
  formatDuration(3665)  //  "1 jam 1 menit 5 detik"
  formatDuration(60) // "1 menit 0 detik"
NOTE: Tidak masalah jika 0 detik ditampilkan.
*/

function recursiveFormatDuration(num) {
  var output = ''
  var input = num % 3600
  var jam = Math.floor(num / 3600)
  var menit = Math.floor(input / 60)
  var detik = Math.floor(input % 60)

  if(jam != 0) {
    output = jam + ' jam ' + menit + ' menit ' + detik + ' detik'
  }
  if(jam == 0) {
    output = menit + ' menit ' + detik + ' detik'
  }
  if(menit == 0) {
    output = detik + ' detik'
  }
  return output
}

console.log(recursiveFormatDuration(3660)); // 1 jam 1 menit 0 detik
console.log(recursiveFormatDuration(62)); // 1 menit 2 detik
console.log(recursiveFormatDuration(7324)); // 2 jam 2 menit 4 detik
console.log(recursiveFormatDuration(0)); // 0 detik