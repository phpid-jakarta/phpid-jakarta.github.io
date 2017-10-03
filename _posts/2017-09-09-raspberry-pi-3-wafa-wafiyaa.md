---
layout: post
title:  Installasi dan Remote Raspberry Pi 3
date:   2017-09-09 20:02:27 +0700
author: Wafa Wafiyaa
categories: ["kulwap"]
tags: [phpid jakarta, kulwap, raspberry pi]
---


![raspberry-pi-3-wafa-wafiyaa](/assets/images/kulwap/kulwap-raspi.jpg)

<a name='more'></a>

selamat malam semuanya, mari di mulai kulwapnya ya

jadi untuk kulwap kali ini saya akan berbagi sedikit ilmu mengenai installasi dan remote raspinya

sebelum masuk ke pembahasan kemarin om @RONALD sempat tanya maksud remote itu bagaimana ?

jadi begini karena saya disini menggunakan peralatan yang minimalis dalam installasi dan memasukan program ke raspinya, jadi saya melakukan remote terhadap raspi dengan menggunakan putty

untuk software yang digunakan :
1. Etcher Portable 1.1.2 64 bit
2. EXT Win Trial 
3. Notepad++
4. Putty

karena tadi terjadi kendala teknis pada SD card jadi video saat instalasi akan saya upload nanti yaaa....

## sekilas tentang Raspi

raspi adalah mini komputer yang berukuran sebesar kartu kredit, meskipun ukurannya sangat kecil raspi telah dilengkapi dengan semua fungsi layaknya sebuah komputer lengkap.
raspi menggunakan prosesor ARM, yang dikemas dan diintegrasikan di papan PCBnya 

prosesor ARM sendiri biasanya digunakan sebagai prosesor mobile seperti perangkat android.

kenapa raspi menggunakan ARM sebagai prosesornya? karena ARM memiliki konsumsi daya yang kecil dan lebih murah, input/output dalam raspi  tediri dari HDMI, video analog, audio analog, port USB, pin digital, camera serial interface portt, display serial interface port, lan port, sd card port dll. 

kelebihan raspi bisa digunakan untuk media server, file server berbasis IP, print server, home automation bahkan bisa dijadikan console game

harga raspi dari pertama muncul masih sama yaitu $35

hal-hal yang perlu diperhatikan saat menggunakan raspi yaitu :
1. gunakan power supply dengan kebutuhan arus yang sesuai. Raspi 3 menggunakan power supply 5V 3A ( kapasitas MAX)
2. gunakan SD card berkapassitas minimal 8 GB class 10
3. jangan menyentuh komponen raspi secara langsung ketika masih terhubung dengan arus listrik

[interrupt: by ejs] direkomendasikan matikan raspi sebelum disentuh ato dibolakbalik. 😃 

![Teknik memegang komponen raspi](/assets/images/kulwap/raspi-teknik-memegang-raspi.jpeg "Teknik memegang komponen raspi")


Teknik memegang komponen raspi saat terhubung dengan arus listrik

## cara menginstall OS

lanjut ke cara menginstall OS pada Raspi ya, OS yang saya gunakan dalam instalasi kali ini yaitu Raspbian Jessie desktop , teman-teman bisa mendownload OS nya di web raspi https://www.raspberrypi.org/downloads/raspbian/

setelah mendowload OS, copy kan OS tersebut ke SD card dengan mengunakan aplikasi Etcher 
![tampilan etcher](/assets/images/kulwap/raspi-tampilan-etcher.jpeg "tampilan etcher")
tampilan etcher seperti ini

klik select image, untuk memilih OS raspi yang akan di copy ke SD Card, select drive untuk memiliih SD card yang akan di copy-kan OS raspinya

lalu klik flash untuk memulai proses copy OS ke SD Card

setelah selesai di flash, SD card nya jangan dulu dicabut ya

langkah selanjutnya yaitu mengaktifkan SSH, set IP static dan SSID agar nantinya kita dapat berkomunikasi dengan raspi melalui aplikasi Putty

karena saya menggunakan OS win 8 dan laptop saya tidak dapat membaca boot SD card maka kita bisa menggunakan aplikasi EXT win trial

aplikasi EXT win trial ini sebetulnya berbayar, tapi kita dapat menggunakannya selama 30 hari

setelah itu aplikasi tersebut meminta key untuk mengaktifkannya, tapi kita masih bisa menggunakan versi trialnya lagi untuk 30 hari ke depan namun performanya dalam membaca boot SD card atau external memory lainnya akan berkurang

jika teman-teman menggukan linux, tidak usah menginnstall aplikasi EXT win ini

[interrupt by ronald] *Ada aplikasi alternatif selain EXT itu kah ?*

*ada ka itu bisa menggunakan minitool atau easeUS*

[interrupt by el] *Kek tool buat partisi 🤔*

*yap memang fungsinya EXT win ini untuk membaca pastisi Sd card nya*


sebelum mengaktifkan SSH, set IP dan set SSID + Password

buka notepad++, setting show end of line pada n++ nya agar syntax di n++ OS win 8 sama dengan syntax bisa dibaca di linux  

[interrupt by Ferdyansyah] *Mengapa komponen raspi harus dipegang kak @wafa* 

*Sebetulnya raspi itu ada covernya,  ini lebih aman sih untuk pegang,  tapi kemarin cover raspi saya copot karena saya mau membuat perangkat IoT dengan raspi*

[interrupt by el] 

```
Kalo nggak ?
-Takut ngrusak komponen(konslet dll) 
Apa 
-Takut ksetrum 
?

Arusx gde ga sih itu ?
#gakPernahPegang🤔😌
```

*Lumayan sih bikin seger hhi,  apalagi kalo udah pegang raspi,  buka pintu gagangnya besi uh segerrr banget*
*5 volt 3 Ampere*

Jadi kalo udah pegang raspi usahin grounding dulu ke tembok atau ke kayu

Bisa pakai charger hp sih buat nyalain raspinya

[topanmaulana] *tp tegangan charger hp kn ma  cm 2A*

*Kemarin aku pake yg 2.5 A, Bisa nyala*

Itu 3 A sebener kapasitas max nya

[ronald] *Kalau pegang raspi, usahakan badan gak nyentuh tanah / lantai / pakai sendal, bisa juga pakai plastik pembungkus nya yg abu-abu, itu anti-static* 

Ini hasil dari copy OS ke sd card nya

![hasil dari copy OS ke sd card](/assets/images/kulwap/raspi-hasil-copy-OS.jpeg "hasil dari copy OS ke sd card")

[topanmaulana] *partisinya yg G kak?*

*partisinya yang H*

![hasil dari copy OS ke sd card](/assets/images/kulwap/raspi-hasil-copy-OS-1.jpeg "hasil dari copy OS ke sd card")

di drive bootnya kita buat folder SSID

lanjut untuk setting SSH dan static IP nya

masuk ke partisi SD cardnya lalu cari folder etc

cari file dengan nama dhcpcd.conf

Setelah itu masukan kode berikut ke dalam file `dhcpcd.conf`

```
interface wlan0
static ip_address = masukan ip staticnya
static routers = masukan ip routers
static domain_name_servers=8.8.8.8
```

Masuk lagi ke partisi sd cardnya cari folder `etc\wpa_supplicant`
Dan cari file `wpa_supplicant.conf` 

Masukan kode berikut 

```
network={
ssid="nama ssid"
psk="masukan password ssidnya"
}
```

Setelah menyimpan file tersebut, Buka EXT win dan unmount partisi sd cardnya

Unmount disini dimaksudkan agar si partisi sd card dipaksa untuk menulis codingan yang telah kita buat tadi

Eject sd card dan masukan ke perangkat raspinya

Colok adaptornya dan test dengan ping ip static yang telah kita set tadi menggunakan cmd, Jika sudah dapat terkoneksikan maka dipastikan bisa di remote Melalui putty

Buka aplikasi putty dan masukan ip static yang telah di setting tadi, Masukan username dan password raspinya yaitu username : `pi` password : `raspberry` 

[andana] *maaf, ini default kah?*

*Iyap betul itu defaultnya*

Username dan password ini berlaku untuk semua perangkat raspi ya

Dan setelah itu kita dapat meremote raspinya dengan menggunakan command linux 

Mungkin itu saja yang dapat saya share kepada teman-teman

Mohon maaf ada banyak kekurangan dalam penyampaian materinya

## diskusi 

![3.1A recommended tidak?](/assets/images/kulwap/raspi-3-1-ampere.jpeg "3.1A recommended tidak?")

[hengky] *3.1A recommended tidak?*

*Kapasitas maximal yang saya tau dari raspi nya 5V 3 A,  jika menggunakan 3.1 A belum pernah dicoba hhi*

Untuk raspi sendiri jujur wafa baru kenalan akhir agustus ini,  sebelumnya pernah main di arduino

Btw ada sedikit tips nyari contoh-contoh membuat percobaan dengan raspi dan bahasanya bisa dengan contoh kata kunci "raspi dht11 nodejs"

[el] *Bedax raspi m arduino apa ?trutama pemanfaatanx*

*Perbedaan paling mencolok ada di perangkatnya, Kalo di arduino ada pin analog dan pin digital,  kalo di rapi adanya pin digital aja, Dan masih banyak lagi bedany di perangkat rapi dan arduino*

[riyo] *Apa Raspberry Pi ini bisa menjadi Seperti Arduino? Maksudnya bisa langsung konek ke io/sensor ?*

*Bisa ka, raspi juga bisa dijadikan perangkat IoT* 

Contohnya tadi kan ada komponen camera serial interface port. Kita bisa beli modul camera dan di masukan ke perangkat raspinya

[abubakar] *Installasi ini via kabel data kah? Apa sperti flash smartphone??* 

*Melalu card reader ka,  jadi osnya itu dimasukan ke sd card denganaplikasi etcher*

[ejs] *Biasanya pin analog digunakan untuk apa ya ? Pin digital untuk apa ? Apa beda dr keduanya ?*

*Di arduino sendiri pin analog itu digunakan untuk input output digital,  jadi signal analog yang masuk nantinya akan diterjemahkan ke nilai digital yang mudah diukur,  kalo pin digital. Di arduino itu  hanya bisa menangkap signal berupa 1 dan 0* 

*Kalo di raspi itu pin digitalnya itu disebut juga GPIO singkatan dari general input output, Untuk raspi 3 model b+ punya 40 pin dengan fungsi masing - masing yang sampai sekarang pun saya belum hafal banget wjwkkw* 