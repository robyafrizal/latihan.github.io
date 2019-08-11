/* 
==============
Bilangan Prima
==============

Bilangan prima merupakan bilangan yang hanya habis dibagi oleh angka 1 dan angka itu sendiri.
Buat algoritma DAN pseudocode untuk mengecek apakah sebuah angka merupakan angka prima atau bukan.
 */

// Tulis algoritma di sini

// Tulis pseudocode di sini

//Bilangan Prima

// Algoritma :
// Inputkan Angka
// INputkan i
// Lakukan Pengecekan i dimulai dari angka 2; angka lebih kecil dari 
// Jika angka % i = 0, maka tampilkan Angka Prima
// Jika tidak memenuhi kondisi diatas, tampilkan Bukan Angka Prima


// Pseudocode
// STORE "Angka" with any value
// STORE i with 2; i lees than "Angka"; i add by 1
// SET "Angka" mod i === 0 
// IF "Angka" mod i equal to 0 THEN
//   DISPLAY "Angka Prima"
// ELSE
//   DISPLAY "Bukan Angka Prima"
// END IF

function bilPrima(num) {
  for(var i = 2; i < num; i++) {
    console.log(num + " : " + i + " = " + num/i);
  if(num % i === 0) {
    return num + " Bukan bilangan Prima";
  }
  return num + " Bilangan Prima";
}
}
console.log(bilPrima(14));