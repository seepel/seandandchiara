<div>
<div class="text_line left"></div>
{{ '### Travel Info' | markdownify }}
<div class="text_line right"></div>
</div>

<div class="half">
{% capture flying_include %}{% include flying_en.md %}{% endcapture %}
{{ flying_include | markdownify }}
</div><div class="half">
{% capture driving_include %}{% include driving_en.md %}{% endcapture %}
{{ driving_include | markdownify }}
</div>

#### Suggested taxi services: 

<div class="half">
{% capture rosso_taxi_include %}{% include rosso_taxi.md %}{% endcapture %}
{{ rosso_taxi_include | markdownify }}
</div><div class="half">
{% capture saluzzo_taxi_include %}{% include saluzzo_taxi.md %}{% endcapture %}
{{ saluzzo_taxi_include | markdownify }}
</div>



#### From Geneva
Our suggested itinerary is to go go through the Mont blanc tunnel. In general, it will take you around 4 hours. More prcise details to come.

