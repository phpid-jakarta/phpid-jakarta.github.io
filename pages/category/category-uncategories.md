---
layout: page
title: Artikel Kategori Komunitas
permalink: category-community.html
---

<ul> 
  {% for post in site.posts %}
     {% for pt in post.categories %}
      {% if pt == "community" %}
        <li>
          {{post.published}} <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endif %}  
   {% endfor %} 
  {% endfor %}
</ul>  
