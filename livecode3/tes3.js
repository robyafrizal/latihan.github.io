/*
===============
Number Triangle
===============

Instruction:
Buatlah sebuah proses untuk membuat deret angka yang membentuk segitiga seperti contoh berikut.

Contoh 1 (height = 5):
Output:
12345
2345
345
45
5

Contoh 2 (height = 3):
Output:
123
23
3

Contoh 3 (height = 1):
Output:
1
 */


var height = 5;
for (var i = height; i >= 1; i--) {

    var angka = "";
    for (var j = 1; j <= i; j++) {
        angka += j;
    }
    console.log(angka);
}

console.log("----------------------------");


var height = 5;
for (var i = height; i >= 1; i--) {

    var angka = "";
    for (var j = i; j <= height; j++) {
        angka += j;
    }
    console.log(angka);
}

console.log("----------------------------");


var height = 5;
for (var i = 1; i <= height; i++) {

    var angka = "";
    for (var j = i; j <= height; j++) {
        angka += j;
    }
    console.log(angka);
}

console.log("----------------------------");


var height = 5;
for (var i = 0; i <= height; i++) {

    var angka = "";
    for (var j = 0; j <= height; j++) {
        if( j > i){
            angka += j;
        }
    }
    console.log(angka);
}
