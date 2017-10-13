---
layout: page
title: Daftar Member
permalink: daftar-member.html
---

<section class="container member">	
	<div class="row">
		{% assign member_sorted = (site.data.member | sort: 'name') %}
		{% for member in member_sorted %}
			<div class="member__item">
				<div class="member__name"><b>{{ member.name }}</b></div>
				<div class="member__avatar">
					<img class="member__img" src="{{ member.image }}" alt="{{ member.name }}">
				</div>
				<div class="member__jobs">{{ member.jobs }}</div>				
				<div class="member__social">
					<ul>
					{% if member.fb_url %}
						<li class="member__social-list">							
							<a href="{{ member.fb_url }}"  
	                 target="_blank">
	                <i class="ion-social-facebook-outline"></i>
	            </a>
						</li>
				  {% endif %}
					{% if member.tw_url %}
						<li class="member__social-list">							
							<a href="{{ member.tw_url }}"  
	                 target="_blank">
	                <i class="ion-social-twitter-outline"></i>
	            </a>
						</li>
				  {% endif %}
					{% if member.ins_url %}
						<li class="member__social-list">		
							<a href="{{ member.ins_url }}"  
	                 target="_blank">
	                <i class="ion-social-instagram-outline"></i>
	            </a>
						</li>
				  {% endif %}
					{% if member.in_url %}
						<li class="member__social-list">		
							<a href="{{ member.in_url }}"  
	                 target="_blank">
	                <i class="ion-social-linkedin-outline"></i>
	            </a>
						</li>
				  {% endif %}
					{% if member.gh_url %}
						<li class="member__social-list">			
							<a href="{{ member.gh_url }}"  
	                 target="_blank">
	                <i class="ion-social-github-outline"></i>
	            </a>
						</li>
				  {% endif %}
					</ul>
				</div>
			</div>
		{% endfor %}
	</div>
</section>
<script src="{{ "/assets/js/member.js" | relative_url }}" type="text/javascript" defer></script>
