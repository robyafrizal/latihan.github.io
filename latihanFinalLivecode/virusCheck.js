/*
Virus Check
-----------
Implementasikan function `virusCheck` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `viruses` yang dicari.
Contoh 1:
input:
  str: 'qlD4MZax0raQqew'
  viruses: 'x|0|q' ==> berarti mencari x, 0 dan q
output: 4 viruses detected
Contoh 2:
input:
  str: 'HH0NBP1zRa'
  viruses: 'h|r' ==> berarti mencari h dan r
outuput: 3 viruses detected
RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX
*/

function virusCheck(str, virus) {
  if(!virus) {
    return 'No virus detected'
  }
    
  var output = 0
  for(var i = 0; i < virus.length; i++) {
    for(var j = 0; j < str.length; j++) {
      if(virus[i] === '|') {
        output //sama artinya dengan output += 0
      }
      else if(virus[i] === str[j]) {
        output++
      }
      else if(virus[i] === str[j].toLowerCase()) {
        output++
      }
      else if(virus[i] === str[j].toUpperCase()) {
        output++
      }
    }
  }
  if(!output) {
    return 'No virus detected'
  }
  return output + ' virus detected'
}

console.log(virusCheck('qlD4MZax0raQqew', 'x|0|q')); // 5 viruses detected
console.log(virusCheck('HH0NBP1zRa', 'h|r')); // 3 viruses detected
console.log(virusCheck('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6 viruses detected
console.log(virusCheck('mjBgPlzks', 'm')); // 1 virus detected
console.log(virusCheck('AIn4Ks05bBaa', 'x')); // No virus detected
console.log(virusCheck('RsMFjBUjvIaP')); // No virus detected
console.log(virusCheck('')); // No virus detected