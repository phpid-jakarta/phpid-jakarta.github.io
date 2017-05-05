---
layout: page
title: List Member
permalink: daftar-member.html
---

<section class="container member">
	<div class="title">Members</div>	
	<div class="row">
		{% for member in site.data.member %}
			<div class="col-md-2 member__item">
				<div class="member__avatar">
					<img src="{{ member.image }}" alt="{{ member.name }}">
				</div>
				<div class="member__name">{{ member.name }}</div>
				<div class="member__jobs">{{ member.jobs }}</div>
			</div>
		{% endfor %}
	</div>
</section>

