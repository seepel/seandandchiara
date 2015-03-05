{% if page.lang == 'it' %}
<div class="anchor" id="gite"></div>
{% else %}
<div class="anchor" id="tour"></div>
{% endif %}
<section id="todo_section"> 
{% if page.lang == 'it' %}
{% capture todo_include %}{% include todo_it.md %}{% endcapture %}
{{ todo_include | markdownify }}
{% else %}
{% capture todo_include %}{% include todo_en.md %}{% endcapture %}
{{ todo_include | markdownify }}
{% endif %}
</section>