function alphabetGroup(param) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var num = 0
  var alphabetGroup = []
  if(param === 0) {
    return 'invalid input'
  }
  else {
    for(var i = 0; i < param; i++) {
      var alphabetGroup1 = []
      for(var j = 0; j < param; j++) {
        if(alphabet.length-1 === num) {
          alphabetGroup1.push(alphabet[num])
          num = 0
        }
        else {
          alphabetGroup1.push(alphabet[num])
          num++
        }
      }
      alphabetGroup.push(alphabetGroup1)
    }
  }
  return alphabetGroup
}

console.log(alphabetGroup(6))
/*
PSEUDOCODE
  START
  SET function alphabetGroup with parameter(param) 
  STORE 'alphabet' with 'abcdefghijklmnopqrstuvwxyz'
  STORE 'num' with 0
  STORE 'output' with empty array
  IF param EQUALS TO 0
    RETURN 'invalid input'
  ELSE
    STORE i with 0    
    FOR i LESS THEN param
      STORE tampung with empty array
      STORE j with 0
      FOR j LESS THEN param
        IF tampung.length-1 EQUALS TO num
          PUSH alphabet[num] TO tampung
          num EQUALS TO 0
        ELSE
          PUSH alphabet[num] TO tampung
          num++
        END IF
        j++
      END FOR
      i++
      PUSH tampung TO output
    END FOR
  END IF
  RETURN output
END
*/