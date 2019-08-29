/*
===============
NON PALINDROME
===============
Problem
--------
nonPalindrome adalah sebuah function yang akan menerima satu parameter bertipe string.
Function ini akan mengembalikan array satu dimensi yang berisikan kumpulan kata yang tidak palindrome.
Contoh 1:
input: 'Wow mereka janji bertemu di makam'
output: ['mereka', 'janji', 'bertemu', 'di']
Contoh 2:
input: 'Katak naik honda civic pada malam hari di mimpi Dimitri'
output: ['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']
RULES:
- Tidak boleh menggunakan .reverse(), .join()
*/

function nonPalindrome(str) {
  var output = []
  var tampung = ''
  for(var i = 0; i < str.length; i++) {
    if(str[i] !== ' ') {
      tampung += str[i]
    }
    else{
      output.push(tampung)
      tampung = ''
    }
  }
  output.push(tampung)

  var result = []
  for(var j = 0; j < output.length; j++) {
    var palindrome = output[j].toLowerCase()

    var tampung1 = ''
    for(var k = palindrome.length-1; k >= 0; k--) {
      tampung1 += palindrome[k]
    }

    if(palindrome !== tampung1) {
      result.push(palindrome)
    }
  }
return result
}

console.log(nonPalindrome('Wow mereka janji bertemu di makam'));
//['mereka', 'janji', 'bertemu', 'di']
  
console.log(nonPalindrome('Katak naik honda civic pada malam hari di mimpi Dimitri'));
//['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']
  
console.log(nonPalindrome('kasurrusak kalo dipisah menjadi kasur rusak'));
//['kalo', 'dipisah', 'menjadi', 'kasur', 'rusak']
  