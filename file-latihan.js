// Cara 1 bikin function
function hitungDiskon(diskon, harga){
    let nilaiDiskon = diskon / 100 * harga;
    return nilaiDiskon;
}

// Cara 2 bikin function
const hitungDiskon = function(diskon, harga){
    return diskon / 100 * harga;
}

// cara 3 bikiin function
const hitungDiskon = (diskon, harga) => {return diskon / 100 * harga}

// ----

let nilaiDiskon = hitungDiskon(40, 100000);
console.log(nilaiDiskon);



// IF

const umur = 30;

if (umur < 50) {
    console.log('Masih muda');
} else {
    console.log('Udah tua');
}


// game fizz buzz
// 1. diberikan deret angka tak terhingga
// 2. setiap angka yg habis dibagi 3 ganti menjadi fizz
// 3. setiap angka yg habis dibagi 5 ganti menjadi buzz
// 4, setiap angka yg habis dibagi 3 atau 5 menjadi fizz buzz

for (let x = 1; x <= 15; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log('fizz buzz');
    }else if (x % 5 === 0) {
        console.log('buzz');
    }else if (x % 3 === 0){
        console.log('fizz');
    } else {
        console.log(x);
    }
}

