---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Tech Events Magdeburg
---

| Wann?    |          | Wer?     | Was?     | Wo?      |          |
|----------|----------|----------|----------|----------|----------|
{% for event in site.data.events -%}
| {{ event.date }} | {{ event.time }} | {{ event.org }} | {{ event.title }} | {{ event.location }} | [{{ event.url_title }}]({{ event.url }}) |
{% endfor %}

<sub style="float: right;"><sup>Alle Angaben sind ohne Gewähr</sup></sub>

{% include sponsors.html %}

Eine Veranstaltung kann ganz einfach gemeldet werden:
- per Pull-Request im [GitHub-Projekt](https://github.com/JensWinter/tech-events-magdeburg/tree/gh-pages)
- per E-Mail an <jens.winter@gmail.com>
