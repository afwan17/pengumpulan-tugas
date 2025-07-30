//operator aritmatika
const a = 20;
const b = 40;
const c = 43;

// console.log(a-b);
// console.log(b+a);
// console.log(a*a);
// console.log(b/a);
// console.log(b%a); //output 0
// console.log(c%a); //output 3, karena ada sisa 3 dari pembagian 20

//operator perbandingan
let umur_jhon = 25;
let umur_dita = 20;
let umur_afwan = 31;

// console.log(umur_afwan == 31 && umur_jhon == 25); // && akan true kalo kedua variabel harus true
// console.log(umur_dita == 20 || umur_jhon == 31); // || akan true kalo salah satu true

// operator ternary 
// if (umur_jhon === 31) {
//     console.log("Yes, benar");
// } else {
//     console.log("No, bukan");
// }

// umur_afwan == 31
//     ? console.log("Yes, benar")
//     : console.log("No, salah");

//switch case 
let hari = 3 //angka ini buat munculin hari ke berapanya
let namaHari;

switch (hari) {
    case 1:
        namaHari = "Senin";
        break;
    case 2:
        namaHari = "Selasa";
        break;
    case 3 :
        namaHari = "Rabu";
        break;
    case 3 :
        namaHari = "Kamis";
        break;
    case 4 : 
    namaHari = "Kamis";
        break;
    case 5 :
        namaHari = "Jumat";
        break;
    case 6 :
        namaHari = "Sabtu";
        break;
    case 7 : 
        namaHari = "Minggu";
        break;
    default :
        namaHari = "Hari tidak valid";
}

console.log(`Hari ini adalah hari ${namaHari}`);