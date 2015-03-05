{% if page.lang == 'en' %}
{% include welcome_en.md %}
{% else %}
{% include welcome_it.md %}
{% endif %}
{% capture emails %}
{% if page.lang == 'it' %}
  [matrimonio@seanandchiara.com](mailto:matrimonio@seanandchiara.com)
{% else %}
  [wedding@seanandchiara.com](mailto:wedding@seanandchiara.com)
  {% endif %}
{% endcapture %}

<div class="info">
{{ emails | markdownify }}
</div>
