---
layout: post
title:  Basic Bash Programming
date:   2017-05-04 09:49:07 +0700
author: Eko Junaidi S
categories: ["kulwap"]
tags: [phpid jakarta, kulwap, basic bash]
---


![Basic-Bash-Programming](/assets/images/kulwap/Basic-Bash-Programming.jpg)

<a name='more'></a>

Assalamu'alaikum Wr. Wb.
Sebelum kita mulai, mari kita berdo'a menurut agama dan kepercayaan masing2. Berdo'a mulai....
              
Berdo'a selesai...                        
Sebelumnya kita akan membahas mengenai Basic Bash Programming...                                         
Oke kita mulai.                        
Basic Bash Programming adalah salah satu bahasa bash program dan merupakan bahasa umum yang digunakan dalam distro linux. Di dalam UNIX Systems terdapat beberapa jenis tipe bash itu sendiri,  misal saya menggunakan Distro Ubuntu 16.x  maka ketika saya jalankan perintah :

```bash
cat /etc/bashs 
# /etc/bashs: valid login bashs
/bin/sh
/bin/dash
/bin/bash
/bin/rbash
```

hasilnya seperti itu

Ada `/bin/sh, dash,bash, rbash`                    

Selain dari itu, ada pula jenis bash yang lain seperti :
1. `csh`
2. `tcsh`
3. `ksh`                      

Apa itu ? 
Mungkin dari sebagian yang disebutkan ada beberapa yang familiar ada yang unfamiliar.                       

**R** --> Fredy : Gue cuma tau `bash` dan `sh`. Sisa nya nga pernah denger                                       

Apa sih itu semua ?
1. `sh` atau _bourne bash_ adalah bash original dari UNIX Systems, bahkan android masih murni menggunakan `sh`, dalam konsolnya.                        
2. `bash` atau _bourne again bash_ adalah bash standard milik GNU bash, disebut juga superset karena dia telah memiliki fitur dan addon yg lebih banyak dari sh.                       
3. `csh` atau C bash adalah bash yang menggunakan bahasa pemrograman menyerupai bahasa pemrograman C.           
4. `tcsh` atau TENEX C bash adalah superset dari C bash yang biasa namun memiliki kemampuan lebih dari csh, bash jenis ini banyak disebut Turbo C bash                        
5. `ksh` atau Korn bash adalah superset bash tingkat lanjut dari Bourne bash yang tidak direkomendasikan untuk pemula, dimana bash ini dibangun oleh orang2 dengan background UNIX user.                      
6. `dash` atau Debian Almquist bash adalah bash yang mengimplementasikan POSIX yang sangat kecil dan ringan, merupakan turunan dari `ash` (the Almquist bash) dimana dash ini mulai digunakan saat DebianSqueeze dan Ubuntu 6.10.
7. `rbash` atau Restricted Bash adalah salah satu Linux bash yang melakukan restrict terhadap beberapa fitur pada bash bash.

Restriction pada `rbash` :
+ cd command (Change Directory)
+ PATH (setting/ unsetting)
+ ENV aka BASH_ENV (Environment Setting/ unsetting)
+ Importing Function
+ Specifying file name containing argument ‘/’
+ Specifying file name containing argument ‘-‘
+ Redirecting output using `>`, `>>`, `>|`, `<>`, `>&`, `&>`
+ turning off restriction using `set +r` or `set +o`                

Nah itu adalah jenis2 bash pada UNIX Systems yang pada bahasan kali ini kita akan persempit materi pada bash.
Sebelumnya, adakah yang disini pengguna bash ? atau senantiasa menggunakan bash sehari-harinya ?                     

**R**  Adzim: belum pernah Mas                        

Oke lanjut klo gitu.  Bash, saya biasa menggunakan bash untuk melakukan otomasi terhadap sistem Linux yang saya pakai. Mulai dari untuk backup, untuk check security system dll. Nah disini akan kita bahas, bagaimana menggunakan basic bash itu sendiri.
Saya anggap semua uda didepan komputer masing2.          
kita buat folder belajar dan buat file `tes.sh`:

```bash
mkdir belajar
touch tes.sh
```
                     

**T**  #tanya,  ini menggunakan win/linux?                       
**J** pake weddus monggo pake linux monggo. klo weddus silahkan pake mingw ato git-bash dll                      

kalau sudah kita `vim tes.sh` monggo gunakan editor kesukaan masing-masing, pake `nano, vim, geany, npp`, dll dan isikan konten berikut :

```bash
#!/bin/bash
echo "Hello World"
echo Hello World
echo 'Hello World'
```
                   
**R**  Adzim: Enggak chmod om.?                       
**J** nanti dulu, klo sudah monggo di execute : bash tes.sh                      
**R**  Adzim: Siappp om                  

Untuk melihat step by step execute monggo gunakan `bash -x tes.sh`  
Apa hasilnya ?                        

**R** Adzim: Ada plus nya om di depan echo                      
**J** : uda dicoba belum ? ya itu adalah instruksi yang dieksekusi oleh bash.                       
**R** + instruksi
bla.. bla... -> ini adalah outputnya   

                

Sekarang kita ganti kontennya sbb:

```bash
#!/bin/bash
echo Hallo $USER
echo "Hallo $USER"
echo 'Hallo $USER'
```

Silahkan, sampaikan argumen masing-masing hasil dari eksekusi diatas. 
Apa kesimpulan yg bisa didapat dari command diatas?                      

**R** Ashokani: lg ngetik sambil makan, bntar om                        
**R** Adzim: $USER nge-get user si laptop yak om.?                                             
**T** lah hasilnya gimana ? apa kesimpulannya ?                       
**R**  Adzim: ehh USER yang aktif yak om.?                        
**R** Adzim: Hallo jukir
```bash
Hallo jukir
Hallo $USER     
```                  
karena user  nya jukir                        
**R**  Adzim: Hallo root
```bash
 Hallo root
 Hallo $USER    
 ```                    
ini kalo root om                     
**T**  trus apa kesimpulan dari 3 perintah itu ?                       
**R**   Om Ronald Simanjuntak: Kalau pakai ' variable sistem tidak diproses, tapi dianggap sebagai string   biasa                       
**R**  Adzim: 1. `$USER` berarti ngambil user aktif, 
              2. jika menggunakan '(petik satu) maka tidak bisa menampilkan isi variabel                       
**R**  Ashokani: tapi kog kalo double quote gak dianggak string juga ya ?                       
**R**  Om Ronald Simanjuntak: Seperti di php saja                      
**J**  Oke, Kesimpulannya quotes, double quotes, tanpa berbeda perlakuannnya dalam bash yak.                      

Kita lanjut materinya.
Dalam bash ada istilah `STDIN`, `STDOUT`, `STDERR`                        
Ada yang tahu tentang ketiganya ?                        

**R**  Ashokani: stdin itu input, stdout itu buat output ??                       
**R**  Adzim: kalo ga salah ngambil atau ngeluarin param dari command bash                        
**R**  Om Ronald Simanjuntak: I/O stream , To read / write input                       
**J** : Semuanya benar. stderr adalah output berupa error bila ada error maka stderr ada valuenya.                        

oke lanjut...                      

**T** pernah ga menggunakan 3 descriptor diatas ?                      
**R**   di bash ?                     
**R**   Adzim: kalo `cat file_name.txt` termasuk ga om.?                       
**R**   Ashokani: belum tau                       
**T**  nah itu yg mana stdin, stdout, dan stderr nya ?                        
**J**  ketika kita melakukan cat fliename.txt maka stdout dia akan berisi hasil dari cat tersebut.                       
         stdin dimana ? stderr dimana ?                       
stdin akan berisi value bila ia menerima input dari user.
 sedangkan stderr akan berisi value bia command yang dilakukan ternyata menghasilkan error.                      
**T** Ashokani: stdin itu perintah yang diberikan bukan ?  `cat fliename.txt`
**J**  bukan                        
                    
Balik lagi ke bash. Sekarang kita uban kontent `tes.sh`
mari kita ubah konten tes.sh menjadi :
```bash
#!/bin/bash
```



```bash
read -p "Masukkan nama anda ($USER) : " nama
echo "Nama anda : $nama"
printf "%s : %s\n" "Nama anda (printf)" $nama
```



Nanti kita akan masuk dan melihat dimana sih `stdin`, `stdout`, dan `stderr`
Apa hasilnya ?    Setelah dieksekusi ?
**R**   Ashokani: bash test.sh
```
Masukkan nama anda (ashoka) : tukimin
Nama anda : tukimin
Nama anda (printf) : tukimin     
```                  
**R**   Ashokani: itu printf dalam kurung nya buat apa ?                       
**T**  kira-kira buat apa ?                       
**J**  itu ga ada artinya kok... wkwk                        
**R**   Ashokani: oh itu cuma penanda aja ya,jadi ada 2 macam perintahuntuk menampilkan nya
pake echo dan printf .   
**J** yap, jangan lupa. printf ada format string disitu.                        
**R**  Adzim: enggak beda om kalau dipake huruf atau angka                
Kesimpulan dari konten echo dan printf:

1. Kita mengambil input dari user, itu adalah stdin.
2. Kita menampilkan variable hasil stdin itu adalah stdout.
3. penggunaan echo dan printf berbeda.                       

Trus gimana menggunakan `stdin`, `stdout` dan `stderr` ini dalam bash script ?

Menggunakan `stdin` biasa dimulai dengan `0<`
Menggunakan `stdout` biasa dimulai dg `1>`
Menggunakan `stderr` biasa dimulai dg `2>`

Mari kita tes, silahkan eksekusi perintah berikut:

```bash
echo "Hallo bro" > tes.txt
cat tes.txt
cat 0< tes.txt
```
                        
**T** apa hasilnya ?                       
**R**  Ashokani: hasilnya ya Hallo bro                       
**T** apa kesimpulannya ?                       
**R** Ashokani: enggak ada error nya                       
**T** kok bisa `cat 0< tes.txt` hasilnya Hallo bro ?                      
**R**  Adzim: nah ini mas.?                        
**T** sekarang coba eksekusi las "hallo"                       
**R**  Ashokani: las nya nggak ada                       
**R**  Adzim: command not found mas                       
**T** pasti error, sy ingin menyimpan hasil stderrnya, gimana hayo caranya ?                        
       sudah seharusnya, nah saya ingin menyimpan hasil error itu ke file error_log gimana carany ?                       

caranya gampang :

```bash
las "hallo" 2>error_log
cat error_log
```

coba gimana hasilnya ?                     
**R**   Adzim: las: command not found Om 

**R**   Adzim: itu `2>` stderr om .?                       
**J**  iya itu aplikasi stderr, coba diperhatikan secara seksama ketika kita eksekusi las "hello", maka error akan langsung keluar kan ?

ketika eksekusi las "hello" `2>error_log`, maka tidak muncul apa2. namun ketika kita cat error_log errornya ternyata ada disitu. ya ga ?      
             
hasilnya `error las command not foud` memanggil `error_log las` td                                          

 nah kita lanjut...
Sekarang variable dan local variable.

                

Sekarang kita ganti konten tes.sh menjadi :

```bash
#!/bin/bash
HELLO=Hello 
function hello {
	local HELLO=World
	echo $HELLO
}
echo $HELLO
hello
echo $HELLO
```
                 
apa hasilnya ? trus coba dihapus tulisan local apa hasilnya ?                       

**R** Ashokani: `bash test.sh` pake local
```bash
Hello
World
Hello
```                      
**R** Adzim: tanpa local                        
**R**  Ashokani: gak pake local
```bash
bash test.sh
Hello
World
World
```
**R** Adzim: Hello
```bash
World
World
```
**T**  Adzim: di bash itu sepasi dianggap delemiter ya om.?                       
**J**  tergantung  .   
        paham yak beda global variable dan local variable.                      

Kita lanjut coba bikin simple backup pake bash script.
Eh sebelum masuk situ, kita belajar dulu command subtitution
ubah kontent `tes.sh` menjadi :

```bash
#!/bin/bash
mydir=$(pwd)
echo "Lokasi mydir : $mydir"
echo "Lokasi mydir : $(pwd)"
echo "Lokasi mydir : `pwd`"
```
                     
coba cek hasilnya.                       

**R**  Ashokani: hasilnya ngeprint perintah pwd
```bash
bash test.sh
Lokasi mydir : `/mnt/c/Users/Ashokani/belajar`
Lokasi mydir : `/mnt/c/Users/Ashokani/belajar`
Lokasi mydir : `/mnt/c/Users/Ashokani/belajar`
```
**R** Adzim: 
```bash
Lokasi mydir : `/Users/jukir/Desktop`
```
Nah, itu adalah command subtitution                     
**R** Adzim: sebanyak 3 kali                       

Bila ingin menyimpan hasil suatu perintah kedalah variable gunakan `$(command)`
Lanjut sekarang tambahkan di konten tes.sh:

```bash
echo 1+1
echo $((1+1))
echo $[1+1]
```
                     
apa hasilnya ?                       
itu adalah penerapan arithmetic evaluation 


**R**  Ashokani: 1+1
```bash
2
2
```
**R** Adzim: 1+1 (dianggap string yak mas.?)
```bash
2                      
2
```
**J**  yup                       
Apa bedanya ? `$((param))` dan `$[param]` ?                       
itu bedanya cuma cara panggilnya, secara fungsi sama.                       
**R**  Adzim: waduuh,                      
Oke. kita coba bikin script backup pake bash script, ubah tes.sh:

```bash
#!/bin/bash

backupdir=$(pwd)
outputfile=$HOME/my_backup_$(date +%Y%m%d)_$(date +%H%M%S).tar.gz

echo "Backup $backupdir in progress..."
echo
tar -czvf $outputfile $backupdir > /dev/null 2>&1
echo "Lokasi hasil backup : $outputfile"
```
     
Apa hasilnya ? dimana hasilnya ?                      

Oh iya buat momod jam 23.00 kita nanti sudahi ya.                        
lumaya 3 jam cuma bahas basic.                       

**R** Ashokani: keburu pada ngantuk om ??                      
**R** Ashokani: Lokasi hasil backup : /home/ashoka/my_backup_20170415_222103.tar.gz                      

Silahkan di evaluasi scriptnya. Untuk PR :
Buatlah script backup tersebut hanya akan backup folder belajar. bila didalam folder ada filenya.??                       

**T** Adzim: tapi dicari file nya ga ada om      
**J** di folder `$HOME` Dzim                  

ywd, mungkin karena sudah malam. Mungkin kita sudahi kulwap kali ini. Sesi tanya jawab, silahkan bila ada yg ingin bertanya.      
yang penting tag #Tanya jangan lupa. Ada panggilan dedek nih, jadi kepada momod saya kembalikan. Terima kasih atas perhatiannya, semoga bermanfaat.

Wassalamu'alaikum Wr. Wb.                       
      
**Luphy Phaluphy Poetryjatmiko** : Thanks mas **@Eko Junaidi Salam**  Ilmu nya ..

Semoga manfaat amiinn…                        
