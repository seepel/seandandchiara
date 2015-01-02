<div class="heading">
<div class="text_line left"></div>
{{ '### Travel Info' | markdownify }}
<div class="text_line right"></div>
</div>

#### How to get to Saluzzo
  Feel free to let us know your travel plans and let us help you organize the best transport solution to come to Saluzzo.

<div class="sub_section">
<div class="half">
{% capture flying_include %}{% include flying_en.md %}{% endcapture %}
{{ flying_include | markdownify }}
</div><div class="half">
{% capture driving_include %}{% include driving_en.md %}{% endcapture %}
{{ driving_include | markdownify }}
</div>
</div>

<div class="sub_section" id="public_section">
{{ '#### Public Transportation' | markdownify }}
<div class="half">
{% capture public_turin_include %}{% include public_turin.md %}{% endcapture %}
{{ public_turin_include | markdownify }}
</div><div class="half">
{% capture public_milano_include %}{% include public_milano.md %}{% endcapture %}
{{ public_milano_include | markdownify }}
</div>

<div class="sub_section" id="taxi_sub_section">
{% capture taxi_include %}{% include taxi.md %}{% endcapture %}
{{ taxi_include | markdownify }}
</div>

<div class="sub_section">
{% capture public_transportation_include %}{% include public_transportation_en.md %}{% endcapture %}
{{ public_transportation_include | markdownify }}
</div>
