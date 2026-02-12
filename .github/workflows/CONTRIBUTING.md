# Panduan Kontribusi - Perpuskit 📚

Terima kasih telah memilih Perpuskit! Jika Anda adalah pembeli berlisensi atau pengembang yang bekerja untuk klien pembeli, silakan ikuti standar ini untuk menjaga kualitas kode.

## 🛠 Standar Pengembangan

Untuk menjaga performa **Laravel 12** dan **Vue 3**, kami menerapkan standar berikut:

### 1. Backend (Laravel)
- **Architecture:** Gunakan Service Classes untuk logika bisnis yang kompleks agar Controller tetap ramping.
- **Strict Typing:** Gunakan PHP 8.3+ type hinting secara konsisten.
- **Testing:** Setiap fitur baru wajib disertai Unit atau Feature Test menggunakan PHPUnit.

### 2. Frontend (Vue.js 3)
- **Composition API:** Semua komponen harus menggunakan `<script setup>`.
- **Props & Emits:** Definisikan props secara eksplisit untuk dokumentasi komponen yang lebih baik.
- **Inertia.js:** Pastikan pengiriman data dari backend ke frontend efisien (gunakan `Inertia::lazy` jika perlu).

## 🚀 Alur Kerja (Workflow)
1. **Branching:** Gunakan format `feature/nama-fitur` atau `fix/nama-bug`.
2. **Commit Message:** Ikuti standar [Conventional Commits](https://www.conventionalcommits.org/) (contoh: `feat: add WhatsApp notification for late returns`).
3. **Refactoring:** Jika Anda melakukan kustomisasi, pastikan menjalankan `php artisan test` untuk memastikan tidak ada fitur utama yang rusak.

## 🐛 Pelaporan Masalah
Jika Anda menemukan bug pada core system Perpuskit, silakan hubungi tim support melalui:
- **Email:** faiz.muhammad.rijal.fikri@gmail.com
- **WhatsApp:** 082318188517

---
*Kontribusi ini hanya berlaku bagi pemegang lisensi resmi Perpuskit.*
