---
layout: page
title: Arsip
permalink: arsip.html
---
<h3 class='text-center'>Kategori</h3>
<p class='text-center'>{% for pt in site.categories %}<a href="#cat-{{pt[0]}}">{{pt[0]}}</a>, {% endfor %}</p>

{% for cat in site.categories %}
{% assign nt = cat[0] %}

#### {{ nt }} {#cat-{{nt}}}
<ul> 
  {% for post in site.posts %}
     {% for pt in post.categories %}
    {% if nt == pt %}
      <li>
        {{post.published}} <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
    {% endif %}  
   {% endfor %} 
  {% endfor %}
</ul>  
{% endfor %}

<h3 class='text-center'>Tags</h3>
{% for tag in site.tags %}
{% assign nt = tag[0] %}

<ul> 
  {% for post in site.posts %}
     {% for pt in post.tags %}
    {% if nt == pt %}
      <li><a href="{{ post.url }}">{{ pt }}</a></li>
    {% endif %}  
   {% endfor %} 
  {% endfor %}
</ul>  
{% endfor %}
