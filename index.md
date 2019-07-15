---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<h1>Tech Events Magdeburg</h1>

{% include sponsors.html %}

| Wann?    |          | Wer?     | Was?     | Wo?      |          |
|----------|----------|----------|----------|----------|----------|
{% for event in site.data.events -%}
| {{ event.date }} | {{ event.time }} | {{ event.org }} | {{ event.title }} | {{ event.location }} | [{{ event.url_title }}]({{ event.url }}) |
{% endfor %}

<sub><sup>Alle Angaben sind ohne Gewähr</sup></sub>
