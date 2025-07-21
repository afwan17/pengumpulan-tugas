var a = 10;
var b = 5;

var nama = "Keane";
let usia = 20;
const alamat = "Jogja";
var hobby = "traveling";

console.log(nama);

// ini cara memberi komentar dengan 2 slash -> //

/*
pendeklarasian variable dengan type var ini sangat dinamis dan hampir tidak memiliki batasan
*/

var a = 40;
var b = 5;

console.log(a);

// type data string

const double = "balap";
const single = "Halo, selamat pagi";
const backtick = `selamat datang, ${nama}`;

console.log(backtick);

// menggabungkan string

const kalimat = "Halo" + " " + `${nama},` + " " + "di" + " " + `${alamat}` +" " + "kah alamatmu?";

console.log(kalimat);

// Type data Boolean

const benar = true
const salah = false

// Type undefined : Variabel yang sudah dideklarasikan tapi belum diberi nilai
let x;
console.log(x); // Output: undefined

// Type Null : type data yang merepresentasikan nilai kosong

const kosong = null

/* TYPE DATA REFERENCE
anggotanya :
1. Object
2. Array
*/

// Contoh Object

const orang = {
    name : "Olley",
    age : 30,
    isSingle : true
};

console.log(orang)

// Type data Array : kumpulan data array

const buah = ["Apple","Mangostin","pear"];

console.log(buah);
