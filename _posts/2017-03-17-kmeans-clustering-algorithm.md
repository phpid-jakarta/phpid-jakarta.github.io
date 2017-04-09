---
layout: post
title: K-Means Clustering Algorithm
author: Eko Junaidi Salam
tags: Unsupervised Learning, Clustering
---

**Contoh Input Data :**
```javascript
N Dimension (n,m) : 2,2
Samples : 5.09,5.80,3.24,5.90,1.68,4.90,1.00,3.17,1.48,1.38,2.91,0.20,4.76,0.10,6.32,1.10,7.00,2.83,6.52,4.62
Centroids : 1.48,1.38,4.76,0.10
```

#### Keterangan :<a name='more'></a>

N,M Dimensions : Dimensi Array dari data samples dan centroids.

Contoh : `N,M Dimension = 2,2`, maka `samples = [5.09,5.80],[3.24,5.90],[1.68,4.90],[1.00,3.17],[1.48,1.38],[2.91,0.20],[4.76,0.10],[6.32,1.10],[7.00,2.83],[6.52,4.62].`
`centroids = [[1.48,1.38],[4.76,0.10]]`

Samples : Data yang akan dipartisi

Centroids (Optional) : Nilai awal set point pada tiap cluster, bila `n,m` dimensions `2,2` maka centroid haruslah berisi `2*m` float number (4 angka) seperti contoh diatas. Bila tidak diisi, maka centroid akan diambil dari nilai awal samples.

Contoh bila N,M Dimensions : `2,3` maka samples akan dibagi 2 dimensi dan centroid 3 dimensi `(2*3 angka)` menjadi `[[5.09,5.80],[3.24,5.90],[1.68,4.90]]`

**Baca artikel selengkapnya di :** [http://bit.ly/ejs_k-means](http://bit.ly/ejs_k-means)

#### Masukkan sumber data

<p style='text-align:center;'><input name='txt_dim' type='text' placeholder='N,M Dimensions...'><input name='txt_samples' type='text' placeholder='Samples...'><input name='txt_centroids' type='text' placeholder='Centroids...'><button id='btn_hitung' class='btn btn-default' type='button'>Hitung !!!</button></p>

<p id='samples'></p>
<p id='result'></p>


<script type='text/javascript' src='https://cdn.rawgit.com/ekojs/machine_learning/master/unsupervised/ejs_kmeans.js'></script>
<script src="https://code.jquery.com/jquery-3.2.0.slim.min.js" integrity="sha256-qLAv0kBAihcHZLI3fv3WITKeRsUX27hd6upBBa0MSow=" crossorigin="anonymous"></script>
<script>
	$(function(){		
		$('#btn_hitung').click(function(){
			var dim = $('[name="txt_dim"]').val().replace(/ +/g,'');
			var str = $('[name="txt_samples"]').val().replace(/ +/g,'');
			
			if(dim === '' || str === '' || dim === ' ' || str === ' '){
				alert('N Dimensions dan Samples harus diisi !!!');
				return;
			}else if(!dim.match(/[\d,.]/g) || !str.match(/[\d,.]/g)){
				alert('Data haruslah number atau float !!!');
				return;
			}
			dim = dim.split(',');
			var str_centroid = $('[name="txt_centroids"]').val().replace(/ +/g,'');
			var buff = str.split(',');
			var samples = [],centroids = [],tmp = [];
			for(i=0;i<buff.length;i++){
				if(i != 0 && (i%dim[0] == 0)){
					samples.push(tmp);
					tmp = [];
					tmp.push(parseFloat(buff[i]));
				}else{
					tmp.push(parseFloat(buff[i]));
				}
			}
			samples.push(tmp);
			if(str_centroid.length > 0 && (str_centroid != '' || str_centroid != ' ')){
				if(!str_centroid.match(/[\d,.]/g)){
					alert('Data centroids haruslah number atau float !!!');
					return;
				}
				tmp = [];
				buff = str_centroid.split(',');
				if(buff.length%dim[1] != 0){
					alert('Dimensi m : '+dim[1]+' tidak sesuai dengan jumlah data centroid. Jumlah data haruslah 2*'+dim[1]+' bukan '+buff.length+' !!!');
					return;
				}
				for(i=0;i<buff.length;i++){
					if(i != 0 && (i%dim[0] == 0)){
						centroids.push(tmp);
						tmp = [];
						tmp.push(parseFloat(buff[i]));
					}else{
						tmp.push(parseFloat(buff[i]));
					}
				}
				centroids.push(tmp);
			}else{
				for(i=0;i<dim[1];i++){
					centroids.push(samples[i]);
					console.log('iterasi %d',i);
					console.log(samples[i]);
				}
			}
			console.log(samples);
			console.log(centroids);
			
			
			var k_means = new ejs_kmeans.k_mean_cluster(samples);
			k_means.initialize(centroids);
			k_means.calculate();
			var res = k_means.result();
			var t = 'Samples Data : ('+samples.join('), (')+')<br />';
			$('#samples').replaceWith('<p id="samples">'+t+'</p>');
			$('#result').replaceWith("<p id='result'>"+res+"</p>");
		});
	});
</script>