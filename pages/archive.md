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
	{% assign sorted = (site.posts | sort: 'date' | reverse) %}
	{% for post in sorted %}
		{% for pt in post.categories %}
			{% if nt == pt %}
			<li>
				{{ post.date | date: "%b %-d, %Y" }} - 
				<a href="{{ post.url }}">{{ post.title }}</a>
			</li>
			{% endif %}  
		{% endfor %} 
	{% endfor %}
</ul>  
{% endfor %}

<h3 class='text-center'>Tags</h3>
<p class='text-center'>{% for pt in site.tags %}<a href="#tag-{{pt[0] | downcase | replace: ' ', '_'}}">{{pt[0]}}</a>, {% endfor %}</p>
{% for tag in site.tags %}
{% assign nt = tag[0] %}

#### {{ nt }} {#tag-{{nt | downcase | replace: ' ', '_'}}}
<ul> 
{% assign sorted = (site.posts | sort: 'date' | reverse) %}
{% for post in sorted %}
	{% for pt in post.tags %}
		{% if nt == pt %}
			<li>
        {{ post.date | date: "%b %-d, %Y" }} - 
        <a id="#tag-{{pt | downcase | replace: ' ', '_'}}" href="{{ post.url }}">{{ post.title }}</a>
      </li>
		{% endif %}  
	{% endfor %} 
{% endfor %}
</ul>  
{% endfor %}
