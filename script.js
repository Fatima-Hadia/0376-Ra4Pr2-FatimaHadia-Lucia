//Hadia Fatima

//Generació de Selects: Crear un bucle que ompli els 4 desplegables amb números del 0 al 9.

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

//Funció logTerminal(missatge, tipus): Crear una funció que rebi un text i el tipus (èxit, error o normal) i l'imprimeixi a la zona de terminal del HTML amb un efecte de "línia de comanda".

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


//Gestor d'Esdeveniments: Escoltar el clic del botó "Executar Codi", recollir els valors dels 4 selects i cridar a la lògica de comparació.

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
        logTerminal('CODI CORRECTE! Has trencat el sistema en ' + (MAX_RONDES - rondesRestants) + ' intents.', 'exit');
        jocAcabat = true;
        document.getElementById('btn-enviar').disabled = true;
    } else if (rondesRestants === 0) {
        logTerminal('SISTEMA BLOQUEJAT. El codi secret era: [ ' + codiSecret.join(' | ') + ' ]', 'error');
        jocAcabat = true;
        document.getElementById('btn-enviar').disabled = true;
    }
});

//Control de Rondes: Actualitzar el comptador visual de rondes restants a cada intent.

function actualitzarRondes() {
    document.getElementById('rondes-restants').textContent = rondesRestants;
}



// Lucia Cayuela
//Generació del Codi Secret: Crear un array de 4 números aleatoris al carregar la pàgina.
//Algoritme de Validació (Mastermind): Crear una funció que rebi l'intent de l'usuari i retorni un array de pistes (1, Ø, ×).
//Atenció: L'algoritme ha de ser de dues passades per evitar falsos positius amb números repetits.
//Comprovació de Final de Joc: Determinar si l'intent és guanyador (quatre "1") o si s'han esgotat les 5 rondes.