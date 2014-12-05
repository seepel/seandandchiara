{% assign travel_pages= site.pages | sort: 'ordinal' %}
<div id="left" style="background-image:url('/img/saluzzo.jpg')">
</div>

<div id="right">

<ul id="left">
{% for sub_page in travel_pages %}
{% if sub_page.category == 'travel' and sub_page.lang == page.lang %}
<li> {{sub_page.title}}</li>
{% endif %}
{% endfor %}
</ul>

<div id="right_content">
{% for sub_page in travel_pages %}
{% if sub_page.category == 'travel' and sub_page.lang == page.lang %}
<h3> {{sub_page.title}} </h3>

{{sub_page.content}}
{% endif %}

{% endfor %}
</div>

</div>

