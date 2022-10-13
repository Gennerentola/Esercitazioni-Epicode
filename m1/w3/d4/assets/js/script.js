// Metodi stringa

const stringa = 'Sto imparando JavaScript';
const sigla = ' JS';

console.log(stringa.length);

document.getElementById('maiuscola').innerHTML = stringa.toUpperCase();
document.getElementById('minuscola').innerHTML = stringa.toLowerCase();
document.getElementById('strArray').innerHTML = stringa.split('');
document.getElementById('estraiCaratteri').innerHTML = stringa.charAt(2)+stringa.charAt(1)+stringa.charAt(14)+stringa.charAt(18);
document.getElementById('concatena').innerHTML = stringa.concat(sigla);
document.getElementById('estraiStringa').innerHTML = stringa.slice(5 , 9);

// Array persone

var arrayPersone = ['Giovanni','Carla','Piero','Mirtilla'];

document.getElementById('array').innerHTML = arrayPersone;
document.getElementById('lunghezza').innerHTML = arrayPersone.length;
document.getElementById('elemento').innerHTML = arrayPersone[2];
document.getElementById('ultimo').innerHTML = arrayPersone[3];

arrayPersone.splice(2 , 1 , 'Massimo')

document.getElementById('modificato').innerHTML = arrayPersone;

// Array come argomento

const arrayAnniNascita = [2001, 1990, 1987, 2018, 2010];

function calcoloEta (annoNascita) {
    let annoCorrente = 2022;
    return annoCorrente-annoNascita;
}

var arrayEta = [
    calcoloEta (arrayAnniNascita[0]),
    calcoloEta (arrayAnniNascita[1]),
    calcoloEta (arrayAnniNascita[2]),
    calcoloEta (arrayAnniNascita[3]),
    calcoloEta (arrayAnniNascita[4])
];

document.getElementById('eta1').innerHTML += `${arrayEta[0]} anni`;
document.getElementById('eta2').innerHTML += `${arrayEta[1]} anni`;
document.getElementById('eta3').innerHTML += `${arrayEta[2]} anni`;
document.getElementById('eta4').innerHTML += `${arrayEta[3]} anni`;
document.getElementById('eta5').innerHTML += `${arrayEta[4]} anni`;


document.getElementById('arrayEta').innerHTML += arrayEta;

// Array animali

var arrayAnimali = ['coniglio','cane','gatto','criceto']
document.getElementById('intero').innerHTML = arrayAnimali;

arrayAnimali.push('leone');
document.getElementById('aggiunto').innerHTML = arrayAnimali;

arrayAnimali.pop();
document.getElementById('estratto').innerHTML = arrayAnimali;

document.getElementById('verifica1').innerHTML = arrayAnimali.includes('cane');
document.getElementById('verifica2').innerHTML = arrayAnimali.includes('leone');