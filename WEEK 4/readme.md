# 🛍️ Aplikasi Kasir React - Tugas WEEK 4

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

Selamat datang di proyek Aplikasi Kasir yang dibangun dengan ReactJS untuk tugas WEEK 4! Proyek ini mengubah fungsionalitas aplikasi kasir berbasis terminal sebelumnya menjadi antarmuka pengguna web yang interaktif.

## ✨ Fitur Utama

*   **Daftar Produk Dinamis:** Menampilkan daftar produk yang tersedia dengan nama dan harga.
*   **Manajemen Keranjang Interaktif:**
    *   Tambahkan produk ke keranjang dengan mudah.
    *   Ubah kuantitas item langsung di keranjang.
    *   Hapus item dari keranjang.
*   **Perhitungan Total Otomatis:** Total belanja di keranjang dihitung secara real-time.
*   **Cetak Struk Belanja:** Hasilkan struk belanja detail setelah proses checkout.
*   **Antarmuka Pengguna Responsif (Dasar):** Dirancang dengan layout dasar yang menyesuaikan.

## 🚀 Teknologi yang Digunakan

Proyek ini dibangun menggunakan teknologi modern berikut:

*   **ReactJS:** Library JavaScript untuk membangun antarmuka pengguna yang dinamis dan komponen-sentris.
    *   **Komponen Fungsional & Hooks:** Menggunakan `useState` untuk manajemen state dan `useEffect` (jika diperlukan untuk side effects).
    *   **Props:** Untuk meneruskan data antar komponen.
    *   **JSX:** Untuk sintaks UI yang ekspresif.
*   **JavaScript (ES6+):** Bahasa pemrograman inti.
*   **CSS3:** Untuk styling dasar dan tata letak antarmuka.
*   **Node.js & npm:** Untuk lingkungan pengembangan dan manajemen package (meskipun aplikasi akhirnya berjalan di browser).

## ⚙️ Cara Menjalankan Proyek Secara Lokal

Untuk menjalankan aplikasi ini di komputer Anda:

1.  **Prasyarat:**
    *   Pastikan Anda telah menginstal **Node.js** (yang menyertakan npm). Anda bisa mengunduhnya dari [nodejs.org](https://nodejs.org/).
    *   Verifikasi instalasi: `node -v` dan `npm -v`.

2.  **Kloning Repositori (Jika Belum):**
    ```bash
    git clone https://github.com/angelgabriel7/Full-Stack-Web-Developer-.git
    cd Full-Stack-Web-Developer-/WEEK 4/aplikasi kasir react
    ```
    *(Catatan: Jika Anda sudah mengkloning, cukup navigasi ke direktori proyeknya)*

3.  **Navigasi ke Direktori Proyek:**
    Pastikan Anda berada di dalam direktori proyek React:
    ```bash
    cd "aplikasi kasir react" 
    ```
    *(Jika Anda sudah berada di dalam `WEEK 4`, maka cukup `cd "aplikasi kasir react"`)*

4.  **Instal Dependensi:**
    Jalankan perintah berikut untuk menginstal semua package yang dibutuhkan:
    ```bash
    npm install
    ```

5.  **Jalankan Aplikasi:**
    Setelah instalasi selesai, mulai server pengembangan:
    ```bash
    npm start
    ```
    Ini akan membuka aplikasi secara otomatis di browser default Anda (biasanya di `http://localhost:3000`).

## 📸 Tampilan Aplikasi (Screenshot)

Berikut adalah beberapa cuplikan tampilan dari Aplikasi Kasir React:

| Tampilan Awal / Daftar Produk                                       | Keranjang Belanja Terisi                                             | Struk Belanja                                                          |
| :------------------------------------------------------------------: | :-------------------------------------------------------------------: | :---------------------------------------------------------------------: |
| ![Daftar Produk](aplikasi%20kasir%20react/screenshots/daftar_produk.png) | ![Keranjang Belanja](aplikasi%20kasir%20react/screenshots/keranjang.png) | ![Struk Belanja](aplikasi%20kasir%20react/screenshots/struk_belanja.png) |

## 💡 Konsep React yang Diterapkan

*   **Komponen:** Aplikasi dipecah menjadi komponen yang dapat digunakan kembali (`ProductList`, `ProductItem`, `Cart`, `CartItem`, `Receipt`, `App`).
*   **State:** Digunakan di komponen `App` untuk mengelola `cartItems` dan `receipt`.
*   **Props:** Digunakan untuk mengirim data dan fungsi dari komponen induk ke komponen anak.
*   **Event Handling:** Menangani interaksi pengguna seperti klik tombol.
*   **Conditional Rendering:** Menampilkan elemen UI secara kondisional (misalnya, pesan "Keranjang kosong" atau tampilan struk).
*   **List & Keys:** Merender daftar item menggunakan metode `.map()` dengan `key` unik.

---

Selamat mencoba ,  Jika ada pertanyaan atau masukan, jangan coba coba tanya saya, HAHAHAHA
