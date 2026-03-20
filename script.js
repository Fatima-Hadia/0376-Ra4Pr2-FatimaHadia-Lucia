const MAX_RONDES = 5;
let rondesRestants = MAX_RONDES;
let jocAcabat = false;

function generarCodiSecret() {
    const codi = [];
    for (let i = 0; i < 4; i++) {
        codi.push(Math.floor(Math.random() * 10));
    }
    return codi;
}

const codiSecret = generarCodiSecret();

function validarIntent(intent, secret) {
    const pistes = [];
    const secretCopia = [...secret];
    const intentCopia = [...intent];

    for (let i = 0; i < 4; i++) {
        if (intentCopia[i] === secretCopia[i]) {
            pistes.push('1');
            secretCopia[i] = null;
            intentCopia[i] = null;
        }
    }

    for (let i = 0; i < 4; i++) {
        if (intentCopia[i] === null) continue;

        const index = secretCopia.indexOf(intentCopia[i]);

        if (index !== -1) {
            pistes.push('Ø');
            secretCopia[index] = null;
        } else {
            pistes.push('×');
        }
    }

    return pistes;
}

function comprovarFinalJoc(pistes) {
    return pistes.filter(p => p === '1').length === 4;
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
        logTerminal('SISTEMA BLOQUEJAT. El codi era: ' + codiSecret.join(''), 'error');
        jocAcabat = true;
        document.getElementById('btn-enviar').disabled = true;
    }
});

omplirSelects();
actualitzarRondes();
logTerminal('SYSTEM READY. WAITING FOR INPUT...', 'normal');
