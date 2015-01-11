{% if page.lang == 'en' %}
{% include welcome_en.md %}
{% else %}
{% include welcome_it.md %}
{% endif %}
{% capture emails %}
  * **Sean:** [sean@seanplynch.com](mailto:sean@seanplynch.com)
  * **Chiara:** [chiarafornasero@yahoo.com](mailto:chiarafornasero@yahoo.com)
{% endcapture %}

<div class="info">
{{ emails | markdownify }}
</div>
