# Ridwan Maulana — Portfolio

Website portfolio satu halaman yang dibuat dengan React, TypeScript, Tailwind CSS, dan Vite.

## Menjalankan di komputer

Perlu Node.js 20 atau lebih baru.

```bash
npm ci
npm run dev
```

Buka alamat lokal yang ditampilkan Vite.

## Upload ke GitHub

Upload isi folder proyek ini ke repository GitHub. Sertakan `src/`, `public/`, `index.html`, `package.json`, `package-lock.json`, `vite.config.ts`, `tsconfig.json`, `tailwind.config.js`, dan `postcss.config.js`. Jangan upload `node_modules/` atau `dist/`.

## Deploy ke GitHub Pages

Workflow di `.github/workflows/deploy.yml` membangun dan menerbitkan situs setiap kali ada push ke branch `main`.

1. Upload proyek ke repository GitHub.
2. Buka **Settings → Pages** pada repository.
3. Pada **Build and deployment → Source**, pilih **GitHub Actions**.
4. Push perubahan ke branch `main`; alamat situs akan muncul di halaman Pages setelah workflow selesai.

Konfigurasi Vite memakai jalur aset relatif agar gambar dan file hasil build tetap ditemukan pada alamat GitHub Pages berbasis repository.

## Build lokal

```bash
npm ci
npm run build
npm run preview
```

Foto potret tersedia di `public/ridwan.webp`. Gambar latar dan font diambil dari layanan eksternal, sehingga memerlukan koneksi internet saat situs dibuka.
