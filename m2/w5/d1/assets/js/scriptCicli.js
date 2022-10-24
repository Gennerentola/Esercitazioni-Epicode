const data = new Date();

if (data.getHours() < 6) {
    spazioSaluto.innerHTML = 'Buonanotte!';
}
else if (data.getHours() < 12) {
    spazioSaluto.innerHTML = 'Buongiorno!';
}
else if (data.getHours < 18) {
    spazioSaluto.innerHTML = 'Buon Pomeriggio!';
}
else {
    spazioSaluto.innerHTML = 'Buonasera!';
}