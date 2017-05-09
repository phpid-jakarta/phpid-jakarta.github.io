---
layout: page
title: Daftar Isi
permalink: daftar-isi.html
---
<div class="home">

  <ul>
	{% assign sorted = (site.posts | sort: 'date' | reverse) %}
    {% for post in sorted %}
      <li>
        {{ post.date | date: "%b %-d, %Y" }} - <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </li>
    {% endfor %}
  </ul>

</div>
