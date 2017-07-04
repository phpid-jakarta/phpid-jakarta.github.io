---
layout: post
title:  PHP Basic
date:   2016-05-21 09:49:07 +0700
author: Nico Susanto 
categories: ["kulwap"]
tags: [phpid jakarta, kulwap, yii framework]
---


![Yii-Framwork](/assets/images/kulwap/yii-framework.jpg)

<a name='more'></a>

Hallo selamat malam, malming ini saya akan kulwap tentang
pengenalan salah satu PHP Framework yaitu Yii Framework.

Framework ini memang kurang populer dibanding laravel, tapi
saya tetap menggunakannya karena memiliki fitur-fitur  yang sangat membantu untuk proses developing
aplikasi web. 

Tujuan saya memberikan kulwap ini adalah untuk
memperkenalkan Yii Framework kepada programmer-programmer yang belum memakai
framework dan juga membawa misi propaganda dari Grup Yii Framework Indonesia .

 

**Pengalaman  Nico**

Saya memakai Framework Yii mulai dari tahun 2013 ketika
kuliah. Dimulai dari versi 1 hingga versi 2. Yang akan saya bawakan adalah Yii
Framework versi 2, karena versi 2 mengadopsi berbagai macam teknologi web yang
baru seperti Ajax, elastic search, redis. 

**Keunikan dari framework ini adalah:**

-         
Sudah include bootstrap css framework, sehingga
kita tidak perlu capek-capek untuk mengintegrasikan css framework, dan ini juga
bisa diganti kalo kita tidak suka dengan bootstrap css framework.

-         
Bukan hanya boostrap, jquery, jquery ui,
markdown editor juga sudah include di framework ini, jadi ini framework sangat
komplit untuk membangun sebuah aplikasi web/website. 

 

*Bagaiman ada pertanyaan / pernyataan?*

 

&lt;*BREAK A SECOND* &gt;

 

**T** -> Kak Rifki : Saya mau nanya dong, emang
untuk integration theme Yii magic banget, di  masukin code jadilah theme admin panel yang
dinamis dan sistem gii crudnya. 

Yang jadi pertanyaan, saya merasa kesulitan untuk memahami / menggunakan
penamaan method di Yii,  gimana untuk
gampang memahaminya?
 

**J** -> Nico : Saya jawab
pertanyaan @rifky ya. Penamaan method untuk apa? 

Kalo controller sama setiap awal kata harus memakai huruf kapital dan diakhiri  dengan kata Controller

contoh : -&gt; AdminController -&gt; ManajemenUserController -&gt;

 

Kalo method di controller diawali dengan kata action,

contoh : -&gt; indexAction -&gt; viewAction  

bagaimana? 

 

**T** -> Kak Rifki :  Kemarin saya coba fiktur upload metode code
tambahan, karena di gii cuma tipe text benera ga? input type file, tapi
proceessnya Om..

Saya buat di controller, tapi methodnya saya belum paham. Harus cari refrensinya.

Misal kayak :  UploadedFile::getInstance($model,
'banner_image'); dan penulisan harus ada Yii::$app-&gt;request-&gt;post()
didepannya ada Yii.

Cara pahamin gimana  Om..?
 

**J** -> Nico :
*actionIndex * actionView fiktur upload?

Untuk memakai Yii harus paham OOP dulu, maksud kedua penulisan itu :

            
1. dia memanggil method static pada class UploadedFile             
2. dia memanggil property static pada class Yii  

**T** -> Fauzan : Yii saya install gagal mulu,  itu biasa terjadi kenapa yak Om?

**T** ->
Majeed    :Tanya dong,
pernah instal composer, gii lewat cmd dan berhasil, tapi pas instal Yii gak  berhasil kenapa ya?

Teru 
apa kita ga usah instal lewat cmd, pake downlod winrarnya aja? 

 

**J** ->
Nico  :
@Majeed kalo install Yii2 lebih baik pake composer, walaupun lambat, karena  ini metode paling mudah. 

  
**Yang harus diperhatikan saat install Yii2
via composer:**

-         
 pastikan
asset plugin composer sudah terinstall composer global require
"fxp/composer-asset-plugin:~1.1.1" 

-         
salah satu fitur unggulan Yii2 yaitu GII (code
generator), kita bisa mengenerate codingan untuk controller/model/module/
dan **CRUD**,
jadi kita tidak perlu repot-repot untuk membuat CRUD untuk data master di Yii2

-         
terdapat fitur module, jadi kita bisa membuat
aplikasi kita modular / istilahnya HMVC dan HMVC ini sudah build in out of the
box

-         
ActiveRecord nya Yii2 sangat mempermudah dalam
menyimpan data ke tabel, kalo native kita sering ketik-ketik SQL query, di Yii2
kita tidak perlu lagi hal seperti itu, kita cukup membuat  file model yang mempresentasikan sebuah tabel
dalam database 

-         
untuk masalah relasi antar tabel, di Yii2 juga
sudah build in, jadi setiap file model di Yii2 dapat saling berelasi.

 

Bagaimana ada pertanyaan? Sampai jam berapa kulwap nya..? 

 

**R** ->
Kak Arip   :Tadi
 Om yang atas ada yang nanya kenapa gagal
install Yii, ada pesan errornya? 

 

**R** -> Adzim     :Om
Majeed... ditanyain errornya Kak Majeed ..

 

**T** ->
Majeed  :Aku
terusin ya, tadi setelah composer-asset-plugin 1.1 apakah itu Yii sudah
trinstal ? Oz giliran instal Yii lewat cmd gagal trus....? Apa ada cara yang
lain?  

 

**J** ->
Nico         : Belum asset plugin itu downloder
untuk boostrap, jquery setelah install aset plugin install Yii2 nya  composer create-project --prefer-dist
yiisoft/yii2-app-basic basic 

 

**R** ->
Majeed         :Nah bener
Om, itu persis seperti itu kode yang dimasukin ke cmd dan belum ada hasil. Saya
buka dulu deh laptopnya, barangkali masih ada ss.imagenya.

 

**R** ->
Kak Arip       :
Composer memang lambat Om... Pastikan inetnya cepat 

 

**J** ->
Nico           :Install
lewat composer memang memakan waktu lama, apalagi kalo kita make provider ISP
nya yang buat HP, biasanya pake proxy. 

 

**R** ->
Kak Surya        : Maaf
menyela, untuk mempercepat composer: 

               
1. Matikan dulu xdebug atau debuger lain 

              
 2. Untuk melihat progress
biasakan pakai -vvv dibaris terakhir agar keliatan stacknya 

 

**T** ->
Majeed    :Om Nico...
Tadi dikatakan fitur unggulan Yii adalah gii. Apakah hanya untuk generate
CRUD?Bagaimana untuk report generator?

 

**J** ->
Nico           :Report
generator tidak ada, karena terlalu spesifik kalo kata orang orang  Yii2, it's too overhead.  Oh iya, kalo fitur-fitur  Yii2 dirasa ada yang kurang, komunitas Yii2
menyediakan extension-extension untuk Yii2.

             
 **_Extension merupakan library-library
dari pihak ketiga untuk ditambahkan ke Yii2._**

 

**T** ->
Kak Surya        :Apakah
generator di Yii masih sama seperti v1.? Maksudnya, codenya berulang-ulang? 

 

**R** ->Nico           :Contohnya
berulang-ulang? 

 

**R** ->
Kak Surya        :Controllernya
method diulang-ulang sehingga codenya redudan

 

R->Nico
            :Oh..
maksudnya setiap controller crud punya method yang sama?

 

**R** ->
Kak Surya        :Iya Om...
codenya dicopas lah gitu cuma dirubah modelnya aja.

               
Dulu soalnya Yii1 gitu,  sehingga
codenya redudan

 

**J** ->Nico            :Iya Om,
masih begitu

 

 

 

   ****** NICO******                 Ok, itu baru
pembukanya ya..      

 

 

**Persiapan
Menginstal Yii2**

** **

Untuk
menginstall Yii2 yang harus dipersiapkan :

-         
Web Server + PHP + DB Server web server
pakai  yangmudah saja apache, 

-         
Untuk php minimal php versi 5.4

-         
Database 
kita pake yang gampang MYSQL

-         
Composer jangan lupa diinstall, pastikan php dan
composer diinstall secara global maksudnya

-         
Kalau kita ketik php -v atau composer -v keluar
outputnya

-         
Kalau  semua
sudah beres kita install composer plugin, fungsinya adalah untuk mendownload
assets javascript, css, font seharusnya sih untuk install javascript,css,font
pake package manager bower, tapi Yii2 lebih memilih one tool for all job

-         
Setelah install composer plugin kita install Yii2
nya 

-         
Yii2 terdapat 2 template aplikasi basic dan
advance, kalo advance frontend dan backend diletakan terpisah, sedangkan kalo
basic digabung. Saran saya sih pake yang advance saja, karena ada beberapa
kelebihan, seperti :

·        
migration untuk tabel user sudah disediakan
perintah untuk melakukan install composer plugin composer global require
"fxp/composer-asset-plugin:~1.1.1" 

·        
perintah untuk melakukan install Yii2 basic
composer create-project --prefer-dist yiisoft/yii2-app-basic basic perintah
untuk melakukan yii2 advance composer create-project --prefer-dist
yiisoft/yii2-app-advanced yii-application

·        
perlu diingat kalo kita mau install Yii2 lagi,
kita tidak perlu install composer plugin, jadi composer plugin diinstall sekali
saja.

-         
Setelah install Yii2 advance berhasil, kita cek
requirement apakah environment kita sudah layak untuk menjalankan Yii2.

-         
Akses ke requirement.php dalam folder project Yii2
pastikan mb string, file info, php gd, intl telah aktif. Kalo mb string, file
info, php gd, intl extension php belum aktif, nanti Yii2 ga bisa digunakan
secara maksimal

-         
File_info dibutuhkan untuk upload file, int
dibutuhkan untuk localization gd dibutuhkan untuk captcha

-         
kalo sudah memenuhi syarat nya kita lakukan init
Yii2 nya.

-         
Init ini berfungsi untuk menentukan environment
project kita, apakah production / development 

 

Ada pertanyaan?

 

**T** -> Kak Soni         :Gak ada print screen ya ?         

 

**J** ->
Nico           :Ada,
tenang Om… salah satu yang buat pemula sulit yaitu terdapat token yang harus
diisi.  Ini token diisi karena kena limit
dari github nya.

               
Cara mengatasinya: klik aja link yang ke github untuk generate token nya.
Dengan kata lain kita wajib punya akun github.

              

**T** -> Majeed  : Kalau
untuk pemula newbie apa saja yang disiapkan ya?

**J** -> Nico            : Yang
harus dipersiapkan:

             1.
gunakan OS nya linux, kalo mau mudah dalam develop web

2. harus suka pakai command line,
dibanding gui  

       @majeed udah punya akun
github? 

  
karena rata-rata tools buat programming dibuat di atas unix 

**R** -> Kak Surya    :Karena hampir
100% webhosting murah itu pakai linux

**T** -> Majeed        :Aplikasi
github ya buat program nya jalannya di linux gapapa  Om?

Di Grup PHP Indonesia kan banyak
tuh yang bermasalah xampp nya, ga   mau
start kalo di linux hal ini sangat jarang terjadi. 

                  Itu
masalahnya Om,  kayaknya harus instal dari
awal lagi dah, oz yang udah lupa akunnya.... 

**T** -> Kak Hifzon  : Mas Nico mau
tanya, ane mau migrasi windows ke linux ..

 Kira-kira distro linux apa yang bagus khusus
programming ? 

**J** -> Nico               : Linux
yang paling mudah ubuntu, kalo ubuntu nya berat pake versi varian nya xubuntu /
lubuntu / ubuntu mate 

**R** ->Kak Hifzon   :Makasih Mas
jawabannya

 

 

😂😂 😂😂😂😂🙂  == *CLOSED* ==  😂😂
😂😂😂😂🙂  

 

Saya tutup
dulu ya..

Terima
kasih yang telah mau membaca celotehan saya

wkwkwk saya
mau bocin dulu 

 

 

~~~~Welcome
*Jomblo*...Waktunya *OOT*~~~~~