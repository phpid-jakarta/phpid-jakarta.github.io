---
layout: page
title: List Member
permalink: list_member.html
---
<div class="home">

<ul>
{% for member in site.data.member %}
  <li>
	<div class="member__avatar">
		<img src="{{ member.image }}" alt="{{ member.name }}"> {{ member.name }} - {{ member.jobs }}
	</div>
  </li>
{% endfor %}
</ul>

</div>
