---
layout: page
title: Daftar Member
permalink: daftar-member.html
---

<section class="container member">	
	<div class="row">
		{% assign member_sorted = (site.data.member | sort: 'name') %}
		{% for member in member_sorted %}
			<div class="col-md-3 centered member__item">
				<div class="member__avatar">
					<img src="{{ member.image }}" alt="{{ member.name }}">
				</div>
				<div class="member__name">{{ member.name }}</div>
				<div class="member__jobs">{{ member.jobs }}</div>				
				<div class="member__social">
					<ul>
						<li class="member__social-list">							
							<a href="{{ member.fb_url }}"  
	                 target="_blank">
	                <i class="ion-social-facebook-outline"></i>
	            </a>
						</li>
						<li class="member__social-list">							
							<a href="{{ member.tw_url }}"  
	                 target="_blank">
	                <i class="ion-social-twitter-outline"></i>
	            </a>
						</li>
						<li class="member__social-list">		
							<a href="{{ member.ins_url }}"  
	                 target="_blank">
	                <i class="ion-social-instagram-outline"></i>
	            </a>
						</li>
						<li class="member__social-list">		
							<a href="{{ member.in_url }}"  
	                 target="_blank">
	                <i class="ion-social-linkedin-outline"></i>
	            </a>
						</li>
						<li class="member__social-list">			
						<a href="{{ member.gh_url }}"  
                 target="_blank">
                <i class="ion-social-github-outline"></i>
            </a>
						</li>
					</ul>
				</div>
			</div>
		{% endfor %}
	</div>
</section>

