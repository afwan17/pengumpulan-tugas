// cara membuat fungsi object adalah dengan menggunakan tanda {}
const orang = {
  nama: "Anna",
  umur: 20,
  hobby: "renang",
  alamat: "Jalan Angkasa",
  "nama lengkap": "Mas Afwan",
};

/*
object nya adalah : orang 
property nya adalah : nama, umur, hobby, alamat
value nya adalah : Anna, 20, renang, Jalan Angkasa.
*/

/* Cara mengakses nilai object property sebagai berikut :
namaObject.property atau namaObject[property]
*/

// cara pertama :
console.log(orang.nama);

// cara kedua :
console.log(orang["hobby"]);

// untuk property yang pakai kata panjang
console.log(orang["nama lengkap"]);

/* kita bisa mengubah nilai object dengan cara :
namaObject.property = nilaibaru 
*/

orang.hobby = "Coding";
console.log(orang.hobby);

// untuk property panjang
orang["nama lengkap"] = "Sapardi Nasir";
console.log(orang["nama lengkap"]);

/* 
cara menghapus property :
delete namaObject.property
example : 
 delete orang.nama

lalu console.log :
console.log(orang)
*/

// NESTED Variabel

const orang1 = {
  nama: "Anna",
  umur: 20,
  hobby: "renang",
  alamat: { jl: "Jalan Angkasa", rt: 1, rw: 10 },
};
console.log(orang1);
