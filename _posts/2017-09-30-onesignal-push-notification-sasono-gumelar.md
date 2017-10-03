---
layout: post
title:  Onesignal Push Notification
date:   2017-09-30 20:04:27 +0700
author: Sasono Gumelar
categories: ["kulwap"]
tags: [phpid jakarta, kulwap, onesignal, push notification]
---


![OneSignal Push notification](/assets/images/kulwap/onesignal_push_notification.jpeg)

<a name='more'></a>

Haloo semua.. 

Kita mulai kulwap kita malam ini yaa..

Perkenalkan nama saya Sasono Gumelar saya sekarang bekerja di **Terralogiq** sebagai *backend dev*.
malam ini saya akan bawakan materi tentang **OneSIgnal - Push Notification**.

Bagi yang mau join nanti di implementasi harap siapkan android SDK, Cordova, sama Code Editor yang paling nyaman buat kalian semua.. hehehee..

Oke saya mulai dulu yaa.. Kita mulai dari teori-teori dulu kok..

Kita mulai dari...

## Definisi Push Notif

**_Push notification_** adalah pesan yang di *push* dari backend server ke user interface aplikasi mobile, desktop maupun web.
Skenario yang biasanya terjadi adalah di sisi front-end aplikasi client muncul pop up message disertai dengan bunyi alert.

Push notification memberikan kenyamanan kepada pengguna app dalam bentuk informasi yang menarik dan sesuai dengan kebutuhan mereka. Kalau meraka tidak tertarik dengan topik tertentu pastinya mereka tidak akan menginstall app yang berhubungan dengan topik tersebut. Misalnya:
1. Hasil pertandingan segera setelah suatu pertandingan selesai atau bahkan saat pertandingan itu berjalan. Misalnya anda penggemar Persib, namun saat satu pertandingan penting yang dilakoni Persib anda sedang mengikuti event penting yang tidak bisa ditinggalkan. Lumayan kan kalau sewaktu-waktu muncul di handphone anda informasi seperti “Gol oleh Konate lewat tendangan penalty, posisi sekarang 1-0 untuk Persib Bandung”.
2. Informasi lalu lintas yang sangat penting untuk mereka yang sering berkendara di kota-kota besar yang banyak kemacetan. Kalau anda sedang bersiap-siap pulang dari kantor anda di pusat bisnis Jakarta, akan bermanfaat kalau tiba-tiba di ponsel anda muncul informasi “Kemacetan di depan gedung DPR akibat demo, sebaiknya ambil rute lain”.
3. Informasi perjalanan. Misalnya anda sudah memesan tiket pesawat terbang untuk tujuan tertentu. Akan bermanfaat jika kemudian anda diingatkan melalui smartphone anda “Untuk penerbangan anda CX880 tujuan Taipei sudah bisa check in secara online sekarang”.

Dari penjelasan dan contoh yang aku kasih diatas adakah pertanyaan yang mau disampaikan??

tanya:
> Dari penjelasan ini, berarti push notification bersifat broadcast? Bisakah push server memberikan notification secara spesifik hanya untuk user tertentu ?

jawab:
> Bisa sih.. Semua smartphone dapat mengidentifikasi lokasi, dan jika pemilik smartphone mengijinkan, informasi lokasi ini dapat dibagikan, termasuk kepada app publisher. Dengan mengidentifikasi lokasi itu app publisher dapat mengirimkan push notification yang relevan dengan lokasi. Kemarin kita sempat sedikit membahas mengenai location-based marketing.

oke kita lanjut yaa..

Sejarah Push Notification bisa ditelusuri sejak Apple pertama kali mengenalkan service ini pada tahun 2009. Kemudian diikuti Google setahun  kemudian dengan servicenya yang bernama Google Cloud to Device Messaging. Mei 2013 google memperkenalkan “rich notification”. Rich notif dapat berisi image yang berfungsi sebagai action button. Dengan action button user dapat dengan cepat untuk mengeksekusi sebuah procedure seperti memainkan lagu, membuka aplikasi tertentu, dan lainnya. September 2014 Apple menambahkan interactive button pada servicenya. Button ini memberi akses user untuk segera memberikan respon cepat ke app publisher sejenak setelah APNS mempush notif ke device.

Aktor-aktor dalam Push Notification :
1. **OSPNS** : Operating System Push Notification Service. Setiap OS di masing-masing mobile pasti memiliki servicenya sendiri-sendiri.
2. **App Publisher** : App Publisher meng-enable’kan aplikasi client dengan OSPNS, kemudian mempublish aplikasi ke cloud store
3. **Client App** : Menerima noification dari service server

oke kita mulai masuk ke one signal yaa..

## OneSignal

**_OneSignal_** adalah service push notification untuk website dan aplikasi mobile. OneSignal mensupport sebagian besar native dan mobile platform dengan menyediakan SDK untuk masing-masing platform, RESTful server API, dan online dashboard untuk melihat performa, statistik penggunaan maupun operasi push notif.

Beberapa kelebihan jika kita menggunakan OneSignal :
1. **Kemudahan** : Implementasi interface ke GCM/FCM(Google), APNS(Apple). dan web porotocol terkadang susah bagi developer pemula. OneSignal berusaha mengatasi kesulitan-kesulitan tersebut dengan memberikan interface yang mudah.
2. **Fungsionalitas tambahan** : OneSignal menyediakan tools untuk marketing seperti A/B Testing, segment targeting, variable-subtitution, localization, drip marketing, dan konversi tracking.
3. **Support platform** : OneSignal menyediakan SDK untuk sebagian besar cross-platform mobile development seperti Unity, PhoneGap, Cordova, Ionic, React Native, Intel XDK, Corona, Xamarin, Marmalade, Adobe Air, dan Web Push
4. Tawaran terbaik bagi developer adalah **ITS FREE**.. Yaa, OneSignal adalah service tidak berbayar yang memberikan support jumlah notification di berbagai device UNLIMITED. OneSignal menghasilkan uang dari menjual data pada pihak yang hendak pasang iklan dan research company. OneSIgnal juga menawarkan service berbayar pada client yang membutuhkan level privacy data yang lebih tinggi

oke.. Kita lanjut ke implementasi yaa..

## Implementasi menggunakan Cordova

Sekarang saya akan coba praktekan secara langsung juga implemetasi OneSignal menggunakan cordova.. Karena cordova multi-platform maka saya batasi hanya untuk android saja.. Untuk Apple atau platform lainnya bisa dilanjut lain waktu yaa.. hehehee..

Jika memang ada yang mau coba praktek sekarang silahkan buka CLI di laptopnya..

Pertama saya akan create project baru bernama **cobaonesignal**, package name : **com.coba.onesignal**, nama aplikasinya : **cobaonesignal**

syntax di CLI : 
```
cordova create cobaonesginal com.coba.onesignal cobaonesignal
```

![cordova create project](/assets/images/kulwap/cordova_create_project.jpeg "cordova create project")

setelah itu kita pindah folder ke project yang dibuat tadi dengan syntax : `cd cobaonesignal`

kita bisa chek platform yang sudah terinstall di project cordova yang telah kita buat dengan   syntax : `cordova platform ls`

![cordova check platform](/assets/images/kulwap/cordova_platform_ls.jpeg "cordova check platform")

jika belum terinstall apapun maka outputnya di bagian `Installed paltforms` akan kosong

Cordova menggunakan plugin-plugin yang sudah dibuat oleh para developer-developer dunia untuk mengakses resource-resource local platform mobile kita..

![cordova check plugin](/assets/images/kulwap/cordova_plugin_ls.jpeg "cordova check plugin")

Dengan syntax `cordova plugin ls` kita mengechek plugin-plugin apa saja yang sudah terinstall di project folder kita.. jika masih kosong maka akan muncul output seperti diatas.

Sekarang kita tambahkan platform android di project folder kita dengan syntax : `cordova platform add android`

![cordova add platform android](/assets/images/kulwap/cordova_platform_add_android.jpeg "cordova add platform android")

Jika berhasil maka akan keluar output seperti diatas.

Berikutnya kita masukkan plugin cordova dengan syntax : `cordova plugin add onesignal-cordova-plugin --save`

![cordova menambahkan plugin onesignal](/assets/images/kulwap/cordova_plugin_add_onesignal.jpeg "cordova menambahkan plugin onesignal")

chek dengan : `cordova plugin ls`

berikutnya kita buka halaman web [OneSignal](https://onesignal.com "OneSignal's Homepage"){:target="_blank"}

langsung dibagian login.. karena saya termasuk pemalas jadi saya langsung pake akun google saya langsung untuk login.. 😅

Setelah login kita akan masuk ke dashboard akun kita

![dashboard onesignal](/assets/images/kulwap/dashboard_onesignal.jpeg "dashboard onesignal")

klik Add a New app

![onesignal add new app](/assets/images/kulwap/onesignal_add_new_app.jpeg "onesignal add new app")

Saya membuat nama project name nya sama seperti nama project cordova saya yaitu : **cobaonesignal**, 
namanya boleh beda kok..

Setelah itu akan muncul form select platform.. 

Saya akan pilih **Google Android(GCM)** sebagai setting inisiasi.. Nantinya bisa kita setting untuk platform lainnya..

![onesignal select platform](/assets/images/kulwap/onesignal_select_platform.jpeg "onesignal select platform")

Stetelah itu masuk ke bagian Configure Platform.. 

![onesignal configure platform](/assets/images/kulwap/onesignal_configure_platform.jpeg "onesignal configure platform")

Nahh di step ini kita berhenti dulu sejenak di OneSignal untuk loncat ke Firebase Console Developer

tanya:
> wah, mesti pake firebase juga ya

jawab:
> iyaa mas.. OneSignal kan sebenarnya cuma third party aja.. Pengolah sebenarnya ya service di masing2 plaformnya.. Kalo android yaa pake firebase, kalo Ios yaa pake APNS..

tanya:
> mesti pake google cloud juga kah ?

jawab: 
> iyaa mas.. google cloud yang sekarang udah berganti nama jadi firebase

tanya:
> GCP sama firebase adalah service yang berbeda dari pak google.?🤔🤔

jawab:
> maksud saya google cloud messaging (GCM)
kalau GCP(Google Cloud Platform) beda lagi mas.. hehehee..

tanya:
> Firebase setau saya untuk push notification nya berbayar..
Free nya hanya untuk jumlah tertentu saja

jawab: 
> firebase setau saya free. .tapi memang dibatasi lifetime message sama message size'nya.. saya cuman agak lupa berapa angka2'nya.. hehehee..

## Firebase

![Firebase create project](/assets/images/kulwap/firebase_create_project.jpeg "Firebase create project")

di akun saya bikin project sama namanya : `cobaonesignal`

tanya:
> setelah masuk firebase kita pilih mana ?

jawab:
> kan ada link dokumentasi di Configure Platform tadi <https://documentation.onesignal.com/docs/generate-a-google-server-api-key>

![Firebase project settings](/assets/images/kulwap/firebase_project_settings.jpeg "Firebase project settings")

Sekarang sudah masuk di dashboard project firebase.. Klik di bagian setting (icon gear bergerigi) di bagian **project settings**

masuk ke tab **CLOUD MESSAGING** perhatikan parameter server key dan sender id..

![Firebase server key](/assets/images/kulwap/firebase_server_key.jpeg "Firebase server key")

Nahh copy server key firebase, ke field Google Server API key OneSignal.. copy juga nilai Sender ID firebase ke Google Project Number OneSignal.

![copy Firebase server key](/assets/images/kulwap/onesignal_copy_firebase_server_key.jpeg "copy Firebase server key")

Setelah save masukkan masuk ke form **Select SDK**, pilih **PhoneGap, Cordova, Ionic**...

![OneSignal select SDK](/assets/images/kulwap/onesignal_select_sdk.jpeg "OneSignal select SDK")

Setelah itu di form Install SDK kita mendapat App ID

![OneSignal install SDK app ID](/assets/images/kulwap/onesignal_install_sdk_app_id.jpeg "OneSignal install SDK app ID")

Setelah itu kita edit file index di folder `./cobaonesignal/www/index.html`

![Cordova edit file index](/assets/images/kulwap/cordova_edit_file_index.jpeg "Cordova edit file index")

paste source code dasar cordova dibawah ini :
``` html
<!DOCTYPE html>
<html>
  <head>
    <title>Device Ready Example</title>

    <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
    <script type="text/javascript" charset="utf-8">

    // Wait for device API libraries to load
    //
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
    function onDeviceReady() {
        // Now safe to use device APIs
    }

    </script>
  </head>
  <body onload="onLoad()">
  </body>
</html>
```

pada function `onDeviceReady()` masukkan souce code dibawah ini :

``` javascript
window.plugins.OneSignal
.startInit("a14331c7-be5b-49df-aaf7-e65d7286d779")
.handleNotificationReceived(function (jsonData) {
    alert("Notification received:\n" + JSON.stringify(jsonData));
    console.log('Did I receive a notification: ' + JSON.stringify(jsonData));
})
.endInit();
```

di parameter `.startInit()` ---> itu adalah appId onesignal saya..
paste-kan idApp kalian ke parameter startInit("appId")...

![index on device ready](/assets/images/kulwap/index_ondeviceready.jpeg "index on device ready")

ini punya saya..

setelah itu kembali ke CLI jalankan command : `cordova run android` untuk menginstall ke android..

*jika terjadi* 
> Error: Could not find an installed version of Gradle either in Android Studio, bla bla bla...

how to solve
> install gradle, <https://gradle.org/install>

oke.. saya sudah sukses mendeploy ke hp saya.. sekarang kembali ke hal OneSignal klik **Chek Subscribed Users**.. 
Jika Sukses maka akan muncul jenis hp yang terinstal aplikasi OneSignal

![onesignal check subscribed users](/assets/images/kulwap/check_subscribed_users.jpeg  "onesignal check subscribed users")

Nahh pindah ke tab **All Users** maka kia bisa melihat list device yang telah menggunakan service OneSignal di project yg telah kita buat tadi..

![onesignal melihat list device](/assets/images/kulwap/onesignal_list_devices.jpeg  "onesignal melihat list device")

Sekarang pndah ke tab New Message kalau saya pilih Send to Everyone..

![onesignal new message](/assets/images/kulwap/onesignal_new_messages.jpeg  "onesignal new message")

ini isi header sama isi message yang saya inputkan.. setelah itu klik next.. next aja..

![onesignal message](/assets/images/kulwap/onesignal_title_message.jpeg  "onesignal message")

Ini hasil push di hp saya..

![onesignal push message](/assets/images/kulwap/onesignal_push_message.jpeg  "onesignal push message")

Dan ini hasil json yang saya dapat dari OneSignal..

![onesignal json](/assets/images/kulwap/onesignal_json.jpeg "onesignal json")

tanya:
> Klo sdk nya bermaslah gmn ya. Lisensinya sih yg brmaslh. Apakah hrus update

jawab:
> iyaa setau saya emang harus terus diupdate.. commandnya : `cordova plugin update onesignal-cordova-plugin`

tanya:
> Trus ketik cordova run android lg ? 

jawab:
> yaa mas.. jangan lupa hp nyolok ke USB.. 😁

tanya:
> Oke tp iphone mas gmn😇

jawab:
> aduuhhh... kalo iphone next petemuan aja yaa.. Soalnya saya lagi gak pake mac.. saya lagi pake 'jendela' jadi gak bisa praktek yg Ios.. kalo mau Ios mas harus punya akun apple developer which is berbayar, dan buat deploy ke device saya biasanya pake X-Code dari macbook/I-mac..

Oke waktu udah menunjukkan tengah malam.. sepertinya cukup untuk kali ini dulu dan saatnya untuk istirahat sejenak. Semisal masih ada yang penasaran dan masih ingin explore OneSignal silahkan bisa japri saya besok.. Gak usah nunggu2 next pertemuan yaa.. hehehee..  Saya dengan senang hati diskusi tentang hal ini.. Semisal ada salah kata tadi saya mohon maaf yaa.. 🙏🙏

Selamat malam and have a nice weekend semuanya.. Salam.. 🙏

Ohh yaaa.. Satu lagi.. Semua yang bisa dioprek di OneSignal sudah di dokumentasikan dengan sangat jelas dan sangat mudah di : <https://documentation.onesignal.com/docs>
