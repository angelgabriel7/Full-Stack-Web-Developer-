# Kalkulator Biaya Parkir Sederhana

Proyek ini berisi dua skrip JavaScript (`parkirMotor.js` dan `parkirMobil.js`) untuk menghitung biaya parkir berdasarkan jenis kendaraan (motor atau mobil) dan lama parkir.

## Struktur Objek `kendaraan`

Setiap skrip mendefinisikan sebuah objek `kendaraan` (bernama `kendaraanMotor` atau `kendaraanMobil`) dengan struktur berikut:

-   `nopol`: (String) Nomor polisi kendaraan. Contoh: `"AB 10 ZUL"`.
-   `warna`: (String) Warna kendaraan. Contoh: `"Merah"`.
-   `jenis`: (String) Jenis kendaraan, yaitu `"motor"` atau `"mobil"`.
-   `lamaParkir`: (Number) Durasi parkir dalam satuan jam. Contoh: `4`.

## Logika Tarif Parkir

Logika tarif parkir diimplementasikan sebagai berikut:

**Untuk Motor (`parkirMotor.js`):**
-   Biaya 1 jam pertama: Rp 3.000
-   Biaya per jam berikutnya (setelah jam pertama): Rp 2.000

**Untuk Mobil (`parkirMobil.js`):**
-   Biaya 1 jam pertama: Rp 7.000
-   Biaya per jam berikutnya (setelah jam pertama): Rp 5.000

Perhitungan biaya untuk jam-jam berikutnya setelah jam pertama menggunakan perulangan (looping).

## Cara Menjalankan

1.  Pastikan Anda memiliki Node.js terinstal di sistem Anda.
2.  Simpan kode untuk motor sebagai `parkirMotor.js` dan kode untuk mobil sebagai `parkirMobil.js` dalam direktori yang sama.
3.  Buka terminal atau command prompt.
4.  Navigasi ke direktori tempat Anda menyimpan file-file tersebut.
5.  Untuk menghitung biaya parkir motor, jalankan perintah:
    ```bash
    node parkirMotor.js
    ```
6.  Untuk menghitung biaya parkir mobil, jalankan perintah:
    ```bash
    node parkirMobil.js
    ```

Output akan menampilkan detail kendaraan beserta total biaya parkir yang harus dibayar. Anda dapat mengubah nilai-nilai dalam objek `kendaraanMotor` atau `kendaraanMobil` di dalam file `.js` masing-masing untuk menguji skenario parkir yang berbeda.