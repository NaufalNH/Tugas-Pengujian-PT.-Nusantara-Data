# Implementasi Tampilan Login

Jika anda menemukan error hydration saat me-run project ini, itu dikarenakan ekstensi browser seperti colorzila, jadi mohon untuk dinonaktifkan sementara jika anda menemukan error hydration ini.

## Akun

    - Hak Akses
    	Phone   : admin@gmail.com
    	Password: NQlpF5Rieap7QpclD^bP

## Fitur

- **Autentikasi dan Otorisasi**
- **Logout**
- **Visualisasi Data**

## Struktur Folder

- `/app`: Berisi laman page yang ditampilkan.
- `/components`: Berisi komponen-komponen.
- `/api`: Berisi api endpoint ( saya menggunakannya karena api tertujunya http jadi terhalang oleh CORS, jadi saya mennggunakan api ini sebagai penengah ).
- `/constant`: Berisi data yang konstan.
- `/components/auth`: Berisi wrapper untuk otorisasi.
- `/components/chart`: Berisi chart untuk visualisasi data.
- `/components/layout`: Berisi komponen yang akan dipakai untuk layout.
- `/components/modal`: Berisi komponen modal.
- `/components/pages`: Berisi tampilan yang akan ditampilkan ke app.

## Package Yang Digunakan

- `axios`: Untuk send request ke api.
- `js-cookie`: Untuk menyimpan session dan otorisasi.
- `react-apexcharts`: Untuk memvisualisasikan data.

## Alasan Memilih Metode Visualisasi

- `Line chart`: Agar kita dapat melihat naik atau turun-nya penjualan pada setiap bulan.
- `Pie chart`: Agar kita mengetahui apa yang lebih dibutuhkan konsumen dengan mengetahui presentase barang apa yang lebih mudah dijual atau sering dicari konsumen.

## Cara Menjalankan Aplikasi

1. Clone repositori ini ke mesin lokal Anda.
2. Jalankan `npm install` atau `yarn install` untuk menginstal package yang ada (hanya diperlukan sekali setelah clone project).
3. Jalankan `npm run dev` atau `yarn dev` untuk menjalankan project dalam mode development, pada mode development saat berpindah page akan sedikit lama karena akan mengcompile page tersebut untuk memperbarui perubahan.
4. Jalankan `npm run build` atau `yarn build` untuk membuild project jika anda ingin melihat performa project jika seandainya sudah di deploy dan anda juga dapat melihat error ESlint Rule yang tidak akan terlihat jika tidak menjalankan command ini.
5. Jalankan `npm start` atau `yarn start` untuk menjalankan hasil build sebelumnya, berbeda dengan saat mode development yang mecompile setiap file setiap berpindah file pada mode ini project ini hanya menjalankan hasil build yang sudah ada seperti jika sudah dideploy.