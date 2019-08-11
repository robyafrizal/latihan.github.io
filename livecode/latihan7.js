/*
Multi Dimensional XO
====================
Implementasikan function `multiDimensionalXO` untuk membuat
array `size` x `size`. Array akan diisi dengan huruf 'x' atau huruf 'o'.
# Contoh I/O
- Input: 3
  Output: [ [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ] ]
Pastikan kamu mengisi selang-seling, lihatlah pattern dari output di test case!
# Kondisi khusus
- Jika `size` lebih kecil dari 1, tampilkan 'Invalid input'
*/
/*
PSEUDOCODE
  START
  SET function multiDimensionalXO with parameter(arr)
  STORE 'result' with empty array
  STORE 'tanda' with any value
  IF arr LESS THEN 1
    RETURN 'invalid input'
  END IF
  STORE i EQUALS TO 0
  FOR i LESS THEN arr
    SET result[i] TO empty array
    STORE j EQUALS TO 0
    FOR j LESS THEN arr
      IF tanda MOD 2 EQUALS TO 0 THEN
        SET result[i][j] EQUALS TO 'x'
      ELSE
        SET result[i][j] EQUALS TO 'o'
      END IF
      j++
      tanda++
    END FOR
    i++
  END FOR
  RETURN result
  END
*/

// function multiDimensionalXO(arr) {
  //   var result = []
//   var tanda = 0
//   if(arr < 1) {
  //     return 'invalid input'
//   }
//   for(var i = 0; i < arr; i++) {
  //     result[i] = []
//     for(var j = 0; j < arr; j++ ) {
  //       if(tanda % 2 === 0) {
    //         result[i][j] = 'x'
    //       }
    //       else {
      //         result[i][j] = 'o'        
      //       }
      //       tanda++
      //     }
      //   }
      //   return result
      // }
      
/*
PSEUDOCODE
  START
  SET function multiDimensionalXO with parameter(param)
  STORE 'output' with empty array
  STORE 'sign' with 1
  STORE i with 0
  FOR i LESS THEN param
    STORE 'result' witj empty array
    STORE j with 0
    FOR j LESS THEN param
      IF sign MOD 2 EQUALS TO 0
        PUSH 'o' TO result
        sign++
      ELSE
        PUSH 'x' TO result 
        sign++
      END IF
      j++
    END FOR
    i++
    PUSH result TO output
  END FOR
  RETURN output
  END
*/
function multiDimensionalXO(param) {
  var output = []
  var sign = 1
  for(var i = 0; i < param; i++) {
    var result = []
    for(var j = 0; j < param; j++) {
      if(sign % 2 == 0) {
        result.push('o')
        sign++
      }
      else {
        result.push('x')
        sign++
      }
    }
    output.push(result)
  }
  return output
}


//TEST CASE
console.log(multiDimensionalXO(3));
console.log(multiDimensionalXO(2));
console.log(multiDimensionalXO(0));