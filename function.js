/*
cara membuat function dengan menulis keyword function terlebih dulu diikuti nama function 
*/

function namaFungsi() {}

// aturan nama function, bisa komnbinasi huruf dan angka dapat menggunakan simbol $ (sama seperti menulis variabel)

function $iniFungsi() {}

// untuk memanggil fungsi yaitu dengan menuliskan nama fungsi diikuti tanda ()

function greeting() {
  console.log("Halo, saya terpanggil !!!");
}
greeting();

//Parameter fungsi adalah sebuah inputan. agar inputan bisa digunakan dalam fungsi tsb

function salam(parameter1, parameter2) {
  console.log(`Halo nama saya ${parameter1}, umur saya ${parameter2}`);
}

salam("ibad", 25);

/* Note : parameter dideklarasikan dalam tanda () setelah nama fungsi. 
saat fungsi dipanggil, nilai yang dikirim disebut argumen */

/* default parameter bisa diisikan didalamnya, agar saat tidak ada argumen yang dimasukan, maka default parameterlah yang akan dipanggil */

function salam(parameter1 = "sapardi", parameter2 = 19) {
  console.log(`Halo nama saya ${parameter1}, umur saya ${parameter2}`);
}

salam(); // <- tidak ada argumen yang dimasukan

// mengembalikan nilai dengan return
function salam1(parameter1 = "sapardi", parameter2 = 19) {
  return `Halo nama saya ${parameter1}, umur saya ${parameter2}`;
}
const hasil = salam1("joni", 22);
console.log(hasil);

// saat return dijalankan, kode dibawahnya dalam fungsi tersebut tidak akan dijalankan, karena return juga menghentikan ekskusi fungsi

function salam2(parameter1 = "sapardi", parameter2 = 19) {
  return `Halo nama saya ${parameter1}, umur saya ${parameter2}`;
  console.log("halo, saya kepanggil nih!!!"); // <-- code dibawah return
}
const hasil2 = salam2("Keane", 12);
console.log(hasil2);

// code diatas retun akan diekskusi

function salam3(parameter1 = "sapardi", parameter2 = 19) {
  console.log("halo, saya kepanggil nih!!!"); // <-- code diatas return
  return `Halo nama saya ${parameter1}, umur saya ${parameter2}`;
}
const hasil3 = salam3("Keenan", 16);
console.log(hasil3);
