---
layout: page
title: Artikel Kategori Tutorial
permalink: category/tutorial.html
---

<ul> 
  {% for post in site.posts %}
     {% for pt in post.categories %}
      {% if pt == "tutorial" %}
        <li>
          {{ post.date | date: "%b %-d, %Y" }} - <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endif %}  
   {% endfor %} 
  {% endfor %}
</ul>  
