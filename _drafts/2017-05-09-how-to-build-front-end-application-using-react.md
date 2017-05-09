---
layout: post
title:  How To Build Front-End Application Using React
date:   2017-05-09 09:49:07 +0700
author: M.Insan Rizky
categories: ["kulwap"]
tags: [phpid jakarta, kulwap, react]
---



<a name='more'></a>

**How To Build Front-End Application Using React**

**BY M.Insan Rizky**

**April 2017**

Bismillah..

Assalamu &#39;alaikum sadayana.. ??

Selamat malam dan salam sejahtera bagi kita semua..

Mungkin banyak yang belum kenal saya karena saya jarang nongol di grup atau meetup wkwk..

jadi saya perkenalan dulu..

Nama saya Muhamad Insan Rizky,  panggilannya Insan.  Masih mahasiswa semester 8 jurusan Pendidikan Teknik Informatika dan Komputer di UNJ (J =&gt; Jakarta != Jones) .. ??

Saya juga sambil kerja di Pustikom UNJ,  IT Kampus lah.. udah 1 tahun lebih di sana.

Tinggal di Rawamangun (ngontrak).. aslinya Warunggunung, Lebak, Banten .. pokoknya ujungnya Provinsii Banten deh..

Base saya di PHP, kerja di kantor pake Laravel.  Tapi sering juga silaturahim ke maenan yang lain kayak golang, nodejs, angular, swift, java dkk..yang lagi bikin saya tertarik adalah React.js

Dengan adanya kulwap ini, bukan berarti saya expert di React.js,  justru saya ingin belajar lebih jauh soal React.  Toh saya baru banget belajar lho.. beneran.. baru nyicip2 doang.. kita sama-sama belajar yah.. kalau ada salah, ya dikoreksi.. ?????

Oke, kita mulai ke point nya ya..

**Pengertian React**

React adalah sebuah library javascript yang digunakan untuk membuat aplikasi web dan mobile. React dikembangkan oleh Facebook. Bisa dilihat web whatsapp juga menggunakan react.  Untuk membuat aplikasi mobile (IOS/Android) bisa menggunakan React-Native. Ini sama aja sebenernya kayak React, cuma beda di komponen aja.

Dulu, orang-orang pake jQuery buat ngelola DOM atau data dari front-end.. pake Ajax buat request ke servernya.

**Kenapa sih kita belajar React?**

Ini pertanyaan paling mainstream ketika kita mendengar teknologi baru di telinga kita. Kalau buat saya pribadi, keuntungan menggunakan React adalah kecepatan untuk membangun aplikasi web based dan mobile,  karena teknologinya sama. Jadi gak usah belajar lagi. React-native katanya memiliki performa yang cukup baik mendekati aplikasi mobile aslinya,  misal android pake java.. iOS pake swift.. beda dengan angular, yang merupakan aplikasi hybrid untuk mobilenya.. which is hybrid itu performanya tidak lebih baik ketimbang aplikasi native.

Oke sampe sini ada pertanyaan kah?

**T** --> R-Suretno: Mau tanya Kang, apa sekarang bahas soal redux juga?                    

**J** --> M Insan Rizky: belum om.. masih pengenalan aja.. ??

**R** --> R-Suretno: Oke om, kebetulan lagi coba&quot; juga ?            


Lanjut……

**React native itu seperti apa sih ?**

Banyak developer yang ngomongin redux,  tapi sebenernya ada teknologi sejenis lainnya yang katanya lebih mudah yaitu MobX.

React-native itu sama persis dengan react biasa, cuma nama komponennya aja yang beda.

Jadi kayak kita ngoding bikin web pake react, tapi ini bisa dicompile buat mobile -&gt; apk dan iOS

Kalau pernah nyoba react, pasti bisa react-native...

**Saat kapan/kondisi yang bagaimana bisa dicompile buat mobile ?**

Kalau kita mau bikin aplikasi mobile Om ..

Jadi nanti kita render view nya pake emulator kayak xCode atau Genymotion,  cuma beda platform aja..

Jadi react dan react-native itu 2 hal yang berbeda tapi sama. Kalau mau bikin web based, ya react..

Kalau mau bikin mobile based, ya react-native..

oke kita lanjut ya..

**Yang akan kita buat ini sederhana, antara lain:**

1. Component,

2. State dan Prop,

3. Routing,

4. Rest

Dalam kasus ini, kita akan membuat front-end CRUD dengan React.. terdengar so pretty ez kan yah? ??

**Bahan-bahan yang kita butuhkan adalah:**

1. Node Js -&gt; buat npm npm-an wkwk

2. `create-react-app` -&gt; semacem `angular-cli`.. atau `composer`..

3. `json-server` -&gt; buat backend nya.. jadi gak usah bikin manual..

kita coba pelan-pelan dulu aja :D

**Silakan install dulu bahan-bahan di atas kalau belum diinstall..utamakan nodejs dulu**..

Karena semua dependencies yang kita pake akan kita download menggunakan npm Download | Node.jsnodejs.org

**node js bisa didownload di sini:**

_https://nodejs.org/en/download/_

**kalau udah diinstall, silakan buka terminal/cmd ..**

lalu ketik `npm --version`

…………………………gambar…………………………………………………

Kalau hilal sudah terlihat, berarti sudah terinstall

**R** --> Remo Harsono: &gt; `node --version`

_v6.10.0_

**R** --> Remo Harsono: udah juragaan

**Selanjutnya kita siapkan bahan kedua dan ketiga..**

```npm install -g create-react-app```

dan

```npm install -g json-server```

…………………………gambar…………………………………………………

**R** --> R-Suretno: muhibbudin@katana:`~$ node --version`

_v7.7.2_

ready gan                                          

**Pastikan semua sudah terinstall dengan menjalankan perintah:**

```
npm --version

create-react-app --version

json-server --version
```

Katakan sudah jika semua bahan telah terpasang :D

**R** --> X : node -v

_v4.2.6_

nodejs siap

**T** --> _Z : kira-kira ada spek minimum ga ? kayak nodenya versi berapa ? npmnya ? dll ? 

**J** --> M Insan Rizky: mmm saya kurang tau.. so far pake latest version gak ada masalah kok..

**R** --> Y : node sgtu cukup om                   

**Create-react-app dan json-server nya sudah kah?                                          **

**R** --> Remo Harsono: `npm install -g create-react-app`

_done_

**R** --> Remo Harsono: `npm install -g json-server`

_done_

**R** -->  Y :  in progress ....                      

**R** -->  Y: `npm -v && create-react-app --version && json-server -v`

_3.5.2_

_1.3.0_

_0.9.6_

_SUDAH_

**Oke..**

**Selanjutnya sesuaikan direktori pada terminal terlebih dahulu. Karena kita akan membuat project directory react**

**R** --> _Y : gile mastah ini wkwk

**J** --> M Insan Rizky: gapapa , saya juga pake ini... enak soalnya.. ringan

**create-react-app react-kulwap**

**untuk membuat direktori project react ..                      **

Nanti akan muncul folder dengan nama react-kulwap yang isinya bundle react siap dikembangkan.

**R** --> Juan : w nyimak ya om lagy selesaiin project dlu nih larapel API, dan front pke guzzle

**R** -->  M Insan Rizky: gile pake guzzle.. ggwp pisan juan..

**R** --> Z : oke \*In progress...\* create-react

**R** --> Z : wkwkwkkw GGWP lagy master data ada 10 modul plus login logout dan jwt hrus kelar senin dan w baru selesaiin 2 modul wkwk

**R** -->  Remo Harsono: sekalian pake requests, beautifulsoup

**R** --> Remo Harsono: lanjut juragan rizky

eh masih progress ding

**R** --> Z : oke sudah

**R** --> Remo Harsono: done...

We suggest that you begin by typing:

```
cd react-kulwap

npm start
```

Happy hacking! Salam begal

**T** --> Y : ini kenapa ya ?

```
npm WARN optional Skipping failed optional dependency /react-scripts/fsevents:

npm WARN notsup Not compatible with your operating system or architecture: fsevents@1.0.17

npm WARN optional Skipping failed optional dependency /chokidar/fsevents:

npm WARN notsup Not compatible with your operating system or architecture: fsevents@1.1.1

Success! Created belajar-react at /home/ekojs/Documents/my\_program/react/belajar-react


Inside that directory, you can run several commands:

   npm start

     Starts the development server.

npm run build

     Bundles the app into static files for production.

  npm test

     Starts the test runner.

   npm run eject

 Removes this tool and copies build dependencies, configuration files

     and scripts into the app directory. If you do this, you can&#39;t go back!

We suggest that you begin by typing:

    belajar-react

  npm start

Happy hacking!
```

**J** --> Remo Harsono: fsevent mah cuekin secara itu buat mac

**J** --> M Insan Rizky: gak masalah kok

**Ok kalau udah, masuk ke dir nya..**

`cd belajar-react`

**Terus jalanin servernya**

`npm start`

**R** -->  Remo Harsono: kok ga ada tulisan salam begal ya?

**J** -->  M Insan Rizky: nanti muncul di `http://localhost:3000`

**R** --> Z : oke lanjut klo begitu ?

**Kalau working, maka ketika diakses di browser, akan muncul tampilan default react app                      **

…………………………gambar…………………………………………………

**R** --> Y : Yang terakhir ngeri kali happy hacking

**R** --> Z : Oke berhasil...

**Kurang lebih strukturnya kayak gini:**

Ada node\_modules buat dependencies nya.. public buat html nya.. dan src tempat kita nyimpen component nya..

…………………………gambar…………………………………………………

**R** --> Remo Harsono: berhasiiil. Installer-nya versi begal ya kaya gini ini

**Kemudian  coba buka src/index.js**
```javascript

ReactDOM.render(

  &lt;App /&gt;,

  document.getElementById(&#39;root&#39;)

);

```
syntax ini berarti bahwa komponen App akan ditaruh di DOM dengan id=&quot;root&quot;

syntax import di atasnya untuk memasukkan hal-hal yang dibutuhkan.. :D

Karena react berbasis komponen, maka harus ada 1 komponen utama yang mengayomi semua komponen lainnya. Dalam hal ini, komponen App adalah komponen utamanya.  Komponen App diambil dari src/App.js

Setiap komponen harus memiliki method render yang berguna untuk membuat isinya seperti apa.

**R** --> X : Mirip angular 2 ya  

**T** --> Y : Dy bisa pake template url.gak ?                      

**J** --> M Insan Rizky: Dalam render, dom yang dikembalikan harus dalam 1 tag.. tidak boleh banyak tag..
misal:
```html
&lt;div&gt;

   &lt;h3&gt;Hai&lt;/h3&gt;

   &lt;h4&gt;Jomblo&lt;/h4&gt;

&lt;/div&gt;
```

ini contoh benar

…………………………gambar…………………………………………………

**J** --> M Insan Rizky: tidak boleh seperti ini:
```html
   &lt;h3&gt;Hai&lt;/h3&gt;

   &lt;h4&gt;Jomblo&lt;/h4&gt;
```

**BTW , ini bukan HTML lho..**

Ini namanya JSX... kepanjangannya cek di internet ajah.. wkwk

Syntax javascript namun mirip dengan HTML

**R** --> Suretno: wkwkwk lanjut gan

Untuk pemanggilan class CSS, menggunakan property className.  Bukan class

Untuk css nya sendiri, bisa di-import di komponen atau di public/index.html langsung.

**R** --> Suretno: Btw bantu jawab om @M Insan Rizky , mungkin bedanya kalau angular 2 base on typescript kalau react es6. dan kalau di react mainnya component kalau di angular 1 namanya directive ??

**J** --> M Insan Rizky: kalau diimport di komponen, sama seperti `import &#39;./App.css&#39;;`

**J** --> M Insan Rizky: iya benar.. angular pake typescript.. react pake javascript ES5/ES6

**J** --> M Insan Rizky: angular 1 gak pake komponen.. tapi angular 2 udah pake komponen

**T** --> X : Mski ts tp pke es6 jga ?? bedanya kalau angular gak ada v-domnya kaya react                        

**J** -->   M Insan Rizky: directive lebih mirip ke properties di react

**R** --> emo Harsono: angular 3 malah ga pake apa2                      

**R** -->  Remo Harsono: orang barangnya ada juga kaga, tau2 loncat ke versi 4

**R** --> R-Suretno: Kata siapa yey

http://angularjs.blogspot.co.id/2016/12/ok-let-me-explain-its-going-to-be.html 

Dalam komponen ada namany state dan prop. State bisa dikatakan sebagai variabel yang akan digunakan di class tersebut untuk mengolah data. Sedangkan prop diberikan pada saat komponen tersebut dipanggil.

**Kita coba state dulu ya**

Untuk membuat state, kita harus membuat constructor terlebih dahulu. Pada setiap constructor harus ada super() untuk construct parent class nya.  Untuk memanggil state pada DOM, cukup gunakan curly braces .
```javascript
{this.state.title}
```
**Pantengin ini deh..**

https://codepen.io/insanrizky/project/editor/XJpLJD/

**Ketika state diubah, maka dia langsung membinding ke DOM yang memanggilnya.**

**Silakan buat input text di dalam App-intro**
```html
_&lt;input type=&quot;text&quot; onChange={this.handleTitle}/&gt;_
```

Ini artinya, ketika input tersebut berubah, maka ia menjalankan method handleTitle

**Yang isinya adalah:**
```javascript
handleTitle(event){
   this.setState({
     title: event.target.value
   })
}
```

**setState berguna untuk mengubah nilai state**. **Namun ketika state ini diubah,  state tidak akan langsung berubah hingga method tsb selesai dijalankan..**

**T** --> N : Apa itu state ? apakah mirip kaya SPA
**J** --> M Insan Rizky: kalau di angular, cuma variabel biasa..

model kali yah..

**Method handleTitle tidak bisa dijalankan apabila belum di-\*bind\* ..**

**maka di constructor kita taruh perintah:**
```javascript
this.handleTitle = this.handleTitle.bind(this);
```
**yang artinya, method tsb di-binding pada class itu sendiri**

**R** -->M Insan Rizky: kalau ada yang mau ditanyakan , langsung aja ya...

**R** -->X : hmmm binding gtu?

**J** -->  M Insan Rizky: iya.. binding membinding..

**R** --> Suretno: mungkin semacam `$scope / $rootScope` kali hehe

**J** --> M Insan Rizky: betul.. `$scope` di angular 1 ..

**R** --> M Insan Rizky: ini kayaknya dev angular semua yah? :v

      Akan kuracuni kalian semua ??

**R** -->  Suretno: haha pernah make angular 1 tapi udah lupa_ sekarang



**Oke sekarang kita coba menggunakan prop**

Buat komponen baru dengan nama Sample.js

yang isinya bisa dicek di codepen:

https://codepen.io/insanrizky/project/editor/XJpLJD/

**Kurang lebih Sample.js isinya seperti ini  **

…………………………gambar…………………………………………………

**Intinya kalau mau buat Component, tinggal import React dan Component, bikin class, render, di akhir export, lalu panggil component Sample.js di App.js dengan cara:**

```javascript
import Sample from &#39;./Sample&#39;;
```

**Kemudian sisipkan komponen Sample di dalam render App seperti ini.**
```html
_&lt;Sample something=&quot;INI SAMPLE&quot;/&gt;_
```

Artinya kita memanggil komponent Sample dan menaruh props di dalamnya. Penamaan props itu bebas. Nanti props ini dipanggil dengan cara :
```javascript
this.props.something                     
```
**Gampang kan yah? ??                        **

**Next kita mau pake json-server yang tadi kita buat                    **

**Pertama, buat file json dulu di directory react yang sama.**

misal:

api.json

**Isi dengan:**
```javascript
{

  &quot;posts&quot;: [

    {

      &quot;title&quot;: &quot;Belajar Gak Mesti di Kampus&quot;,

      &quot;author&quot;: &quot;Farid&quot;,

      &quot;content&quot;: &quot;Lorem ipsum dolor sit ame&quot;,

      &quot;id&quot;: 2

    }

]

}
```
**json-server ini akan membuat restul API dari file json yang kita buat. Nanti kita bisa post, get, put, delete, etc ke server ini.**

**R** --> R-Suretno: di folder root gan?\_ /react-kulwap\_ ?

J -- &gt; M Insan Rizky: yap..

 react-kulwap/api.json

**kalau udah,  coba dijalankan json-servernya:**

`json-server --watch api.json --port 3004`

**kita set portnya biar gak bentrok sama react..**

_https://github.com/typicode/json-server#add-custom-routes_

_https://github.com/typicode/json-server_

** coba cek servernya**

** buka di browser**

`http://localhost:3004/posts/2`

**kalau muncul datanya, berarti server udah jalan**

**R** --> -Suretno: sip udah gan :)

**Oke, sekarang kita install lagi dependencies**..

Namanya fetch-on-rest untuk berinteraksi dengan json server tadi

`https://www.npmjs.com/package/fetch-on-rest`

Sebenernya ada banyak open source untuk interaksi ini,  tapi saya pake ini karena terbilang mudah pakenya.
**CodePen Project Editorcodepen.io**

**Kemudian cek lagi**

_https://codepen.io/insanrizky/project/editor/XJpLJD/_

Pertama, kita buat dulu variabel untuk interaksi ke server..
```javascript
this.api = new Rest(&#39;http://localhost:3004&#39;);

componentDidMount()
```

Akan berjalan ketika component akan dibuat.  Di dalamnya kita jalanya fungsi `getPost()`;

Yang isinya untuk mengambil data dari server dan menyimpannya ke state.  Lalu kita binding datanya. Maka ketika data sudah berhasil diambil, ia akan langsung muncul di DOM nya

`insanrizky/react-kulwapreact-kulwap - Front End using Reactgithub.com`

Mungkin cukup sekian dulu kulwapnya..Mohon maaf routing nya gak sempet dibahas..

Buat yang masih penasaran, bisa cek:

**https://github.com/insanrizky/react-kulwap**

Terima kasih semuanya.. selamat malam.. :)

**R** --> R-Suretno: Wkwkwk oke gan terima kasih banyak ilmunya, semoga lain kali bahas yg lebih deep hehe

**J** -->M Insan Rizky: sip ????

**J** --> M Insan Rizky: iya sama2 semuanya .. maaf cuma segitu dulu .. semoga bisa jadi trigger untuk belajar lebih dalam