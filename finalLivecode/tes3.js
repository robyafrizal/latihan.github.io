/*s

Setiap kali naik ojek online setelah sampai di tujuan, pada aplikasi kamu akan diminta untuk memberikan feedback.
Salah satu feedback yang diberi adalah dalam bentuk memberikan bintang.

Tugas kamu adalah membuat function countStar yang akan menghitung jumlah setiap bintang yang diterima oleh si abang ojol.

[INPUT]
[
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' ']
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', ' '],
]


[PROCESS]
bintang yang diterima
- bintang 5 ada 2
- bintang 4 ada 3
- bintang 3 ada 4
- bintang 2 ada 3
- bintang 1 tidak ada

[OUTPUT]
{
  '*****': 2,
  '****': 3,
  '***': 4,
  '**': 3,
  '*': 0,
}

*/


function countStar(stars) {
  //your code here
  var output = []
  for(var i = 0; i < stars.length; i++) {
    output.push(stars[i])
  }
  for(var i = 0; i < stars.length; i++) {
    for(var j = 0; j < stars.length; j++) {
      if(stars[j] < stars[j+1]) {
        output = stars[j]
        stars[j] = stars[j+1]
        stars[j+1] = output
      }
    }
  }
return output
}

console.log(countStar([
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', ' '],
]));

/*
{
  '*****': 2,
  '****': 3,
  '***': 4,
  '**': 3,
  '*': 0,
}
 */