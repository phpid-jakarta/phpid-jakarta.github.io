---
layout: page
title: Daftar Member
permalink: daftar-member.html
---

<section class="container member">	
	<div class="row">
		{% assign member_sorted = (site.data.member | sort: 'name') %}
		{% for member in member_sorted %}
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

