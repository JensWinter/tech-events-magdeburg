---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Tech Events Magdeburg
---
{% assign events = site.emptyArray %}
{% for event_hash in site.data.events %}
  {% assign events = events | push: event_hash[1] %}
{% endfor %}

{% assign events_date = events | sort: 'date' %}

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
        {% for event in events_date -%}
        <tr>
            {% if event.cancelled %}<td style="color: red;">{% include date.html date=event.date %} <i class="fas fa-exclamation-triangle"></i> abgesagt</td>{% else %}<td>{% include date.html date=event.date %}</td>{% endif %}
            {% if event.cancelled %}<td style="color: red;">{{ event.time }}</td>{% else %}<td>{{ event.time }}</td>{% endif %}
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
- per Pull-Request im [GitHub-Projekt](https://github.com/JensWinter/tech-events-magdeburg)
- per E-Mail an <jens.winter@gmail.com>
