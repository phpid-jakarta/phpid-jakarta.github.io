---
layout: page
title: Artikel Kategori Kulwap
permalink: category/kulwap.html
---

<ul> 
  {% for post in site.posts %}
     {% for pt in post.categories %}
      {% if pt == "kulwap" %}
        <li>
          {{ post.date | date: "%b %-d, %Y" }} - <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endif %}  
   {% endfor %} 
  {% endfor %}
</ul>  
