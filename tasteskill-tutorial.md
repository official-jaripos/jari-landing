# Tutorial Menggunakan Taste Skill di Antigravity (Gemini IDE)

Taste Skill adalah sekumpulan instruksi (*skill files*) yang dirancang untuk menjaga AI agar tidak membuat desain antarmuka (UI) yang generik, membosankan, atau terlihat seperti "template AI murahan" (AI slop).

Berikut adalah panduan lengkap cara menginstal, menggunakan, dan memindahkannya ke sistem global.

---

## 1. Cara Instalasi Taste Skill

Anda dapat menginstal Taste Skill secara langsung menggunakan package manager `npx` (pastikan Anda telah menginstal Node.js di komputer Anda).

**Langkah-langkah:**
1. Buka terminal (command prompt) di dalam proyek Anda.
2. Jalankan perintah berikut:
   ```bash
   npx skills add Leonxlnx/taste-skill
   ```
3. Perintah ini akan mengunduh folder-folder *skill* dan menempatkannya ke dalam direktori khusus AI agent yaitu: `.agents\skills\` di dalam proyek Anda.

> [!TIP]
> Jika Anda meminta bantuan AI (seperti Antigravity), AI dapat langsung menjalankan perintah tersebut untuk Anda tanpa perlu Anda mengetiknya secara manual.

---

## 2. Cara Menggunakan Taste Skill

Setelah terinstal di folder `.agents\skills\`, Antigravity (atau AI agent yang kompatibel) akan **secara otomatis** mendeteksi, membaca, dan mematuhi panduan tersebut ketika mengerjakan tugas-tugas *frontend* dan desain di proyek ini.

**Contoh Penggunaan / Prompt:**
Karena AI sudah "mengetahui" standar desain Taste Skill Anda, Anda cukup memberikan instruksi seperti biasa:
- *"Buatkan saya halaman login dengan gaya industrial."* (AI otomatis memakai panduan dari skill `industrial-brutalist-ui`)
- *"Perbaiki desain landing page ini agar terlihat lebih premium."* (AI akan menerapkan `high-end-visual-design` atau `design-taste-frontend`)
- *"Buatkan komponen pricing table. Pastikan desainnya tidak generik dan gunakan prinsip Taste Skill."*

**Tips Opsional:**
Jika Anda ingin AI secara spesifik berfokus pada salah satu panduan, sebutkan nama *skill*-nya di dalam prompt:
> *"Tolong desain ulang form ini, terapkan aturan dari skill `minimalist-ui` dan `brandkit`."*

---

## 3. Cara Memindahkan Instalasi Menjadi "Global"

Instalasi yang dilakukan melalui perintah di atas bersifat **lokal** (hanya berlaku untuk folder proyek tempat ia di-install). Jika Anda ingin standar desain Taste Skill ini diterapkan di **semua proyek** yang Anda buka di Antigravity tanpa harus install ulang, Anda bisa memindahkannya ke direktori Global.

**Langkah-langkah Memindahkan ke Global:**
1. Buka File Explorer Anda.
2. Buka folder lokal tempat Taste Skill terinstal: `\.agents\skills\` di dalam proyek Anda.
3. Salin (`Copy`) atau Potong (`Cut`) folder-folder skill yang ada di dalamnya (seperti `brandkit`, `design-taste-frontend`, dsb).
4. Navigasi ke direktori konfigurasi global Antigravity Anda:
   `C:\Users\Lenovo Legion 5\.gemini\config\skills\`
   *(Catatan: Jika folder `skills` belum ada di dalam folder `config`, silakan buat foldernya terlebih dahulu).*
5. Tempel (`Paste`) folder-folder skill tadi ke dalam sana.

> [!NOTE]
> Setelah dipindahkan ke folder konfigurasi global, AI akan selalu mengingat prinsip desain ini di mana pun Anda bekerja (di proyek manapun).

---

Selesai! Sekarang Antigravity IDE Anda siap digunakan dengan selera desain kelas atas.
