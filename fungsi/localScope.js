// Local Scope : hanya bisa diakses didalam scope

function gantiWarna() {
  let warna = "merah";
  return warna;
}

function ambilWarna() {
  return warna; // <-- tidak punya akses ke variabel warna di scope diatas
}

console.log(gantiWarna());
console.log(ambilWarna()); // <-- ambilWarna belum didefinisikan - tidak bisa mengakses variabel ambilWarna diatas - karena vairabel nama berada didalam scope
