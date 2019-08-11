/*
======================
Where is the space?
======================
Kamu telah dilempar ke dimensi lain!
Di dunia ini, semua kalimat tidak memiliki diantara setiap katanya!
Buatlah sebuah function yang bisa membantumu mentranslate kalimat yang memiliki spasi
menjadi kalimat yang tidak ber-spasi!
Contoh ada di test case
RULES:
--------
DILARANG menggunakan built in function .split dan .join
*/
/*
PSEUDOCODE
  START
  SET function translate with parameter(sentence)
  STORE 'result' with ''
  STORE i with 0
  FOR i LESS THEN sentence.length
    IF sentenc[i] NOT EQUALS TO ' ' THEN
      SET result EQUALS TO result + sentence[i]
    ELSE
      SET result EQUALS TO result + ''  
    END IF    
    i++
  END FOR
  RETURN result
  END
*/
function translate(sentence) {
  var result = ''
  for (var i = 0; i < sentence.length; i++) {
    if(sentence[i] !== ' ') {
      result += sentence[i]
    }
    else {
      result += ''
    }
  }
  return result
}

//TEST CASES
console.log(translate('aku suka banget dengan kamu'))
console.log(translate('aku lapar')) // akulapar
console.log(translate('tolong bantu aku')) // tolongbantuaku
console.log(translate('selamatkan aku dari serangan monster')) // selamatkanakudariseranganmonster
console.log(translate('aku butuh istirahat')) // akubutuhistirahat