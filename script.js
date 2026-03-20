let codiSecret = generarCodiSecret();
let rondesRestants = 5;
let jocAcabat = false;

function generarCodiSecret() {
    const codi = [];
    for (let i = 0; i < 4; i++) {
        codi.push(Math.floor(Math.random() * 10));
    }
    return codi;
}

function omplirSelects() {
    const selects = document.querySelectorAll('.code-input');
    selects.forEach(select => {
        for (let i = 0; i <= 9; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            select.appendChild(option);
        }
    });
}

function logTerminal(missatge, tipus) {
    const terminal = document.getElementById('terminal');
    const linia = document.createElement('p');
    linia.classList.add('line');

    if (tipus === 'error') {
        linia.classList.add('error');
        linia.textContent = '> [ERROR] ' + missatge;
    } else if (tipus === 'exit') {
        linia.classList.add('success');
        linia.textContent = '> [SUCCESS] ' + missatge;
    } else {
        linia.textContent = '> ' + missatge;
    }

    terminal.appendChild(linia);
    terminal.scrollTop = terminal.scrollHeight;
}

function actualitzarRondes() {
    document.getElementById('rondes-restants').textContent = rondesRestants;
}

function validarIntent(intent, codiSecret) {
    const pistes = [];
    const codiTemp = [...codiSecret];
    const intentTemp = [...intent];

    // Primero: números correctos en posición correcta
    for (let i = 0; i < 4; i++) {
        if (intentTemp[i] === codiTemp[i]) {
            pistes.push('1');
            codiTemp[i] = null;
            intentTemp[i] = null;
        }
    }

    // Después: números correctos en posición incorrecta
    for (let i = 0; i < 4; i++) {
        if (intentTemp[i] !== null) {
            const posicio = codiTemp.indexOf(intentTemp[i]);
            if (posicio !== -1) {
                pistes.push('Ø');
                codiTemp[posicio] = null;
            } else {
                pistes.push('×');
            }
        }
    }

    return pistes;
}

function comprovarFinalJoc(pistes) {
    return pistes.length === 4 && pistes.every(pista => pista === '1');
}

document.getElementById('btn-enviar').addEventListener('click', function () {
    if (jocAcabat) {
        logTerminal('El joc ha acabat. Recarrega la pàgina per jugar de nou.', 'error');
        return;
    }

    const selects = document.querySelectorAll('.code-input');
    const intent = Array.from(selects).map(s => parseInt(s.value));

    logTerminal('Intent introduït: [ ' + intent.join(' | ') + ' ]', 'normal');

    const pistes = validarIntent(intent, codiSecret);
    logTerminal('Pistes rebudes:   [ ' + pistes.join(' | ') + ' ]', 'normal');

    rondesRestants--;
    actualitzarRondes();

    if (comprovarFinalJoc(pistes)) {
        logTerminal('CODI CORRECTE!', 'exit');
        jocAcabat = true;
        document.getElementById('btn-enviar').disabled = true;
    } else if (rondesRestants === 0) {
        logTerminal('SISTEMA BLOQUEJAT. Codi: [ ' + codiSecret.join(' | ') + ' ]', 'error');
        jocAcabat = true;
        document.getElementById('btn-enviar').disabled = true;
    }
});

omplirSelects();
actualitzarRondes();
logTerminal('SYSTEM READY. WAITING FOR INPUT...', 'normal');
