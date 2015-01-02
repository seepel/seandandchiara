{% if page.lang == 'en' %}
{% include welcome_en.md %}
{% else %}
{% include welcome_it.md %}
{% endif %}
{% capture emails %}
  * **Sean:** sean at seanplynch dot com
  * **Chiara:** chiarafornasero at yahoo dot com
{% endcapture %}

<div class="info">
{{ emails | markdownify }}
</div>
