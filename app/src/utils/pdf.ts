export function exportPdfMock(){
  const blob = new Blob([`Аналитика ЖКХ\n\nДата: ${new Date().toLocaleString('ru-RU')}`], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'analytics.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}


