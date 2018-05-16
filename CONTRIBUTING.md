Berikut beberapa aturan yang harus diikuti :


Anda bisa berkontribusi menjadi penulis konten, pengembang fitur, fixing bug, maupun maintenace lainnya yang berkaitan dengan repository **phpid-jakarta.github.io**

## Untuk Pengembang (Developer)
1. Bila Anda ingin berkontribusi menjadi pengembang website ini, silahkan menghubungi admin repositori ini [@3Shoka](https://github.com/3Shoka), [@mazipan](https://github.com/mazipan), [@ekojs](https://github.com/ekojs) untuk dapat mengundang Anda kedalam organisasi ini sebagai member.
2. Anda bisa ikuti step untuk setup project [disini](https://github.com/phpid-jakarta/phpid-jakarta.github.io/wiki/Setup-Project).
2. Ikuti gitflow yang ada dan telah dijelaskan di [wiki gitflow](https://github.com/phpid-jakarta/phpid-jakarta.github.io/wiki/GitFlow). Bila terdapat kebingungan nanti akan dituntun dan coba dijelaskan oleh Anggota lain.

## Untuk Pengisi Konten
1. Bila Anda berkontribusi sebagai penulis konten, Anda **_tidak harus_** punya Akun github. Anda bisa langsung submit artikel kepada para Administrator github atau orang yang mengerti cara menambahkan konten baru.
2. Setiap artikel yang di publish akan di format dalam bentuk markdown, bila Anda belum paham apa itu markdown bisa baca [disini](https://guides.github.com/features/mastering-markdown/).
3. Anda bisa juga menggunakan beberapa converter online untuk membuat markdown seperti [http://markitdown.medusis.com/](http://markitdown.medusis.com/) atau [https://word-to-markdown.herokuapp.com/](https://word-to-markdown.herokuapp.com/) untuk membuat markdown Anda sendiri.
4. Bila Anda kesusahan untuk membuat markdown format, Anda bisa menulis di Ms.Word atau notepad dan biarkan mereka yang punya privilege yang akan men-formatkan tulisan Anda.
5. Setiap post artikel markdown (.md) harus diawali dengan penjelasan `title`, `date`, `categories`, `tags`. contoh: 
```markdown
---
layout: post
title:  Selamat datang di Php Indonesia Chapter Jakarta
date:   2017-04-25 09:49:07 +0700
categories: ["community"]
tags: [phpid jakarta, markdown, posting, dummy]
---
```
6. Untuk `categories` diharapkan tidak dibuat sendiri melainkan ikuti daftar kategori yang sudah kita sediakan, saat ini yang tersedia antara lain : 
 + kulwap
 + meetup
 + tutorial
 + community
 + uncategories
7. Untuk `tags` silahkan tambahkan setidaknya 4 tags dan gunakan tags yang simpel, pendek dan relevan dengan artikelnya. Tags ini akan digunakan sebagai keyword artikel tersebut.
8. Untuk menambahkan snippet code bisa menggunakan seperti dibawah : 
```
{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('PhpId Jakarta')
{% endhighlight %}
```
