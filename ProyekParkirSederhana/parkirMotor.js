const kendaraanMotor = {
    nopol: "AB 10 ZUL",
    warna: "Merah",
    jenis: "motor",
    lamaParkir: 4
};

let biayaParkirMotor = 0;
const tarifAwalMotor = 3000;
const tarifBerikutnyaMotor = 2000;

if (kendaraanMotor.lamaParkir <= 0) {
    biayaParkirMotor = 0;
} else {
    biayaParkirMotor = tarifAwalMotor;
    if (kendaraanMotor.lamaParkir > 1) {
        for (let i = 2; i <= kendaraanMotor.lamaParkir; i++) {
            biayaParkirMotor += tarifBerikutnyaMotor;
        }
    }
}

console.log(`--- Detail Parkir Motor ---`);
console.log(`No. Polisi: ${kendaraanMotor.nopol}`);
console.log(`Warna: ${kendaraanMotor.warna}`);
console.log(`Jenis: ${kendaraanMotor.jenis}`);
console.log(`Lama Parkir: ${kendaraanMotor.lamaParkir} jam`);
console.log(`Biaya Parkir yang harus dibayar: Rp${biayaParkirMotor}`);