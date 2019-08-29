//Latihan Repeat Symbol

//PSEUDOCODE
  // START
  // SET function repeatSymbol with parameter(param)
  // STORE 'symbol' with '!@*'
  // STORE 'result' with 0
  // STORE 'array' with empty array
  // IF param EQUALS TO 0 THEN
  //    RETURN 'invalid input'
  // END IF
  // FOR i LESS THEN 'param'
  //    IF 'result' EQUALS TO 2 THEN
  //        PUSH symbol[result] to array
  //        SET 'result' EQUALS TO 0
  //    ELSE
  //        PUSH symbol[result] to array
  //        SET 'result' with 'result = result + 1'
  //    END IF
  //    i++
  // END FOR
  // RETURN array
  // END

  function repeatSymbol(param) {
    var symbol = '!@#'
    var result = 0
    var array = []
    if(param === 0) {
      return 'invalid input'
    }
    for(var i = 0; i < param; i++) {
      if(result === 2) {
        array.push(symbol[result])
        result = 0
      }
      else {
        array.push(symbol[result])
        result++
      }
    }
    return array
  }

// console.log(repeatSymbol(3)) // output : ['!','@','#']
// console.log(repeatSymbol(6)); // output : ['!','@','#','!','@','#']
// console.log(repeatSymbol(4)) // output : ['!','@','#','!']
// console.log(repeatSymbol(0)) // invalid input

//PSEUDOCODE
/*
  START
  SET function repeatsSymbol with parameter(param)
  STORE 'count' with 1
  STORE 'output' with []
  IF param LESS EQUALS TO 0 THEN
    RETURN 'invalid input'
  END IF
  WHILE params GREATER THEN 0
    IF 'count' EQUALS TO 1 THEN
      PUSH "!" TO output
      count++
    ELSE IF 'count' EQUALS TO 2 THEN
      PUSH '@' TO output
      count++
    ELSE IF 'count' EQUALS TO 3 THEN
      PUSH '#' TO output
      count++
    END IF
    param--
  RETURN output
  END
*/

function repeatsSymbol(param) {
  var count = 1
  var output = []
  if(param < 0) {
    return 'invalid input'
  }
  while(param > 0) {
    if(count === 1) {
      output.push('!')
      count++
    }
    else if(count === 2) {
      output.push('@')
      count++
    }
    else if(count === 3) {
      output.push('#')
      count++
    }
    param--
  }
  return output
}


console.log(repeatsSymbol(3)) // output : ['!','@','#']
console.log(repeatsSymbol(6)); // output : ['!','@','#','!','@','#']
console.log(repeatsSymbol(4)) // output : ['!','@','#','!']
console.log(repeatsSymbol(0)) // invalid input