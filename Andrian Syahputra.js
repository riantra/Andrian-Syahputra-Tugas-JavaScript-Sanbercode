const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan angka genap: ', (input) => {
  const x = parseInt(input);

  if (isNaN(x)) {
    console.log('Input harus berupa angka');
  } else if (x < 0) {
    console.log('Tidak bisa input bilangan negatif');
  } else if (x % 2 !== 0) {
    console.log('Tidak bisa input bilangan ganjil');
  } else {
    const result = Math.sqrt(x);
    console.log(`Akar pangkat 2 dari ${x} adalah ${result}`);
  }

  rl.close();
});
