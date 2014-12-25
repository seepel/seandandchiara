<div>
<div class="text_line left"></div>
{{ '### Travel Info' | markdownify }}
<div class="text_line right"></div>
</div>

<div class="sub_section">
<div class="half">
{% capture flying_include %}{% include flying_en.md %}{% endcapture %}
{{ flying_include | markdownify }}
</div><div class="half">
{% capture driving_include %}{% include driving_en.md %}{% endcapture %}
{{ driving_include | markdownify }}
</div>
</div>

<div class="sub_section" id="taxi">
{{ '#### Suggested taxi services:' | markdownify }}

<div class="half info">
{% capture rosso_taxi_include %}{% include rosso_taxi.md %}{% endcapture %}
{{ rosso_taxi_include | markdownify }}
</div><div class="half info">
{% capture saluzzo_taxi_include %}{% include saluzzo_taxi.md %}{% endcapture %}
{{ saluzzo_taxi_include | markdownify }}
</div>
</div>


#### From Geneva
Our suggested itinerary is to go go through the Mont blanc tunnel. In general, it will take you around 4 hours. More prcise details to come.

