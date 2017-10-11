---
layout: post
title:  Membuat CRUD dengan Codeigniter
date:   2017-01-07 08:00:00 +0700
author: Hendra Purnama
categories: ["kulwap"]
tags: [phpid jakarta, kulwap, codeigniter]
---


![logo php id chapter jkt](/assets/images/logo/phpid-jakarta-500x200.png)

<a name='more'></a>

## Intro
Halo Selamat datang di sesi sharing **Kulwap Php Indonesia** membangun aplikasi CRUD website menggunakan **CodeIgniter**.
Perkenalkan saya adalah **Hendra Purnama** yang akan jadi instruktur anda dalam beberapa jam ke depan

## Mengenal konsep MVC
Sebelum masuk lebih jauh mengenai CRUD Codeigniter ada baiknya kita semua mengenal lebih dalam konsep MVC.
**MVC** yang dimaksud adalah _model view dan controller_.
* **Model** yang mewakili semua hal yang berhubungan dengan database. Seperti insert, select, update, delete.
* **View** yg berhubungan dengan front end. View ini biasa nya di kerjakan oleh seorang web designer. Biasanya view ini berhubungan dengan kode **html**, **css**, **javascript**.
* **Controller** menjembatani *view* dan *model*. Semua yang berhubungan dengan alur atau logika dari sebuah fitur yg kita buat. Controller cocok dikerjakan oleh seorang backend developer. Karena semua berhubungan dengan coder, berhubungan dengan alur fitur yang akan kita buat. Untuk lebih jelasnya di praktekin aja ya nanti. 
Dibawah.

## Basic Codeigniter CRUD
Download code igniter disini yaa [codeigniter.com]

[codeigniter.com]: https://codeigniter.com/

Kalau sudah didownload silahkan di extract Codeingiter yang udah kalian download. Contohnya seperti gambar dibawah ini:

[gambar ekstrak codeigniter.zip]

1. Pindahin hasil download codeigniter kedalam folder xampp -> hdocs
2. Klik kanan mouse pada file zip code igniter.
3. Pilih extract here.

Setelah selesai *extract here*, selanjutnya kita buat database nya di **localhost/phpmyadmin**. Nama databasenya *mahasiswa* dan nama tablenya *tbl_mahasiswa* untuk lebih jelasnya bisa lihat screenshot dibawah:

[screenshot tbl_mahasiswa]

Setelah selesai buat database dan nama tabelnya. Selanjutnya langsung aja yaa.. kita ke folder *CodeIgniter-3.1.2* */application/config/autoload.php*

Nah di bagian **autoload.php** kita harus meload dulu databasenya. Supaya bisa kita pake fungsi database yang ada di codeigniter-nya.

Yang perlu di load ada dua:
1. **url** buat memakai fungsi *base_url* di codeigniter, 
2. **database** untuk memakai query pemanggilan antar table yg udh tersedia di codeigniter.
Untuk lebih jelasnya bisa dilihat di screen shot ini ya.

[gambar setting autoload libraries database, dan helper url]

Setelah selesai meload library database dan helper url. Selanjut nya ke file **database.php**. Ini path foldernya *CodeIgniter-3.1.2 /application/config/database.php*.

Dan ini screen shot nya ikutin aja yaa. Kalau belum mengerti silahkan ditanya.

[gambar setting database di database.php]

Setelah selesai membuat koneksi databasenya. Selanjutnyaa kita setting base url nya di file yg bernama **config.php*. Nii path foldernya *CodeIgniter-3.1.2 /application/config/config.php*. Dan ini screenshot nya yg harus di tambahin.

[gambar setting base_url di config.php]

Setelah selesai setting base_url, selanjut buat sebuah file di folder controller. Nama filenya **Mahasiwa.php**.

Nii path foldernya *CodeIgniter-3.1.2 /application/controller/Mahasiswa.php*. Ingat buat file baru di dalam folder controller. Nama filenya Mahasiswa.php.

Dan nii kode nya.

``` php
<?php
class Mahasiswa extends CI_Controller {
	
	public function __construct() {
		
		parent::__construct();
		
		$this->load->helper('form'); //lupa ngeload form helper autoload, saya ngeloadnya
		
		//disini aja yaa nii gunanya untuk memanggil <form></form> dibagian viewnya
	}

	public function index() {

		$this->load->view('form_input'); //mengload file form_input.php yg ada di folder view. masih ingat kan konsep MVC
		
		//folder berhubungan dengan frontend sedangkan controller berhubungan dengan alur pemograman.
	}
}
```

[gambar file Mahasiswa.php]

Setelah selesai membuat file baru Mahasiswa.php di controller selanjutnya nii kebagian view. yup ke folder views. Buat lah file baru dengan nama **form_input.php**

Liat aja scriptnya `$this->load->view(‘form_input’)` berarti kita harus membuat file baru yg namanya `form_input` didalam folder views yaa. Jangan lupa nama filenya *form_input*.

Nii path folder/lokasi foldernya *CodeIgniter-3.1.2 /application/views/form_input.php*
Dan isi script file form_input.php ini liat di screenshootnya berserta penjelasan scriptnya :D.

``` php
<?php echo form_open(base_url('mahasiswa/simpan')); ?> 
<!--
form_open tau kan? ini lho <form method='post' action='mahasiswa/simpan'></form>
karena tadi kita udah load helper ('form') maka kita bisa make plugin form yg ada di codeigniter $this->load->helper('form') masih inget kan yg ada di dalam file Mahasiswa.php
oh ya terus base_url yg ada di file config.php tadi.
masih inget kan yg tadi kita setting base_urlnya :)
-->
<table>
	<tr>
		<td>Nim</td>
		<td><input type="text" name="nim"></td>
	</tr>
	<tr>
		<td>Nama</td>
		<td><input type="text" name="nama"></td>
	</tr>
	<tr>
		<td>Jurusan</td>
		<td><input type="text" name="jurusan"></td>
	</tr>
	<tr>
		<td colspan="2"><input type="submit" value="simpan"></td>
	</tr>
</table>
```

[gambar file form_input.php]

Setelah selesai buat form input. Coba deh kalian buka browser trus masukin url ini http://localhost/CodeIgniter-3.1.2/index.php/mahasiswa 
MASUKAN URL dibrowser yaa.. jangan lupaa liat hasilnya..

Setelah muncul tampilan form inputan . back lagi ke script form_input.php

Liat script diline ke 1

`<?php echo form_open(base_url('mahasiswa/simpan')); ?>`

Mahasiswa ← nama controller nya atau nama class
simpan ← nama function nya yg ada di dalam class Mahasiswa.

Biar lebih paham kalian ke file Mahasiswa.php

``` php

 <?php
class Mahasiswa {
	public function __construct(){
		parent::__construct();
		$this->load->model('mahasiswa_model'); //buat file baru Mahasiswa_model.php //didalam folder model yaa
		$this->load->helper('form'); //lupa ngeload form helper autoload, saya ngeloadnya //disini aja yaa nii gunanya untuk memanggil <form></form> dibagian viewnya
	}

 	public function index(){

 		$data = array('record' => $this->mahasiswa_model->show()); //buat menampilkan isi table

 		$this->load->view('form_input',$data); //mengload file form_input.php yg ada di folder view. masih ingat kan konsep MVC

 		//folder berhubungan dengan frontend sedangkan controller berhubungan dengan alur pemograman.
	}

 	public function simpan(){

 		$data = array(

 			'nim' => $this->input->post('nim'),

 			'nama' => $this->input->post('nama'),

 			'jurusan' => $this->input->post('jurusan')

 			);

 		$this->mahasiswa_model->insert($data); //buat simpan data
		 
		redirect(base_url('mahasiswa'));
	}
}
```

Sekarang buat file baru didalam folder model. Nama filenya Mahasiswa_model.php
Ini lokasi foldernya. CodeIgniter-3.1.2 /application/models/Mahasiswa_model.php
Dan ini scriptnya

``` php
<?php
class Mahasiswa_model extends CI_Model{

 	public function insert($data){
		$this->db->insert('tbl_mahasiswa',$data);
	}
	 
	public function show(){
	 
		$this->db->select('*');

 		$this->db->from('tbl_mahasiswa');

 		$query = $this->db->get();

 		//script di atas sama dengan $query = mysql_query(SELECT * FROM tbl_mahasiswa) 
		if($query->num_rows() > 0){
			foreach($query->result_array() as $row){
				$data[] = $row;
			}
			$query->free_result();
		} else{
			$data = NULL;
		}
		return $data;
	}
}
```
Setelah selesai coba ke browser ada yg error gaa ?  http://localhost/CodeIgniter3.1.2/index.php/mahasiswa coba test input beberapa data trus simpan.. klau munculnya begini kosong

[gambar object not found]

Berarti index.php perlu di hapus atau di hilangin. Cara hilangin nya..
Buat file baru .htaccess didalam folder project kita yaa
Nii lokasi foldernya CodeIgniter-3.1.2/.htaccess

Masukin script ini didalam folder .htaccess buat hilangin index.php

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

RewriteRule ^(.*)$ index.php/$1 [L]
```

Terus ke bagian lokasi CodeIgniter-3.1.2 /application/config/config.php nah yg diline 38 index.php di hapus seperti gambar dibawah

[gambar lagi]


Terus kita balik lagi view ada penambahan script di form_input.php .

``` php
<table>
<thead>
 <tr>
 <td>Nim</td>
 <td>Nama</td>
 <td>Jurusan</td>
 </tr>
 </thead>
 <tbody>
 <?php if(!empty($record)): ?>
 <?php foreach($record as $row): ?>
 <tr>
 <td><?php echo $row['nim']; ?></td>
 <td><?php echo $row['nama']; ?></td>
 <td><?php echo $row['jurusan']; ?></td>
 <td>
 <a href="<?php echo
 base_url("mahasiswa/editmahasiswa/$row[nim]");?>">Edit</a> |
 <a href="<?php echo
 base_url("mahasiswa/hapusmahasiswa/$row[nim]");?>">Hapus</a>
 </td>
 </tr>
 <?php endforeach; ?>
 <?php endif; ?>
 </tbody>
 </table>
 
<?php echo form_open(base_url('mahasiswa/simpan')); ?> <!--

 form_open tau kan? ini lho <form method='post' action='mahasiswa/simpan'></form>

 karena tadi kita udah load helper ('form') maka kita bisa make plugin form yg ada di codeigniter $this->load->helper('form') masih inget kan yg ada di dalam file Mahasiswa.php


 oh ya terus base_url yg ada di file config.php tadi.

 masih inget kan yg tadi kita setting base_urlnya :)

 -->

 <table>
 <tr>
 <td>Nim</td>
 <td><input type="text" name="nim"></td>
 </tr>
 <tr>
 <td>Nama</td>
 <td><input type="text" name="nama"></td>
 </tr>
 <tr>
 <td>Jurusan</td>
 <td><input type="text" name="jurusan"></td>
 </tr>
 <tr>
 <td colspan="2">
<input type="submit" value="simpan">
 </td>
 </tr>
 </table>
 ```

Tuh tau kan maksudnya apa ? menampilkan data yg ada di dalam table tbl_mahasiswa.
Coba kalian buka url ini http://localhost/CodeIgniter-3.1.2/mahasiswa
Tanpa index.php pun udah bisa jalan ga akan error lagi. Karena tadi kita udh hilangin index.php masih inget kan tadi ktia buat file .htaccess

Yuk lanjut lagi sekarang ke bagian update yaa…

Balik lagi ke folder Controller file Mahasiswa.php
Dibawahnya tambahin lagi sebuah function yg bernama editmahasiswa.
Kenapa nama functionnya harus editmahasiswa karena di bagian form_input.php di bagian action nya <a href="<?php echo base_url("mahasiswa/editmahasiswa/$row[nim]");?>">Edit</a> kita udh kasih edit mahasiswa. Bentar yaa saya kasih screen shotnya biar pada ngerti.

[gambar 15]

Keliatan kan yg di lingkarin merah tuh..
Ok kalau sudah mengerti balik lagi ke folder controller Mahasiswa.php
Ini lokasi filenya yaa CodeIgniter-3.1.2 /application/controller/Mahasiswa.php
Ok sekarang tambahin function baru nama function nya editmahasiswa scriptnya bisa diliat di bawah yaa.. penjelasan nya udah ada. Saya udah kasih komentar di scriptnya. Kalau ga ngerti silahkan di Tanya ok. Remote make teamviewer juga bole lho..

``` php
public function editmahasiswa(){

 	$nim = $this->uri->segment(3);

 	//penjelasan kita akan menggambil url ini 11122541

 	//gimana caranya ?

 	//localhost/CodeIgniter-3.1.2/mahasiswa/editmahasiswa/11122541

 	//ya pake $this->uri->segment.

 	//mahasiswa segment ke 1

 	//editmahasiswa segment ke 2

 	//11122541 segment ke 3
	 
	$data = array(

 	'show' => $this->mahasiswa_model->edit_show($nim)

 	);

 	$this->load->view('form_editmahasiswa',$data);

 }
 ```

Ok setelah udah dibuat function baru. Selanjut nya modelnya nii model buat nampilin editnya lum ada.

 yuk kita buat dulu..
Model ini lho:  $this->mahasiswa_model->edit_show($nim);
Di bagian folder model nama file nya Mahasiswa_model.php
Tambahin function baru lagi public function edit_show($nim)

Variable $nim adalah parameter nya. Masih inget kan penjelasan nya kita ambil nim berdasarkan uri segment ke 3. 

 Ok next.

Kebagian Mahasiswa_model tambahin script ini yaa..
Maksudnya tambahin function baru.  penjelasan script udah ada. Dibawah

``` php
 public function edit_show($nim){

 	$this->db->where('nim',$nim);

 	$query = $this->db->get('tbl_mahasiswa');

 	if($query->num_rows() > 0)

 	{

 		$data = $query->row();

 		//row sama result_array bedanyaa result array buat nampilin banyak data di

 		dalam table

 		//sedangkan row hanya menampilkan 1 data di dalam table database //result_array ada dibagian public function show di atas liat kan.
		 
		$query->free_result(); //free result wajib di masukin yaa

 	}else{

 		$data = NULL;

 	}

 	return $data;

 }
```

Next sekarang kan view edit nya udh muncul nii..

[gambar 16]

Coba liat form nya mengarah kemana. Masih inget setiap ada inputan submit button pasti ada  
<form method=”post” action nya mengarah kemana.. yuk diliat di bagian view nya nama file nya form_editmahasiwa.php>

 Saya screenshot aja biar paham :D

 [gambar 17]

 <?php echo form_open('mahasiswa/update'); ?>  ←nii ya form action nya berarti mengarah ke class Mahasiswa function nya update.

 Berarti buka lagi nii folder Controller nama filenya Mahasiswa.php Nah didalam class Mahasiswa tambahin function update. Nii scriptnya

 ``` php

 public function update(){

 	$nim = $this->input->post('nim');

 	$data = array(
		'nama' => $this->input->post('nama'),
		'jurusan' => $this->input->post('jurusan')
		);

 	$this->mahasiswa_model->update($nim,$data);
	redirect(base_url('mahasiswa'));
}
```

Yg ini udah pada paham kan.. penjelasan nya sama seperti di awal.

 Oh ya kan kita udah make $this->mahasiswa_model->update nah berarti buat bikin query update nya harus di bagian folder model nama file nya Mahasiswa_model.php nii

 Buat lagi yaa nama function baru nya update. Tenang yg ga ngerti bilang yaa. Langsung team viewer atau lngsung saya jelasin.
Nii function update yg harus di tambahin di file Mahasiswa_model.php Tambahin function update baru yaa.. nii scriptnya..

``` php

 public function update($nim,$data){
	//query php native nya seperti ini
	//UPDATE tbl_mahasiswa SET nama='$data', jurusan='$jurusan' WHERE nim='$nim'
	$this->db->where('nim',$nim);
	$this->db->update('tbl_mahasiswa',$data);
}
```

Ok update udah selanjutnya kita ke bagian delete nii..
Dicoba aja dulu running kok ga error :P
Kalau udah lanjut yaa ke bagian delete.
Nyontek lagi yaa A href=’’ nya menuju ke function apa, msh inget kan di bagian form_input.php saya udah buat action delete.

 Nah di cek ahrefnya mengarah kemana ok

 ```
 <a href="<?php echo base_url("mahasiswa/hapusmahasiswa/$row[nim]");?>">Hapus</a> 
 ```

Berarti kita harus buat function baru hapusmahasiswa di dalam class Mahasiswa yaa.. Nama filenya Mahasiswa.php yg ada di dalam controller itu lho.. Tambahin function baru hapusmahasiswa ok
Ni scriptnya

``` php

 public function hapusmahasiswa(){
	$nim = $this->uri->segment(3);
	$this->mahasiswa_model->delete($nim);
	//nii model nya belum dibuat nnti kita buat ok..

 	redirect(base_url('mahasiswa'));
}
```
Scriptnya kalian udah paham kan fungsinya buat apa? Sama kok penjelasan saya di atas.. kalau ga ngerti liat atas lagi yaa..

Terus kita buat modelnya nii model buat hapus nya

 `$this->mahasiswa_model->delete($nim);`

Nah berarti harus buat function delete nii di file Mahasiswa_model.php

Yuk langsung aja yaa..

Nii scriptnya

``` php
public function delete($nim){
	//query php native nya seperti ini
	//DELETE tbl_mahasiswa WHERE nim='$nim'
	$this->db->where('nim',$nim);
	$this->db->delete('tbl_mahasiswa');
}
```

 Ok dan done. Kalau ga ngerti di ulangin lagi yaa.. baca nya.. terus Tanya ke saya bole. Lebih enakan sih team viewer yaa.. thanks lho yg udah ikutin kulwapnya dari awal sampai akhirnya moga kalian jadi developer yg bisa buat startup yaa SEMANGATT !! :D

 download full tutorial [disini](https://goo.gl/P3fRD8) 