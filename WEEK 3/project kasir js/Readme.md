Aplikasi Kasir Sederhana (JavaScript - Node.js)
===============================================

Ini adalah aplikasi kasir sederhana berbasis terminal yang dibuat dengan JavaScript dan dijalankan menggunakan Node.js. Aplikasi ini memungkinkan pengguna untuk mengelola daftar barang, menambahkan item ke keranjang belanja, menghapus item dari keranjang, dan mencetak struk.

Fitur Utama
-----------

   Melihat daftar barang yang tersedia beserta harganya.
   Menambahkan barang ke keranjang belanja beserta kuantitasnya.
   Melihat isi keranjang belanja saat ini beserta total sementara.
   Menghapus barang dari keranjang belanja.
   Mencetak struk belanja lengkap dengan detail item, tanggal transaksi, dan total keseluruhan.

Teknologi yang Digunakan
------------------------

   Node.js
   JavaScript (ES6+)
   Package readline-sync (untuk input pengguna sinkron di terminal)

Cara Menjalankan Aplikasi
-------------------------

1.  Prasyarat:
    
       Pastikan Anda telah menginstal Node.js dan npm di sistem Anda. Anda bisa mengunduhnya dari [nodejs.org](https://nodejs.org/).
       Verifikasi instalasi dengan membuka terminal dan menjalankan node -v dan npm -v.
2.  Kloning atau Unduh Proyek:
    
       Jika ini adalah repositori Git, kloning repositori ini.
       Jika tidak, unduh file kasir.js (dan package.json jika ada) dan simpan di direktori lokal Anda.
3.  Buka Terminal atau Command Prompt: Navigasi ke direktori tempat Anda menyimpan file proyek.
    
        cd path/ke/folder/proyek-kasir-js
        
    
4.  Instal Dependensi: Jika Anda mengunduh proyek tanpa folder nodemodules atau baru mengkloningnya, jalankan perintah berikut untuk menginstal package readline-sync:
    
        npm install
        
    
    Perintah ini akan membaca package.json (jika ada) dan menginstal dependensi yang terdaftar, atau Anda bisa menginstal readline-sync secara spesifik jika belum ada package.json:
    
        npm install readline-sync
        
    
5.  Jalankan Skrip: Ketik perintah berikut dan tekan Enter:
    
        node kasir.js
        
    
6.  Interaksi: Aplikasi akan menampilkan menu utama. Ikuti instruksi di layar untuk berinteraksi dengan aplikasi kasir.
    

Screenshot Aplikasi
-------------------

Berikut adalah beberapa contoh tampilan aplikasi saat dijalankan:

1\. Menu Utama: screenshots/menu_utama.png

2\. Melihat Daftar barang: screenshots/melihat_daftar_barang.png

3\. menghapus barang: screenshots/menghapus_barang.png

4\. Mencetak Struk Belanja: screenshots/mencetak_struk.png

5\. Keluar: screenshots/keluar.png
