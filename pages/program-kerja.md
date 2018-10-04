---
layout: page
title: Program Kerja
permalink: program-kerja.html
---

<section class="program">
	<div class="row">
		{% for pk in site.data.program_kerja %}
			<div class="col-md-4 col-sm-6">
				<div class="program__item">
					<div class="program__inner">
						<div class="program__icon"><i class="{{ pk.icon }}"></i></div>
						<div class="program__desc">{{ pk.program }}</div>
					</div>
				</div>
			</div>
		{% endfor %}
	</div>
</section>