0376-Ra4Pr2-FatimaHadia-CayuelaLucia

Joc de Mastermind numèric amb estètica de terminal.
Curs 2025/2026 — Institut de Logística de Barcelona


Com jugar

Obre index.html al navegador.
Escull 4 números i clica EXECUTAR CODI.
Tens 5 intents per endevinar el codi secret.

Símbols de pista
SímbolSignificat1Número correcte i en la posició correctaØNúmero correcte però en posició incorrecta×El número no existeix en el codi secret

Preguntes sobre Git i GitHub

1. Reconeix la utilitat de les aplicacions d'ofimàtica web
P1 — Per què GitHub és una aplicació de treball col·laboratiu?
GitHub funciona des del navegador i permet que diverses persones treballin al mateix projecte alhora. Té eines com issues i pull requests per comunicar-se i combinar la feina de l'equip, igual que Google Docs però per a codi.

P2 — Quins avantatges té GitHub respecte guardar fitxers localment?

El projecte no es perd si l'ordinador es trenca.
Es pot treballar des de qualsevol lloc.
Diverses persones poden treballar alhora.
Es guarda un historial de tots els canvis.
Es pot recuperar una versió anterior si hi ha errors.


P3 — Com ajuda GitHub a gestionar versions?
Cada commit és una fotografia del projecte en aquell moment. Això permet veure qui va canviar què, comparar versions i tornar enrere si alguna cosa va malament.

P4 — En quins projectes és útil Git i GitHub?

Pàgines web i aplicacions.
Projectes amb diversos programadors.
Projectes open source.
Documentació tècnica en Markdown.


P5 — Diferències entre Git i emmagatzematge tradicional:
GitTradicionalHistorialCompletNo existeixCol·laboracióIntegradaManualReversibilitatSíNoTreball en paral·lelAmb branquesMolt difícil

2. Classifica segons funcionalitat
P6 — Diferència entre Git i GitHub:

Git → programa que s'instal·la a l'ordinador, controla versions, funciona sense internet.
GitHub → pàgina web que allotja repositoris Git al núvol i afegeix eines col·laboratives.


Git és l'eina, GitHub és el servei.


P7 — Funcionalitats de GitHub a més del control de versions:

Issues — registrar tasques i errors.
Pull Requests — revisar canvis abans d'acceptar-los.
GitHub Pages — publicar llocs web gratuïtament.
Actions — automatitzar processos.
Wiki — documentació interna.


P8 — Definicions:

Repositoris: espai on es guarden tots els fitxers i l'historial del projecte.
Issues: entrades per registrar tasques, errors o millores.
Pull Requests: sol·licitud per integrar canvis d'una branca a una altra, amb revisió prèvia.
GitHub Pages: servei gratuït per publicar llocs web des d'un repositori.


P9 — Funció de les branques (branches):
Les branques permeten treballar en una nova funcionalitat sense afectar el codi estable de main. Un cop acabada la feina, es fusiona (merge) amb main.
bashgit checkout -b feature-ui-logic

P10 — Per a què serveixen les pull requests?
Serveixen per proposar canvis i que l'equip els revisi i aprovi abans d'integrar-los. Eviten errors i mantenen el codi net.

3. Gestiona els comptes d'usuari
P11 — Què és un compte d'usuari a GitHub?
És la identitat digital a la plataforma. Sense compte no es pot fer push, ni col·laborar en repositoris remots ni identificar qui fa cada canvi.

P12 — Repositori públic vs privat:
PúblicPrivatQui el veuTothomNomés col·laboradorsÚs habitualOpen source, portfolisProjectes d'empresaCostGratuïtGratuït amb límits

P13 — Com afegir un col·laborador:

Anar al repositori → Settings.
Clicar Collaborators.
Clicar Add people i cercar l'usuari.
L'usuari accepta la invitació.


P14 — Rols d'un usuari en un repositori:

Read — només pot veure el codi.
Write — pot fer canvis i crear branques.
Maintain — pot gestionar el repositori.
Admin — control total.


P15 — Per què és important gestionar els permisos?
Una mala gestió pot causar modificacions accidentals, pèrdua de codi o exposició de dades privades. Cal donar sempre el mínim de permisos necessari.

4. Aplica criteris de seguretat
P16 — Riscos de massa permisos:

Qualsevol pot esborrar branques o historial.
Es pot pujar codi sense revisió.
Accés a dades confidencials.


P17 — Per què usar tokens o SSH en lloc de contrasenya?
GitHub va eliminar l'autenticació per contrasenya el 2021. Els tokens es poden revocar fàcilment i les claus SSH xifren la comunicació sense enviar cap contrasenya.

P18 — Què passa si es publiquen contrasenyes al repositori?
Qualsevol persona pot veure-les. Robots automatitzats escanegen GitHub buscant claus filtrades constantment. La solució és usar fitxers .env i afegir-los al .gitignore.

P19 — Bones pràctiques de seguretat:

Activar 2FA (autenticació de dos factors).
Mai pujar contrasenyes ni claus al repositori.
Afegir fitxers sensibles al .gitignore.
Protegir la branca main amb revisió obligatòria.


P20 — Per què controlar qui fa push a main?
main és la versió estable. Si qualsevol hi pot fer push directament, es pot trencar la producció sense revisió. La solució és obligar a passar per una pull request.

5. Utilitza les aplicacions de forma cooperativa
P21 — Com treballen diverses persones amb GitHub?

Un membre crea el repositori i afegeix col·laboradors.
Cadascú clona el repositori.
Cada persona crea una branca pròpia.
Fan commits amb els seus canvis.
Pugen la branca amb git push.
Obren una pull request.
L'equip revisa i fa el merge a main.


P22 — Per què treballar amb branques i no directament a main?

Els errors en una branca no afecten la versió estable.
Diverses persones poden treballar alhora sense interferir.
El codi es revisa abans d'integrar-se.


6. Elabora documentació
P23 — Per què és important el README.md?
És el primer que veu qualsevol persona al repositori. Explica què és el projecte, com executar-lo i com contribuir-hi. Sense README el projecte és difícil d'entendre.

P24 — Avantatges de Markdown:

Sintaxi molt senzilla amb símbols com #, *, >.
GitHub el converteix automàticament en HTML.
Es pot versionar perfectament amb Git.
Permet taules, llistes, codi i imatges.

markdown# Títol
**negreta** i *cursiva*
- llista
`codi`

P25 — Com ajuda la documentació a altres desenvolupadors?
Permet entendre el projecte ràpidament, configurar l'entorn, contribuir seguint les normes i solucionar problemes sense haver de llegir tot el codi.

Projecte realitzat per FatimaHadia i CayuelaLucia — Curs 2025/2026
