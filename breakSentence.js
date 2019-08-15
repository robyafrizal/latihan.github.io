/*
================
Break Sentence
================
Name :_____________
[INSTRUCTIONS]
breakSentence adalah sebuah function yang menerima satu parameter berupa string kalimat.
function akan mereturn sebuah array yang berisikan setiap kata di kalimat tesebut.
*/
/*
PSEUDOCODE
  START
  SET function breakSentence with parameter(sentence)
  STORE 'output' with empty array
  STORE 'result' with any value
  STORE i with 0
  FOR i LESS THEN sentence.length
    IF sentence[i] NOT EQUALS TO ' ' THEN
      SET result EQUALS TO result + sentence[i]
    END IF
    IF sentence[i] EQUALS TO ' ' OR i EQUALS TO sentence.length - 1 THEN
      PUSH result TO output
      SET result EQUALS TO ''
    END IF
    i++
  END FOR
  RETURN output
  END

*/
function breakSentence(sentence) {
  var output = []
  var result = ""
  for(var i = 0; i < sentence.length; i++) {
    if(sentence[i] !== " ") {
      result += sentence[i]
    }
    if (sentence[i] == " " || i === sentence.length - 1) {
      output.push(result)
      result = ""
    }
  }
  return output
}

//TEST CASE
console.log(breakSentence('I am so amazed')); // ['I', 'am', 'so', 'amazed' ]
console.log(breakSentence('do something')); // ['do', 'something']
console.log(breakSentence('')); // []
console.log(breakSentence('week3 is so easy')); // ['week3', 'is', 'so', 'easy']
console.log(breakSentence('I can do this with my eyes closed')); // ['I', 