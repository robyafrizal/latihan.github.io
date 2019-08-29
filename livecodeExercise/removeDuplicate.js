function mySort(arr) {
  var output = []
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j+1]) {
        output = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = output
      }
    }
  }
  return arr
}

function removeDuplicate(array) {
  var output = [' ']
  var arr = mySort(array)
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] != arr[i+1]) {
      output.push(arr[i])
    }
  }
  output.shift()
  return output
}

// function removeDuplicate(arr) {
//   var output = []
//   mySort(arr)
//   for(var i = 0; i < arr.length; i++) {
//     if(arr[i] != arr[i+1]) {
//       output.push(arr[i])
//     }
//   }
//   return output
// }



console.log(removeDuplicate([6,5,4,4,3,4,2,4,5,5,4,1,5])); //[1, 2, 3, 4, 5, 6]
console.log(removeDuplicate(['aku', 'saya', 'aku', 'dia', 'aku'])); // ['aku', 'dia', 'saya']