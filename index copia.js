const giorniEl = document.getElementById('giorni'); 
const oreEl = document.getElementById('ore');
const minutiEl = document.getElementById('minuti');
const secondiEl = document.getElementById('secondi');

const nuovoAnno = "1 Jan 2022";

function contoallarovescia() {
  const nuovoAnnoData = new Date(nuovoAnno);
  const dataCorrente = new Date();

  const totalesecondi = (nuovoAnnoData - dataCorrente) / 1000;

  const giorni = Math.floor(totalesecondi / 3600 / 24);
  const ore = Math.floor(totalesecondi / 3600) % 24;
  const minuti = Math.floor(totalesecondi / 60) % 60;
  const secondi = Math.floor(totalesecondi) % 60;

giorniEl.innerHTML = giorni;
oreEl.innerHTML = formatTime(ore);
minutiEl.innerHTML = formatTime(minuti);
secondiEl.innerHTML = formatTime(secondi);
}

function formatTime(tempo){
    return tempo < 10 ? (`0${tempo}`) : tempo;
}

// chiamata iniziale
contoallarovescia();

setInterval(contoallarovescia, 1000);
