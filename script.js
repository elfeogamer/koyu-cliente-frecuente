const REQUIRED_VISITS = 5;

let visits = parseInt(localStorage.getItem("visits")) || 0;

const countEl = document.getElementById("count");
const messageEl = document.getElementById("message");

countEl.textContent = visits;

if (visits >= REQUIRED_VISITS) {
  messageEl.innerHTML = "🎉 ¡Platillo GRATIS! Muéstralo en caja.";
} else {
  messageEl.textContent = "Escanea el QR en KOYU para sumar visitas";
}

function resetCard() {
  if (confirm("¿Reiniciar tarjeta?")) {
    localStorage.clear();
    location.reload();
  }
}
