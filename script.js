const REQUIRED_VISITS = 5;
const today = new Date().toDateString();

let visits = parseInt(localStorage.getItem("visits")) || 0;
let lastVisit = localStorage.getItem("lastVisit");

const countEl = document.getElementById("count");
const messageEl = document.getElementById("message");

// Validar QR
const params = new URLSearchParams(window.location.search);
const qrCode = params.get("qr");

if (qrCode === "KOYU-CLIENTE-OK") {
  if (lastVisit !== today && visits < REQUIRED_VISITS) {
    visits++;
    localStorage.setItem("visits", visits);
    localStorage.setItem("lastVisit", today);
  }
}

countEl.textContent = visits;

if (visits >= REQUIRED_VISITS) {
  messageEl.innerHTML = "🎉 ¡Platillo GRATIS! 🎉<br>Muéstralo al personal.";
} else if (qrCode === "KOYU-CLIENTE-OK") {
  messageEl.textContent = "✅ Visita registrada";
} else {
  messageEl.textContent = "Escanea el QR en KOYU para sumar visitas";
}

function resetCard() {
  localStorage.clear();
  location.reload();
}
