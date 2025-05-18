# Aplikasi Kasir Sederhana (JavaScript - Node.js)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) [![readline-sync](https://img.shields.io/npm/v/readline-sync?style=for-the-badge&label=readline-sync&color=blue)](https://www.npmjs.com/package/readline-sync)

Ini adalah aplikasi kasir sederhana berbasis terminal yang dibuat dengan JavaScript dan dijalankan menggunakan Node.js. Aplikasi ini merupakan bagian dari tugas WEEK 3 dan memungkinkan pengguna untuk mengelola daftar barang, menambahkan item ke keranjang belanja, menghapus item dari keranjang, dan mencetak struk.

## Fitur Utama
-----------

*   Melihat daftar barang yang tersedia beserta harganya.
*   Menambahkan barang ke keranjang belanja beserta kuantitasnya.
*   Melihat isi keranjang belanja saat ini beserta total sementara.
*   Menghapus barang dari keranjang belanja.
*   Mencetak struk belanja lengkap dengan detail item, tanggal transaksi, dan total keseluruhan.

## Teknologi yang Digunakan
------------------------

*   Node.js
*   JavaScript (ES6+)
*   Package `readline-sync` (untuk input pengguna sinkron di terminal)

## Cara Menjalankan Aplikasi
-------------------------

1.  **Prasyarat:**
    *   Pastikan Anda telah menginstal Node.js dan npm di sistem Anda. Anda bisa mengunduhnya dari [nodejs.org](https://nodejs.org/).
    *   Verifikasi instalasi dengan membuka terminal dan menjalankan `node -v` dan `npm -v`.

2.  **Kloning atau Unduh Repositori:**
    *   Kloning seluruh repositori `Full-Stack-Web-Developer-` jika Anda belum melakukannya.
    *   Atau, pastikan Anda memiliki folder `WEEK 3` beserta isinya.

3.  **Buka Terminal atau Command Prompt:**
    Navigasi ke direktori **di dalam** folder `project kasir js`:
    ```bash
    cd path/ke/Full-Stack-Web-Developer-/WEEK 3/project kasir js
    ```

4.  **Instal Dependensi:**
    Di dalam folder `project kasir js`, jalankan perintah berikut untuk menginstal package `readline-sync` (jika belum ada folder `node_modules` atau ini adalah clone baru):
    ```bash
    npm install
    ```
    Jika file `package.json` tidak ada di dalam `project kasir js` (seharusnya ada jika Anda mengikuti langkah sebelumnya), Anda perlu menginstal `readline-sync` secara manual di dalam folder `project kasir js`:
    ```bash
    npm install readline-sync
    ```

5.  **Jalankan Skrip:**
    Masih di dalam direktori `project kasir js`, ketik perintah berikut dan tekan Enter:
    ```bash
    node kasir.js
    ```

6.  **Interaksi:**
    Aplikasi akan menampilkan menu utama. Ikuti instruksi di layar untuk berinteraksi dengan aplikasi kasir.

## Screenshot Aplikasi
-------------------

Berikut adalah beberapa contoh tampilan aplikasi saat dijalankan. Gambar-gambar ini berada di dalam folder `project kasir js/screenshots/`.

**1. Menu Utama:**
![Tampilan Menu Utama Aplikasi Kasir](project%20kasir%20js/screenshots/menu_utama1.png)

**2. Melihat Daftar Barang:**
![Melihat Daftar Barang](project%20kasir%20js/screenshots/melihat_daftar_barang.png)

**3. Menghapus Barang:**
![Menghapus Barang dari Keranjang](project%20kasir%20js/screenshots/menghapus_barang.png)

**4. Mencetak Struk Belanja:**
![Contoh Struk Belanja yang Dicetak](project%20kasir%20js/screenshots/mencetak_struk.png)

**5. Keluar:**
![Keluar dari Aplikasi](project%20kasir%20js/screenshots/keluar.png)