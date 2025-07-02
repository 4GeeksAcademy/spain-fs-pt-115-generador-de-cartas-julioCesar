//import "bootstrap";
import "./style.css";


//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

const palos = [
  { simbolo: '♥', clase: 'rojo' },
  { simbolo: '♠', clase: 'negro' },
  { simbolo: '♣', clase: 'negro' },
  { simbolo: '♦', clase: 'rojo' }
];
const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


function generarCarta() {
  const palo = palos[Math.floor(Math.random() * palos.length)];
  const valor = valores[Math.floor(Math.random() * valores.length)];
  const contenido = `${valor}${palo.simbolo}`;

  document.getElementById('valorSuperior').textContent = contenido;
  document.getElementById('valorInferior').textContent = contenido;
  document.getElementById('centro').textContent = palo.simbolo;

  const carta = document.getElementById('carta');
  carta.classList.remove('rojo', 'negro');
  carta.classList.add(palo.clase);
  iniciarTemporizador();
}

let segundos = 10;

let intervalo;

function iniciarTemporizador() {
  clearInterval(intervalo);
  segundos = 10;
  actualizarContador();

  intervalo = setInterval(() => {
    segundos--;
    actualizarContador();

    if (segundos === 0) {
      generarCarta();
      segundos = 10;
    }
  }, 1000);
}

function actualizarContador() {
  const contador = document.getElementById('contador');
  contador.textContent = `Nueva carta en ${segundos} segundo${segundos === 1 ? '' : 's'}...`;

  // Cambia el color si faltan pocos segundos
  if (segundos <= 3) {
    contador.style.backgroundColor = '#dc3545';
    contador.style.color = '#fff';
  } else {
    contador.style.backgroundColor = 'rgba(255,255,255,0.1)';
    contador.style.color = '#f8f9fa';
  }
}

generarCarta();


document.getElementById('nuevoBtn').addEventListener('click', () => {
  generarCarta();
  iniciarTemporizador(); 
});
actualizarContador();
setInterval(actualizarContador, 1000);
