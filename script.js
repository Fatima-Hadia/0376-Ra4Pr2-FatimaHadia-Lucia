document.addEventListener('DOMContentLoaded', function () {
    console.log('JS cargado correctamente');

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
            select.innerHTML = '';
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

        for (let i = 0; i < 4; i++) {
            if (intentTemp[i] === codiTemp[i]) {
                pistes.push('1');
                codiTemp[i] = null;
                intentTemp[i] = null;
            }
        }

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

    const boto = document.getElementById('btn-enviar');

    if (!boto) {
        console.error('No se encontró el botón con id btn-enviar');
        return;
    }

    boto.addEventListener('click', function () {
        console.log('Botón pulsado');

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
            boto.disabled = true;
        } else if (rondesRestants === 0) {
            logTerminal('SISTEMA BLOQUEJAT. Codi: [ ' + codiSecret.join(' | ') + ' ]', 'error');
            jocAcabat = true;
            boto.disabled = true;
        }
    });

    omplirSelects();
    actualitzarRondes();

    document.getElementById('terminal').innerHTML = '';
    logTerminal('SYSTEM READY. WAITING FOR INPUT...', 'normal');
});
