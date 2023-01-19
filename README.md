[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Q5Q415BOM)

# Tech-Events in und um Magdeburg

## Das ist der Deal
1. Ihr veröffentlicht hier die demnächst anstehenden Termine eurer Veranstaltungen.
2. Die Terminliste wird bei den jeweils stattfinden Veranstaltungen für ca. 1 Minute (gern auch länger) präsentiert.

## Jeder hat etwas davon
1. Die Veranstalter können so ihre Events einem breiten Publikum präsentieren und weitere potenzielle Interessenten erreichen.
2. Tech-Interessierte erhalten sehr einfach einen Überblick über die aktuellen Veranstaltungen in der Nähe.

## So funktioniert's
Die Events befinden sich in je einer Datei pro Event im Verzeichnis [_data/events/](https://github.com/JensWinter/tech-events-magdeburg/blob/gh-pages/_data/events/) im gh-pages Branch. Ihr als Veranstalter von IT-Events legt dort eine Datei mit eurem Termin an.

Die Datei muss die folgende Form haben:
```yaml
---
date: "Tag der Veranstaltung im Format YYYY-MM-DD (ISO8601)"
time: "Uhrzeit/Zeitraum der Veranstaltung"
org: "Wer richtet die Veranstaltung aus?"
title: "Name der Veranstaltung"
location: "Wo findet die Veranstaltung statt?"
url_title: "Kurze Bezeichnung für externen Link"
url: "Externer Link für die Veranstaltung"
cancelled: true/false (Optional, abgesagte Events erhalten eine entsprechende Markierung)
```

Als Dateiname wird empfohlen: `YYYY-MM-DD_Org_Event-Name`

Schickt dann einfach einen Pull-Requests und die Änderungen werden zeitnah übernommen.

Die aktuelle Terminliste steht dann jedem unter http://tech-events-magdeburg.de zur Verfügung und sollte nach Möglichkeit auf den jeweiligen Veranstaltungen präsentiert werden. Z.B. In einem kurzen Zeitraum vor Beginn, oder einfach am Ende.

## Ein paar einfache Regeln

- Jeder darf Beiträge hinzufügen, ändern, entfernen, der meint, befugt zu sein
- Jeder ist befugt, zurückliegende Events jederzeit zu entfernen. (Es ist sogar ausdrücklich erwünscht)
- Die Einträge sind chronologisch geordnet
- Das Event, welches als nächstes stattfinden wird, steht oben
- Hier gelistete Events sollten nicht mehr als acht Wochen in der Zukunft liegen
- Haltet eure Events auf einem aktuellen Stand. Sollte sich etwas ändern, so korrigiert die Angaben bitte umgehend
- Nur IT-relevante Events bitte. Die Zielgruppen sind Menschen, die zu tun haben mit
   - Programmierung
   - UI Design
   - Software Testing
   - Data Science
   - IT Security
   - DevOps
   - Hardware
   - (IT-)Project Management
- Die Events sollten im Großraum Magdeburg stattfinden
- Keine virtuellen Events - nur Vor-Ort-Events
- Keine "geschlossenen" Events. Eine Veranstaltungsteilnahme sollte für alle möglich sein. (Gebühren, Eintrittskosten, etc. sind ok)
- Kurze und knappe, nur wirklich notwendige Angaben
- Achtung bei personenbezogenen Daten! Nur zulässige Angaben verwenden (z.B. Namen von Speaker*innen, falls Zustimmung vorliegt)

## License
[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/) CC0 1.0 Universal
