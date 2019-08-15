/* 
    ===================
    Two Array Operation
    ===================
    Buatlah sebuah Program yang dapat mengoperasikan bilangan - bilangan yang ada
    didalam 2 buah array sesuai dengan masing - masing indexnya.

    [INSTRUCTION]
    diberikan 2 buah array yang akan dioperasikan 
    - jika bilangan tersebut berada pada index yang genap, maka tambahkan (+)
    bilangan pada index array yang ke satu dengan index array yang ke dua 
    - jika bilangan tersebut berada pada index yang ganjil, maka kurangkan (-)
    bilangan pada index array yang ke satu dengan index array yang ke dua 
    - jika panjang ke dua array tidak sama , 
    maka masukkan masukkan angka 0 sebagai pengganti value yang tidak ada.

    [EXAMPLE]
    twoArrayOperation([1,2,3],[1,2,3])
    array1 : [1, 2, 3]
              +  -  +
    array2 : [1, 2, 3]
    result : [2, 0, 6]

    twoArrayOperation([12,34,11,23],[11,78,45,20])
    array1 : [12, 34, 11, 23]
               +   -   +   -
    array2 : [11, 78, 45, 20]
    result : [23,-44, 56, 3]

    twoArrayOperation([-4, 5, 57, 33, -90],[4, 2, 54, 24, 34, 17])
    array1 : [-4, 5, 57, 33, -90]
              +   -   +   -    +   -
    array2 : [4,  2, 54, 24,  34, 17]
    result : [0,  3, 111, 9, -56, -17]
*/

function twoArrayOperation(arr1, arr2) {
  // your code here
  var maxLength = 0
  if(arr1.length > arr2.length) {
    maxLength = arr1.length
  }
  else {
    maxLength = arr2.length
  }
  var result = [maxLength]
  for(var i = 0; i < maxLength; i++) {
    var arr1Value = 0 
    var arr2Value = 0
    if(i < arr1.length) {
      arr1Value = arr1[i]
    }
    if(i < arr2.length) {
      arr2Value = arr2[i]
    }
    if(i % 2 == 0) {
      result[i] = arr1Value + arr2Value
    }
    else {
      result[i] = arr1Value - arr2Value
    }
  }
  return result
}

/*
PSEUDOCODE
  START
  SET function twoArrayOPeration with parameter(arr1, arr2)
  STORE 'maxLength' with any value
  IF arr1.length GREATER THEN arr2.length
    SET maxLength with arr1.length
  ELSE
    SET maxLength with arr2.length
  STORE 'result' with maxLength array
  STORE i with 0
  FOR i LESS THEN maxLength
    STORE arr1Value with 0
    STORE arr2Value with 0
    IF i LESS THEN arr1.length
      SET arr1Value with arr1[i]
    END IF
    IF i LESS THEN arr2.length
      SET arr2Value with arr2[i]
    END IF
    IF i MOD 2 EQUALS TO 0 THEN
      SET result[i] EQUALS TO arr1Value + arr2Value
    ELSE
      SET result[i] EQUAlS TO arr1Value - arr2Value
    END IF
    i++
  END FOR
  RETURN result
  END
*/

//TEST CASE
console.log(twoArrayOperation([-4, 5, 57, 33, -90], [4, 2, 54, 24, 34])) // [ 0, 3, 111, 9, -56]
console.log(twoArrayOperation([12, 34, 11, 23, 12], [11, 78, 45, 20, 42])) // [ 23, -44, 56, 3, 54 ]
console.log(twoArrayOperation([1, 2, 3], [1, 2, 3])) // [ 2, 0, 6 ]
console.log(twoArrayOperation([-4, 5, 57, 33, -90],[4, 2, 54, 24, 34, 17])) // [0,  3, 111, 9, -56, -17]