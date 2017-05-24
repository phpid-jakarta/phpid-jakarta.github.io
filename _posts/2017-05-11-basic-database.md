---
layout: post
title:  Basic Database
date:   2017-05-11 13:14:07 +0700
author: Eko Junaidi Salam
categories: ["kulwap"]
tags: [phpid jakarta, kulwap, database]
---


![Basic-Database](/assets/images/kulwap/Basic-Database.jpg)

<a name='more'></a>

**Basic Database**
**By Eko Junaidi Salam**
**Kulwap 6 Agustus 2016 bersama EJS ```Basic Database```**

Selamat malam,  materi kali ini membahas  pengetahuan dasar tentang database.

**Apa itu database ?**

Database atau basis data adalah sekumpulan informasi yang didesain secara terstruktur sedemikian rupa, sehingga dapat diolah atau dimanipusi.  Database itu sendiri terdiri dari beberapa objek yakni skema, tabel, view, sequence, dan objek-objek  lainnya.

**Berdasarkan tipenya, database dibagi menjadi beberapa tipe :**

1. Flat File Database​

2. Relational Database​

3. Object Database

​4. Object Relational Database



**Apa itu Flat File Database ?**

Flat file database adalah tipe database yang biasanya disimpan pada komputer host. Tipe ini biasanya disimpan dalam bentuk plain text, atau binary file. Tipe database ini biasanya tidak memiliki struktur indexing dan biasanya tidak memiliki relasi antar record. Contoh Flat file database biasanya disimpan dalam format \*.txt, \*.dat, \*.csv, \*.vcf dan masih banyak format lainnya

**Apa itu Relational Database ?**

Relational database adalah tipe database yang telah memiliki struktur relasi antar model pada datanya, biasanya kita menggunakan bahasa terstruktur seperti SQL (Structured Query Language) yang biasa digunakan dalam RDBMS (Relational Database Management System). Contoh dari tipe database ini sangat beragam, seperti MySql, Postgres, dll.

Tipe ke 3 adalah Object Database.

**Apa itu Object Database ?**

Object Database atau yang biasa disebut  **Object Oriented Database (OODBMS)** adalah tipe database yang berbentuk object yang hampir mirip dengan object oriented programming. Kalo relational database berorientasi pada tabel, maka object database adalah hybrid database yang menggunakan pendekatan relational dan object database. Kalo RDBMS menggunakan SQL, maka OODBMS menggunakan OQL untuk mengakses datanya. Contoh OODBMS lumayan banyak, namun  saya tidak akan membahasa lebih mendalam untuk tipe database ini. Contoh dari Object Database : db4o, florid, framerD, H-pcte, lincks, Ke texpress, mood sx, O2 Object Database, Objectify/DB, ozone, dan banyak lainnya.

Tipe ke 4 adalah object-relational database.

**Apa itu Object-Relational Database ?**

Object-relational database adalah tipe database yang mirip dengan relational database, tapi dengan model yang mirip dengan object-oriented database.

Tipe object-relational database ini katanya sebagai jembatan yang mengakomodasi relational database dan object database.

Tipe jenis ini bisa dikata penggabungan relational database dan object database, dimana tipe ini mendukung object, class, dan inheritance.

Oh iya jangan salah, 2 database diatas adalah database yang juga mendukung tipe flat file database, database relational, object database dan object-relational database.

**Untuk tipe database sudah... materi ini akan saya kerucutkan hanya ke relational database.**

Berbicara database, juga pasti kita berbicara dengan UML (unified modelling language) bahasa yang digunakan dalam mendesain relational database.  Ada banyak UML, yang biasa saya pake mysql workbench dan powerdesigner. UML biasa kita gunakan untuk mendesain conceptual data model (CDM) maupun physical data model (PDM) pada suatu relational database.

Dalam mendesain database, kita perlu memahami beberapa hal tentang database.

- pertama kita harus mengenal object-object  pada database
- Kedua kita perlu tahu bagaimana melakukan normalisasi database.

**Yang Pertama...  \*Object-Object Database\***

Object database ada : tabel, view, query, function, prosedur, package, sequence, dll.  silahkan ditanyakan nanti bila ada yang ingin ditanyakan.

**Yang Kedua...  \*Normalisasi Database\***

 Normalisasi database memiliki 3 bentuk normalisasi.

1. Bentuk pertama, meliputi pembuatan objek data kedalam bentuk tabel.

2. Bentuk kedua, mendefinisikan relasi 2 antar tabel yang berelasi.

3. Bentuk Ketiga, melakukan pemetaan dari hasil relasi-relasi tabel tersebut.

Mempelajari normalisasi database berarti juga kita mempelajari Database Relationship.

**Apa saja relasi pada database ?**

1. Relasi one to one relationship

2. Relasi one to many dan many to one relationship

3. Relasi many to many relationship, dan

4. Self Referencing relationship, relasi yang mereferensikan dirinya sendiri.

Berbicara Relationship, kita juga pasti berbicara bahasa query yang digunakan untuk multiple database yang berelasi yakni **JOIN**.

**Tipe join meliputi cross join, natural join, inner join, left join dan right join**.

Oke sekarang kembali lagi to the top, database...

Berbicara database kita juga perlu berbicara tentang performa, security dan availabilty dari database itu sendiri. Performa disini kita bisa lihat ** Storage** salah satunya.  Storage dari masing-masing  database bisa berbeda diantara satu sama lain, namun pada dasarnya  storage ini uda pasti meliputi internal maupun eksternal level dari arsitektur database itu sendiri.

Secara level internal database menyimpan berbagai macam informasi terkait  metadata dari setiap objek yang ada pada database. Secara level eksternal biasanya objek data pada database disimpin secara permanen didalam sebuah  permanent storage, dan biasanya proses ini ditangani oleh database  engine atau bisa disebut  storage engine.

Selanjutnya ada yang namanya **Materialized View** atau saya singkat **MV.**

MV biasa digunakan untuk meningkatkan performa dalam menyajikan data pada database, penggunaan MV ini sendiri ada kekurangan maupun kelebihan,   sehingga perlu disesuaikan pemakaiannya.

**Selanjutnya ada istilah replikasi/mirror/clone biasa digunakan dalam database.**

_Apa tujuannya ?_

Tujuannya biasa digunakan dalam proses backup database. Replikasi/Mirror/Clone biasa disebut dengan Cold Backup karena tidak dilakukan setiap saat.

_Lha terus yang dilakukan setiap saat itu apa namanya ?_

Namanya adalah **Sinkronisasi  atau Database Synchronization.**  Biasanya disebut dengan **Hot Backup** karena database akan selalu tersinkronisasi dengan database utama (inti/ primary database).

Replikasi maupun Sinkronisasi adalah 2 hal yang berbeda sesuai penjelasan saya diatas, dan  penanganannnya pun juga berbeda..

