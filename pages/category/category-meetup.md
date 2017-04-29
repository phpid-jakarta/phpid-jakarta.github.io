---
layout: page
title: Artikel Kategori Meetup
permalink: category/meetup.html
---

<ul>
	{% assign sorted = (site.posts | sort: 'date' | reverse) %}
	{% for post in sorted %}
		{% for pt in post.categories %}
			{% if pt == "meetup" %}
			<li>
				{{ post.date | date: "%b %-d, %Y" }} - <a href="{{ post.url }}">{{ post.title }}</a>
			</li>
			{% endif %}
		{% endfor %} 
	{% endfor %}
</ul>  
