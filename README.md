
# Hi, Kami dari kelompok 5 Tubes LASTI ITB! 👋


## 🚀 About US
Perkenalkan kami dari kelompok 5 Tubes Layanan Sistem Teknologi Informasi (LASTI) ITB 2023. Kami berlima berasal dari Kelas STI (Sistem Teknologi Informasi) 2021 dan sedang menalani semester 5 di ITB. Github kali ini kami tujukan untuk memenuhi salah satu tugas besar atau tugas akhir dari mata kuliah layanan sistem teknologi informasi. Tugas besar ini mencakup laporan dan juga implementasi dari sebuah layanan asrama yang kami sebut sebagai DORM-X dalam bentuk web service. Website yang kami kembangkan didasarkan pada model SOAML yang telah kami rancang pada laporan dengan mengambil satu proses bisnis inti yakni layanan penghuni

# DORM-X 
Dorm-X adalah sistem yang mampu mengelola fasilitas sebuah asrama secara efisien dan modern. Dalam hal ini kami akan mengimplementasi salah satu inovasi didalam proses bisnis DORM-X yakni proses bisnis "pelayanan penghuni". Layanan ini bertujuan untuk memberikan pelayanan tambahan kepada penguni melalui sistem website. Perlu diperhatikan bahwa bentuk inovasi yang kami lakukan terhadap proses bisnis "pelayanan penghuni" adalah otomasi yang artinya kami melakukan suatu sistem terdigitalisasi dengan proses yang lebih efektif dan efisien. 

Secara garis besar, layanan ini memiliki proses bisnis sebagai berikut : 

1️⃣ Penghuni melakukan registrasi akun Dorm-X \
2️⃣ Penghuni melakukan login kedalam website Dorm-X sesuai   dengan \
3️⃣ Penghuni melakukan pemilihan sesi sesuai ketersediaan jadwal kebersihan dan memberikan catatan khusus terkait layanan kebersihan yang akan diberikan oleh pengelola kebersihan asrama \
4️⃣ Penghuni menekan tombol "order" dan akan menunggu hingga pesanan di terima oleh admin \
5️⃣ Status pesanan akan terdiri dari 3 yakni "requested", "In Progress", dan "Done" \
6️⃣ Jika kamar selesai dibersihkan, maka status pesanan akan menjadi "Done" dan total tagihan penghuni akan ditambahkan secara otomatis kedalam masing masing profile penghuni \
7️⃣ Penghuni bisa melakukan logout untuk menjaga keamanan akunnya



# Tutorial
Berikut ini adalah DOKUMEN Tutorial untuk penggunaan Layanan WEBSITE DORM - X


[TUTORIAL PENGGUNAAN LAYANANA DORM-X](https://docs.google.com/document/d/1VUY7j_HhYt-MaAJ6WMq1V4lby5zaYKN5eZntsiRX4yE/edit?usp=sharing)


## Deployment

Untuk menjalankan Sistem Dorm-X silahkan akses link berikut ini : 

[Dorm-X](https://github.com/amjadadhie/DORM-X)


## API Reference and API Contract

```bash
Api Reference dan API Contract dapat dilihat melalui link berikut ini : 
https://docs.google.com/document/d/1e299Te7LBFQba4Yvg2vzJwYpTkd7NxKhP_sSCtV7Ro4/edit
```


## Environment Variables

Berikut ini adalah environment Variables yang kami miliki untuk mengakses database kami secara public

`NEXT PUBLIC SUPABASE_URL=https://pgcpmyruzimwvrfxjukr.supabase.co`

`NEXT PUBLIC SUPABASE ANON KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnY3BteXJ1emltd3ZyZnhqdWtyIiwicm sZSI6ImFub24iLCJpYXQiOjE3MDEyNjg4MDMsImV4cCI6MjAxNjg0NDgwM30 auKmIoUOyHVq9bBiEC-7H4BkAlYmsZlbreJxl1sPdcQ`

`DATABASE URL="postgresql://postgres:lastimantap2023@db.pgcpmyruzimwvrfxjukr.supabase.co:5432/postgres"`

## Color Pallete

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Dark blue | ![#4D82B6](https://via.placeholder.com/10/4D82B6?text=+) #4D82B6 |
| Darker blue | ![#11406A](https://via.placeholder.com/10/11406A?text=+) #11406A |
| White| ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |
| Yellow | ![#FDD57C](https://via.placeholder.com/10/00b48a?text=+) #FDD57C |
| Red | ![#FC97A3](https://via.placeholder.com/10/FC97A3?text=+) #FC97A3 |
| Gray | ![#787B7E](https://via.placeholder.com/10/787B7E?text=+) #787B7E |
| Light Blue | ![#74C0E3](https://via.placeholder.com/10/74C0E3?text=+) #74C0E3 |
| Green | ![#66B19B](https://via.placeholder.com/10/66B19B?text=+) #66B19B |



## Skills Required 🛠️

- **NextJS**: Pemahaman NextJS framework dalam membangun website secara fullstack.
- **TypeScript**: Pemahaman dalam menggunakan bahasa typescript untuk membangun logic dari frontend maupun backend .
- **Tailwind** : Memahami cara kerja tailwind sebagai framework dari styling frontend atau tampilan antar muka sistem
- **JSON**: Memahami fomrmat JSON untuk request dan response data.
- **HTTP**: familiar dengan metode HTTP dan status kode.
- **Supabase** : Memahami struktur database relational dan mengetahui cara membangun logikanya didalam program backend
- **Client-Server Model**: Memahami arsitektur dari client-server architecture.
- **API** : Memahami cara kerja API dan penggunaannya dalam melakukan GET, POST, PUT/PATCH, dan DELETE 
- **Microsoft Azure**: Experience with Microsoft Azure for server management.

## Tech Stack

**Frontend:** NextJS, TypeScript, Tailwind

**Backend:** NextJS, Prisma

**DB:** Supabase


## Library 

- **React-Icon** 
- **Flowbite** 
- **bcrypt** 
- **NextAuth** 
- **react-hot-toast**
- **react**
- **next**
## FAQ 🤔 - Penghuni

#### Q: Bagaimana cara untuk me-request layanan kebersihan kamar?

A: Dengan mengisi bagian "Room Cleaning Request" yang ada di sebelah kanan layar. Anda cukup memilih sesi yang tersedia dan menuliskan pesan tambahan jika diinginkan. Setelah itu, Anda dapat langsung menekan tombol "Order", dan request pun terkirim.

#### Q: Kapan kamar saya akan dibersihkan setelah me-request layanan kebersihan kamar?

A: Kamar Anda akan dibersihkan oleh petugas kebersihan kami satu hari setelah Anda mengajukan request pada sesi yang Anda pilih.

#### Q: Apakah saya harus berada di kamar saya ketika petugas kebersihan membersihkan kamar saya?

A: Tidak. Anda dapat berada di mana saja ketika petugas kebersihan kami membersihkan kamar Anda. Petugas kebersihan kami memiliki kunci cadangan untuk membuka kamar Anda saat hendak dibersihkan.

#### Q: Bagaimana cara untuk melihat request layanan kebersihan kamar yang sudah saya pesan?

A: Dengan melihat bagian "Current Order" yang ada di sebelah kiri layar. Anda dapat melihat request layanan kebersihan kamar yang sedang berlangsung lengkap dengan informasi berupa nomor kamar Anda, sesi, tanggal, dan status pembersihan kamar.

#### Q: Bagaimana cara untuk melihat total tagihan saya?

A: Dengan melihat "This Month's Total Bill" pada bagian "Profile" yang ada di sebelah kiri layar di bawah "Current Order". Anda dapat melihat total tagihan layanan kebersihan kamar Anda bulan ini.

## FAQ 🤔 - Admin

#### Q: Bagaimana saya bisa menugaskan petugas kebersihan pada request kebersihan yang ada?

A: Dengan mengklik tombol dropdown di kolom "Petugas" pada tabel yang tersedia. Anda dapat memilih petugas yang mana yang akan Anda tugaskan untuk membersihkan kamar terkait. Setelah itu, harap menekan tombol "Save" untuk menyimpan perubahan.

#### Q: Bagaimana saya bisa mengubah status pembersihan kamar?

A: Dengan mengklik tombol dropdown di kolom "Status" pada tabel yang tersedia. Request yang diterima secara otomatis akan memiliki status "Requested". Anda dapat mengubah statusnya menjadi "In Progress" ketika petugas kebersihan sedang membersihkan kamar terkait, dan "Done" ketika kamar selesai dibersihkan. Setelah itu, harap menekan tombol "Save" untuk menyimpan perubahan.

#### Q: Mengapa tidak ada kolom tanggal pada tabel data request kebersihan kamar?

A: Karena data request kebersihan kamar yang ditampilkan hanya data request pada tanggal saat ini dan tanggal keesokan harinya demi mempermudah Anda untuk melihat data request yang terkini saja.
## Features

- Room Cleaning Request (Request Layanan Kebersihan Kamar)
- Current Order (Informasi Request Saat Ini)
- Profile and Total Bills (Profil Pengguna dan Total Tagihan)
- Admin Dashboard (Dasbor Admin)
    - Assign (Menugaskan Petugas Kebersihan)
    - Status (Mengubah Status Pembersihan Kamar)
## Feedback

Jika Anda memiliki feedback/umpan balik terhadap layanan ini, mohon hubungi kami melalui salah satu kontak di bawah ini:
- Marvel: marvelsubekti@gmail.com
- Auva: auvarifqi@gmail.com
- Raka: rakaadmiharfan@gmail.com
- Christina: christina21.wijaya@gmail.com
- Amjad: 18221170@std.stei.itb.ac.id

## Dokumentasi Laporan dan juga PPT 
Dokumentasi Laporan : [Laporan Tugas Besar
II3120 Lasti
Dorm-X](https://docs.google.com/document/d/1sq9uMqK55Hkd6agdI6DfNBiQo11Ck_CJLN6fos5w3Ls/edit?usp=sharing)

Dokumentasi Presentasi : [PPT LaSTI Service Engineering Dorm-X](https://www.canva.com/design/DAFzAODnm9c/L_U1JtvB-ol_XQNgtKYbkw/edit?utm_content=DAFzAODnm9c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) 

Dokumentasi Design UI/UX Website : 
[Figma Design UI UX](https://www.figma.com/file/snVusUolRkjyejYRFMtsxL/Dorm-X?type=design&node-id=0%3A1&mode=design&t=kupvJiFIp2zTcj1y-1)
## Contributing

Berikut ini adalah pembagian tugas masing masing untuk tugas besar ini : 

- Marvel Subekti : 18221058
` Frontend Engineer, Documentation, Final Report and Presentation `

- Auvarifqi Putra Diandra : 18221060
` Backend Engineer, Final Report and Presentation `

- Raka Admiharfan Fatihah : 18221094
` Frontend Engineer, Backend Engineer, Final Report and Presentation `

- Christina Wijaya : 18221106
`UI/UX Designer,Documentation, Final Report and Presentation `

- Amjad Adhie Prasetyo : 18221170
` Frontend Engineer, Backend Engineer, Final Report and Presentation `

