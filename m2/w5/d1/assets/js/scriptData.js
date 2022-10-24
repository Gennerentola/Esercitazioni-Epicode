const data = new Date();
const mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']

scritturaLunga.innerHTML = `${data.getDate()} / ${mesi[data.getMonth()]} / ${data.getFullYear()}`;
metodoPuro.innerHTML = data;
giorno.innerHTML += data.getDate();
mese.innerHTML += mesi[data.getMonth()];
formatoEu.innerHTML += `${data.getDate()}-${data.getMonth()+1}-${data.getFullYear()}`;