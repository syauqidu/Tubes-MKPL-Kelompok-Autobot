let rentalData = [
  { nama: "Andi", psType: "PS4", lamaSewa: 3 },
  { nama: "Budi", psType: "PS5", lamaSewa: 2 },
  { nama: "Citra", psType: "PS4", lamaSewa: 5 },
];

function addRental(nama, psType, lamaSewa) {
  rentalData.push({ nama, psType, lamaSewa });
}

function editRental(index, nama, psType, lamaSewa) {
  rentalData[index] = { nama, psType, lamaSewa };
}

function deleteRental(index) {
  rentalData.splice(index, 1);
}

// --- Unit Test ---
let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(` LULUS: ✅ ${message}`);
    testsPassed++;
  } else {
    console.error(` GAGAL: ❌ ${message}`);
    testsFailed++;
    process.exitCode = 1;
  }
}

console.log("--- Memulai Unit Test Rental PS ---");

// Test tambah data
addRental("Dewi", "PS5", 4);
assert(rentalData.length === 4, "Tambah data: jumlah data ditambah jadi harus bertambah");
assert(rentalData[3].nama === "Dewi", "Tambah data: Menambahkan nama Dewi jadi data terakhir harus Dewi");

// Test edit data
editRental(0, "Andi Edit", "PS4", 6);
assert(rentalData[0].nama === "Andi Edit", "Edit data: nama pertama setelah diedit menjadi Andi harus menjadi Andi");
assert(rentalData[0].lamaSewa == 6, "Edit data: lama sewa pertama menjadi 6 setelah edit harus 6");

// Test hapus data
deleteRental(1);
assert(rentalData.length === 3, "Hapus data: jumlah data dikurang jadi harus berkurang");
assert(!rentalData.some(d => d.nama === "Budi"), "Hapus data: data Budi dihapus jadi data Budi harus terhapus");

// Test data awal
assert(rentalData[0].psType === "PS4", "Data awal: tipe PS data pertama harus PS4");

console.log("");
console.log("--- Tes Unit Selesai ---");
console.log(`Total Tes: ${testsPassed + testsFailed}, Lulus: ${testsPassed}, Gagal: ${testsFailed}`);

if (testsFailed > 0) {
  console.error(" Beberapa tes unit gagal!");
} else {
  console.log(" Semua tes unit berhasil!");
}