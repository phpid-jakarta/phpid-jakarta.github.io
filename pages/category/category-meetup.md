---
layout: page
title: Artikel Kategori Meetup
permalink: category/meetup.html
---

<ul> 
  {% for post in site.posts %}
     {% for pt in post.categories %}
      {% if pt == "meetup" %}
        <li>
          {{ post.date | date: "%b %-d, %Y" }} - <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endif %}  
   {% endfor %} 
  {% endfor %}
</ul>  
