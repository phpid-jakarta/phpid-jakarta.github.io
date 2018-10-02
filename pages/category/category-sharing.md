---
layout: page
title: Artikel Kategori Sharing
permalink: category/tips-dan-trik.html
---

<ul>
	{% assign sorted = site.posts | sort: 'date' | reverse %}
	{% for post in sorted %}
		{% for pt in post.categories %}
			{% if pt == "tips dan trik" %}
			<li>
				{{ post.date | date: "%b %-d, %Y" }} - <a href="{{ post.url }}">{{ post.title }}</a>
			</li>
			{% endif %}
		{% endfor %} 
	{% endfor %}
</ul>  
