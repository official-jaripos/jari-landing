# Anti-AI Web Design Standards (Strict Compliance: Tier 1 - Tier 3)

Rule ini wajib dipatuhi untuk memastikan desain website terlihat profesional, autentik, bermerek, dan **TIDAK terlihat seperti buatan AI (AI-generated template look)**.

---

## 1. Visual Aesthetics & Background (Wajib Hindari Tier 1)
- **Dilarang Menggunakan Purple/Neon Ambient Glow**: Jangan gunakan background ultra-dark (`#000000` / `#0B0F19`) yang dihiasi gumpalan cahaya ungu/cyan blur (`blur-3xl bg-purple-500/20`) di belakang kartu/elemen.
- **Batasi Glassmorphism Berlebihan**: Hindari kartu transparan berantai dengan `backdrop-blur` dan `border-white/10 linear-gradient` di seluruh halaman. Gunakan warna solid, kontras bersih, atau border terstruktur.
- **Dilarang Menggunakan Aset 3D Abstrak & Foto Sintetis**: Jangan gunakan objek 3D melayang (kubus kaca, donat mengkilap) yang tidak relevan, atau foto orang buatan AI (wajah plastik/sintetis). Gunakan screenshot aplikasi nyata, ilustrasi kustom, atau grafik UI bersih.

---

## 2. Tata Letak & Struktur Layout (Wajib Hindari Tier 2 & Tier 3)
- **Hindari Formula Hero Section Kaku**: Dilarang membuat Hero Section dengan pola klise:
  `[✨ Pill Badge]` → `[Judul Teks Gradient]` → `[Subjudul]` → `[2 Tombol (Primary Glow + Secondary Watch Demo)]`.
  *Alternatif*: Gunakan layout *split-screen* (teks kiri + interaktif UI kanan), penataan asimetris, atau single CTA yang bersih.
- **Variasikan Bento Grid & Pricing**: Jangan membuat section fitur atau harga dengan pola 3-kolom yang identik dengan kartu tengah menyala (*glowing*). Sesuaikan hirarki kartu berdasarkan bobot informasi sebenarnya.

---

## 3. Copywriting & Mikro-ikon
- **Dilarang Menggunakan AI Buzzwords**: Dilarang memakai kalimat generik seperti:
  - *"Unleash the Power of..."*
  - *"Empower Your Workflow with Next-Gen Intelligence"*
  - *"Seamless Integration for Seamless Growth"*
  Gunakan copywriting yang *to-the-point*, realistis, dan berfokus pada solusi nyata pengguna.
- **Batasi Sparkle / Magic Icons**: Dilarang menaruh ikon kilau/sihir (`✨`, `✦`, `✧`, `🪄`, `🚀`) di setiap heading atau badge tanpa alasan fungsional.

---

## 4. Tipografi & Font Pairing
- **Wajib Menggunakan Font Pairing**: Dilarang menggunakan hanya 1 jenis font netral (seperti *Inter* atau *Plus Jakarta Sans*) untuk seluruh website. Kombinasikan font dengan karakter unik (misal: *Serif/Display font* untuk Headline + *Sans-Serif* bersih untuk body).
- **Batasi Font Monospace**: Jangan gunakan font *Monospace* (seperti Fira Code/JetBrains Mono) pada badge non-teknis, label harga, atau tag biasa. Monospace hanya untuk kode atau data teknis asli.
- **Hirarki Font Weight Halus**: Gunakan ketebalan bervariasi (`font-medium` 500, `font-semibold` 600) untuk transisi baca yang nyaman. Hindari `letter-spacing` (-0.05em) yang terlalu rapat pada judul besar.

---

## 5. Autentisitas Visual & Social Proof
- **Mockup UI Realistis**: Jika menampilkan grafik/dashboard, wajib sertakan label angka, navigasi, dan data yang masuk akal, bukan grafik garis acak tanpa konteks.
- **Testimonial Autentik**: Testimonial harus memuat studi kasus/metrik nyata (misal: *"Meningkatkan konversi 35%"*) daripada kalimat pujian abstrak generik.
