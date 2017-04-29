---
layout: page
title: Artikel Kategori Kulwap
permalink: category/kulwap.html
---

<ul>
	{% assign sorted = (site.posts | sort: 'date' | reverse) %}
	{% for post in sorted %}
		{% for pt in post.categories %}
			{% if pt == "kulwap" %}
			<li>
				{{ post.date | date: "%b %-d, %Y" }} - <a href="{{ post.url }}">{{ post.title }}</a>
			</li>
			{% endif %}
		{% endfor %} 
	{% endfor %}
</ul>  
