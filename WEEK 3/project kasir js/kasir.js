const readlineSync = require("readline-sync");

const BARANG_TERSEDIA = {
    "apel": 5000,
    "pisang": 3000,
    "jeruk": 7000,
    "roti": 10000,
    "susu": 15000,
    "mie instan": 3500,
    "telur (kg)": 25000,
    "minyak goreng (L)": 18000
};

let keranjang = [];
let isKeluar = false;

const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
};

const melihatDaftarBarang = () => {
    console.log("\n--- Daftar Barang Tersedia ---");
    if (Object.keys(BARANG_TERSEDIA).length === 0) {
        console.log("Maaf, tidak ada barang yang tersedia saat ini.");
        return;
    }
    for (const barang in BARANG_TERSEDIA) {
        console.log(`- ${barang.charAt(0).toUpperCase() + barang.slice(1)}: ${formatRupiah(BARANG_TERSEDIA[barang])}`);
    }
    console.log("------------------------------");
};

const menambahkanBarang = () => {
    melihatDaftarBarang();
    const namaBarangInput = readlineSync.question("Masukkan nama barang yang ingin dibeli: ").trim().toLowerCase();

    if (!namaBarangInput) {
        console.log("Nama barang tidak boleh kosong.");
        return;
    }

    if (!BARANG_TERSEDIA[namaBarangInput]) {
        console.log(`Maaf, barang '${namaBarangInput}' tidak tersedia.`);
        return;
    }

    let kuantitas;
    while (true) {
        const kuantitasStr = readlineSync.question(`Masukkan jumlah '${namaBarangInput.charAt(0).toUpperCase() + namaBarangInput.slice(1)}' yang ingin dibeli: `).trim();
        if (!kuantitasStr) {
            console.log("Kuantitas tidak boleh kosong.");
            continue;
        }
        kuantitas = parseInt(kuantitasStr);
        if (isNaN(kuantitas) || kuantitas <= 0) {
            console.log("Input kuantitas tidak valid. Harap masukkan angka positif.");
        } else {
            break;
        }
    }

    const itemDiKeranjang = keranjang.find(item => item.nama === namaBarangInput);
    if (itemDiKeranjang) {
        itemDiKeranjang.kuantitas += kuantitas;
    } else {
        keranjang.push({
            nama: namaBarangInput,
            kuantitas: kuantitas,
            harga_satuan: BARANG_TERSEDIA[namaBarangInput]
        });
    }
    console.log(`${kuantitas} ${namaBarangInput.charAt(0).toUpperCase() + namaBarangInput.slice(1)} berhasil ditambahkan ke keranjang.`);
};

const melihatKeranjang = () => {
    console.log("\n--- Isi Keranjang Belanja ---");
    if (keranjang.length === 0) {
        console.log("Keranjang belanja Anda kosong.");
        console.log("-----------------------------");
        return;
    }

    let totalBelanja = 0;
    keranjang.forEach((item, index) => {
        const subtotal = item.kuantitas * item.harga_satuan;
        totalBelanja += subtotal;
        console.log(`${index + 1}. ${item.nama.charAt(0).toUpperCase() + item.nama.slice(1)} - ${item.kuantitas} pcs @ ${formatRupiah(item.harga_satuan)} = ${formatRupiah(subtotal)}`);
    });
    console.log("-----------------------------");
    console.log(`Total Belanja Sementara: ${formatRupiah(totalBelanja)}`);
    console.log("-----------------------------");
};

const menghapusBarang = () => {
    if (keranjang.length === 0) {
        console.log("Keranjang belanja sudah kosong. Tidak ada yang bisa dihapus.");
        return;
    }

    melihatKeranjang();
    const barangDihapusInput = readlineSync.question("Masukkan nama barang yang ingin dihapus dari keranjang: ").trim().toLowerCase();

    if (!barangDihapusInput) {
        console.log("Nama barang yang akan dihapus tidak boleh kosong.");
        return;
    }

    const indexDihapus = keranjang.findIndex(item => item.nama.toLowerCase() === barangDihapusInput);

    if (indexDihapus !== -1) {
        const itemYangDihapus = keranjang.splice(indexDihapus, 1)[0];
        console.log(`Barang '${itemYangDihapus.nama.charAt(0).toUpperCase() + itemYangDihapus.nama.slice(1)}' berhasil dihapus dari keranjang.`);
    } else {
        console.log(`Barang '${barangDihapusInput.charAt(0).toUpperCase() + barangDihapusInput.slice(1)}' tidak ditemukan di keranjang.`);
    }
};

const mencetakStruk = () => {
    console.log("\n\n===== STRUK BELANJA =====");
    const now = new Date();
    console.log(`Tanggal: ${now.toLocaleDateString('id-ID')} ${now.toLocaleTimeString('id-ID')}`);
    console.log("=========================");

    if (keranjang.length === 0) {
        console.log("Tidak ada item untuk dicetak dalam struk.");
        console.log("=========================");
        return;
    }

    let totalKeseluruhan = 0;
    keranjang.forEach(item => {
        const subtotal = item.kuantitas * item.harga_satuan;
        totalKeseluruhan += subtotal;
        const namaBarangFormatted = item.nama.charAt(0).toUpperCase() + item.nama.slice(1);
        console.log(`${namaBarangFormatted.padEnd(18)} (${item.kuantitas} x ${formatRupiah(item.harga_satuan)})`);
        console.log(`${"Subtotal:".padStart(28)} ${formatRupiah(subtotal).padStart(12)}`);
        console.log("---");
    });

    console.log("=========================");
    console.log(`${"TOTAL BELANJA:".padEnd(20)} ${formatRupiah(totalKeseluruhan).padStart(19)}`);
    console.log("=========================");
    console.log("    Terima kasih telah berbelanja!    ");
    console.log("=========================\n");

    // keranjang = []; // Opsional: kosongkan keranjang setelah cetak struk
};

const jalankanKeluar = () => {
    console.log("Terima kasih telah menggunakan aplikasi kasir. Sampai jumpa!");
    return true;
};

while (!isKeluar) {
    console.log("\n--- Aplikasi Kasir ---");
    const pilihan = readlineSync.question(
        `Masukkan pilihan:
    1. Melihat daftar barang
    2. Menambahkan barang ke keranjang
    3. Melihat isi keranjang
    4. Menghapus barang dari keranjang
    5. Mencetak struk belanja
    6. Keluar
Pilihan Anda: `
    ).trim();

    switch (pilihan) {
        case "1":
            melihatDaftarBarang();
            break;
        case "2":
            menambahkanBarang();
            break;
        case "3":
            melihatKeranjang();
            break;
        case "4":
            menghapusBarang();
            break;
        case "5":
            mencetakStruk();
            break;
        case "6":
            isKeluar = jalankanKeluar();
            break;
        default:
            console.log("Pilihan tidak valid. Silakan coba lagi.");
    }
}