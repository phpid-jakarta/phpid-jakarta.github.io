# GITFLOW phpid-jakarta.github.io 

Berikut adalah gitflow yang akan coba kita terapkan untuk memperjelas alur perubahan dari setiap kode yang ada :

1. Kita akan punya 2 branch yang ada di repository utama yakni **MASTER** dan **DEVELOP**
2. Branch **MASTER** merupakan branch yang sama dengan kode yang ada di production.
3. Branch **DEVELOP** merupakan clone dari branch **MASTER** namun menerima pull-request dari branch lain yang akan di naikkan ke production.
4. Bagi yang ingin melakukan kontribusi, silahkan fork dan clone di repository sendiri.
5. Buat branch sesuai dengan fitur yang akan dibuat, jangan lupa tambahkan kategori dari kode yang akan dibuat, contoh :
	+ Saya akan membuat fitur komentar, maka saya buat branch **feature/menambahkan-komentar**
	+ Saya akan mem bug-fixing bug yang ada di halaman home, maka saya buat **bugfix/fixing-bug-homepage**
6. Saat ini kita akan definisikan beberapa kategori yang mungkin akan sering digunakan, adapun bila ada yang tidak masuk ke kategori manapun bisa membuat sendiri kategori tersebut :
	+ feature
	+ bugfix
	+ content
7. Setelah kode Anda dirasa sudah selesai dan sudah ditest, maka silahkan buat pull-request ke branch **DEVELOP** ke repository utama.
8. Admin akan men-deploy kode baru dari **DEVELOP**.
9. Bila deployment berhasil dan semua berjalan lancar, maka branch **DEVELOP** akan di merge ke **MASTER**	
