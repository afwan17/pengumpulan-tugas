// ada 2 jenis variavle dalam scope : Global scope dan local scope

// Variable Global, variable berada dilaur scope function. variable global bisa diakses dari manapun.

let nama = "Afwan"; // variable ada diluar scope / blok function
function perkenalan() {
  return `Nama saya ${nama}`;
}
const result = perkenalan();

function listNama() {
  return nama;
}
const result2 = listNama();
// memanggil keduanya
console.log(result);
console.log(result2);

// Scope variable. variable hanya bisa diakses didalam scope nya

function warna() {
  let warnaBaru = "yellow"; // <-- variable ini hanya bisa diakses di local scope
  return warnaBaru;
}

const $warna = warna();
console.log($warna);

function warna2() {
  return warnaBaru;
}

const $warna2 = warna2();

console.log($warna2);
