# 📚 Perpuskit - Sistem Manajemen Perpustakaan Modern & Tanpa Batas

![Laravel 12](https://img.shields.io/badge/Laravel-12.x-FF2D20?style=for-the-badge&logo=laravel)
![Vue.js 3](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js)
![Inertia.js](https://img.shields.io/badge/Inertia.js-Latest-9553E9?style=for-the-badge)
![License](https://img.shields.io/badge/License-Commercial-blue?style=for-the-badge)

**Perpuskit** adalah solusi digital untuk manajemen perpustakaan yang fleksibel, cepat, dan otomatis. Dirancang khusus untuk sekolah, instansi, maupun kebutuhan tugas akhir/skripsi dengan standar kode yang sangat rapi.

---

## 🚀 Mengapa Memilih Perpuskit?

Berbeda dengan sistem perpustakaan konvensional, Perpuskit menghilangkan batasan birokrasi sistem. Kami fokus pada kemudahan akses dan otomasi.

### ✨ Fitur Unggulan:

- **Unlimited Borrowing:** Sistem memungkinkan peminjaman tanpa batasan jumlah buku (selama stok tersedia), memberikan fleksibilitas total bagi anggota.
- **Auto-Late Detection:** Sistem secara otomatis merubah status peminjaman menjadi "Terlambat" saat melewati jatuh tempo tanpa intervensi manual.
- **Automated Fine Calculation:** Perhitungan denda dilakukan secara presisi dan otomatis oleh sistem.
- **Real-Time Analytics Dashboard:** Pantau statistik peminjaman, buku terpopuler, dan status denda secara visual dan real-time.
- **24/7 Transaction Ready:** Sistem dirancang untuk menangani pencatatan transaksi kapan saja secara instan.

---

## 🛠️ Modern Tech Stack

Aplikasi ini dibangun menggunakan teknologi terbaru untuk menjamin performa dan keamanan:

- **Backend:** Laravel 12 (Versi Terbaru)
- **Frontend:** Vue.js 3 (Composition API) - _Ringan & Reaktif_
- **Bridge:** Inertia.js (Pengalaman SPA tanpa kerumitan API eksternal)
- **Database:** MySQL/MariaDB
- **Testing:** PHPUnit (Unit & Feature Testing included)

---

## 📂 Struktur & Instalasi

Perpuskit dirancang dengan prinsip _Low Dependency_. Anda tidak memerlukan layanan cloud berbayar atau API eksternal untuk menjalankan sistem ini sepenuhnya.

### Prasyarat

- PHP >= 8.3
- Node.js & NPM
- Composer

### Langkah Instalasi

1. **Clone Repository**

    ```bash

    git clone https://github.com/FaizMR/perpuskit-full/
    cd perpuskit
    ```

2. **Install Dependencies**

    ```bash

    composer install
    npm install
    ```

3. **Konfigurasi Environment**

    ```bash

    cp .env.example .env
    php artisan key:generate
    ```

4. **Migrasi Database**

    ```bash

    php artisan migrate --seed
    ```

5. **Jalankan Aplikasi**

    ```bash

    npm run dev
    php artisan serve
    ```

## 🎯 Target Pengguna

- Sekolah & Instansi: Untuk digitalisasi perpustakaan dengan biaya efisien.
- Mahasiswa: Sangat cocok sebagai referensi tugas akhir atau skripsi karena kode yang bersih dan dokumentasi pengujian (PHPUnit) yang lengkap.
- Developer: Mudah dikustomisasi karena menggunakan standar Laravel & Vue 3 terbaru.

## 💼 Pembelian & Lisensi

Perpuskit tersedia dengan sistem One-Time License (Sekali Bayar). Anda mendapatkan akses penuh ke source code dan opsi dukungan teknis.

- Hubungi Kami: [Tautan Landing Page Anda]
- WhatsApp: [082318188517]
- Email: [faiz.muhammad.rijal.fikri@gmail.com]

Made with ❤️ by [Faiz Muhammad Rijal Fikri,A.Md.T]
