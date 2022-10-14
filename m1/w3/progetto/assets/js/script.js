function valueCollector(value) {
    document.getElementById('display').value += value;
}

function valueEraser(value) {
    document.getElementById('display').value = value;
}

function calcOutcome() {
    document.getElementById('display').value = eval(document.getElementById('display').value);
}

function squareRoot() {
    document.getElementById('display').value = Math.sqrt(document.getElementById('display').value);
}

function logarithmE() {
    document.getElementById('display').value = Math.log(document.getElementById('display').value);
}