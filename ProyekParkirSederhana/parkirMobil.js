const kendaraanMobil = {
    nopol: "Z 4 KY",
    warna: "Biru",
    jenis: "mobil",
    lamaParkir: 2
};

let biayaParkirMobil = 0;
const tarifAwalMobil = 7000;
const tarifBerikutnyaMobil = 5000;

if (kendaraanMobil.lamaParkir <= 0) {
    biayaParkirMobil = 0;
} else {
    biayaParkirMobil = tarifAwalMobil;
    if (kendaraanMobil.lamaParkir > 1) {
        for (let i = 2; i <= kendaraanMobil.lamaParkir; i++) {
            biayaParkirMobil += tarifBerikutnyaMobil;
        }
    }
}

console.log(`--- Detail Parkir Mobil ---`);
console.log(`No. Polisi: ${kendaraanMobil.nopol}`);
console.log(`Warna: ${kendaraanMobil.warna}`);
console.log(`Jenis: ${kendaraanMobil.jenis}`);
console.log(`Lama Parkir: ${kendaraanMobil.lamaParkir} jam`);
console.log(`Biaya Parkir yang harus dibayar: Rp${biayaParkirMobil}`);