---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Tech Events Magdeburg
---

<table>
    <thead>
        <tr>
            <th colspan="2">Wann?</th>
            <th>Wer?</th>
            <th>Was?</th>
            <th>Wo?</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        {% for event in site.data.events -%}
        <tr>
            <td>{{ event.date }}</td>
            <td>{{ event.time }}</td>
            <td>{{ event.org }}</td>
            <td>{{ event.title }}</td>
            <td>{{ event.location }}</td>
            <td><a href="{{ event.url }}">{{ event.url_title }}</a></td>
        </tr>
        {% endfor %}
    </tbody>
</table>

<sub style="float: right;"><sup>Alle Angaben sind ohne Gewähr</sup></sub>

{% include sponsors.html %}

Eine Veranstaltung kann ganz einfach gemeldet werden:
- per Pull-Request im [GitHub-Projekt](https://github.com/JensWinter/tech-events-magdeburg/tree/gh-pages)
- per E-Mail an <jens.winter@gmail.com>
