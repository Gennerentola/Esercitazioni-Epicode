var btn = document.getElementById('start');

btn.addEventListener('click', function(){
    clean();
})

function clean() {

    if (Boolean(document.getElementById('elencoSpesa').value) == false) {
        document.getElementById('elencoSpesa').innerHTML = ' ';
    }

    checkup();
}

function checkup() {
    let budget = document.getElementById('budget').value;

    if (budget<100) {
        alert('Potresti aver inserito meno di 100€ oppure aver inserito qualche lettera, correggi e riprova!')
        return;
    }
    
    calcolo(budget);
}

function calcolo(fondiIniziali) {
    let acquisto = Math.floor((Math.random()*100)+1);
    let parziale = fondiIniziali - acquisto;

    document.getElementById('elencoSpesa').innerHTML += `<li>Hai speso: ${acquisto}€</li>`;
    document.getElementById('elencoSpesa').innerHTML += `<li>Ti rimangono: ${parziale}€</li>`;

    while (parziale > 100 && parziale > (fondiIniziali*0.25)) {
        let acquisto = Math.floor((Math.random()*100)+1);
        parziale = parziale - acquisto;

        document.getElementById('elencoSpesa').innerHTML += `<li>Hai speso: ${acquisto}€</li>`;
        document.getElementById('elencoSpesa').innerHTML += `<li>Ti rimangono: ${parziale}€</li>`;
    }

    document.getElementById('elencoSpesa').innerHTML += `<li>A questo punto avrai meno di 100€ oppure avrai speso più del 75% del tuo budget iniziale, meglio smettere!</li>`;

}