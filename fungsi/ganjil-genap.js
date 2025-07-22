// Modulo = sisa bagi

function ganjilGenap(angka) {
  if (angka % 2 === 0) {
    return "bilangan genap";
  } else {
    return "bilangan ganjil";
  }
}

console.log(ganjilGenap(5));
