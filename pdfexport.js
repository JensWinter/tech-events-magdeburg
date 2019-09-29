

function openPdf(events) {

    var doc = new jsPDF({
        orientation: 'landscape',
        format: 'a4'
    });
    doc.setProperties({
        title: 'Tech Events Magdeburg ' + new Date().toLocaleString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }) + ' Uhr',
        filename: 'tech-events-magdeburg.pdf'
    });

    doc.setFontSize(22);
    doc.text('Tech Events Magdeburg', 15, 30);

    doc.setFontSize(10);
    doc.autoTable({
        startY: 40,
        head: [[
            {
                content: 'Wann?',
                styles: { cellWidth: 20, fillColor: 'white', textColor: 'black' }
            },
            {
                content: '',
                styles: { cellWidth: 10, fillColor: 'white', textColor: 'black' }
            },
            {
                content: 'Wer?',
                styles: { fillColor: 'white', textColor: 'black' }
            },
            {
                content: 'Was?',
                styles: { fillColor: 'white', textColor: 'black' }
            },
            {
                content: 'Wo?',
                styles: { fillColor: 'white', textColor: 'black' }
            }
        ]],
        body: events,
        foot: [
            [{ content: 'Alle Angaben sind ohne Gewähr', colSpan: 5, styles: { halign: 'right', fontSize: 8, fillColor: 'white', textColor: '#555555', fontStyle: 'normal' }}]
        ]
    });

    doc.setFontSize(12);
    doc.setTextColor('#333333');
    doc.text('Weitere Informationen unter www.tech-events-magdeburg.de', 15, 200);

    doc.setFontSize(8);
    doc.text('Stand: ' + new Date().toLocaleString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }) + ' Uhr', 245, 200);

    window.open(URL.createObjectURL(doc.output('blob')));

}
