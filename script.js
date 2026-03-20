
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
