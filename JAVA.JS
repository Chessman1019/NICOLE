const messages = [
  "🌻 Hola Nicole 🌻",
  "Quiero que sepas lo importante que eres para mí ✨",
  "Eres mucho más que una amiga, porque contigo todo es diferente 💕",
  "Me apoyas en cada momento y siempre logras sacarme una sonrisa 😌",
  "Con estos girasoles quiero recordarte lo valiosa que eres ☀️",
  "A tu lado todo se siente más bonito, más fácil, más feliz 💛",
  "Gracias por ser tú, por estar y por hacer que cada día sea especial ✨",
  "Te aprecio hoy, mañana y siempre 🌹"
];

let index = 0;
const messageEl = document.getElementById("message");

function nextMessage() {
  index = (index + 1) % messages.length;
  messageEl.classList.remove("show");
  setTimeout(() => {
    messageEl.textContent = messages[index];
    messageEl.classList.add("show");
  }, 300);
}

// Mostrar primer mensaje al cargar
window.onload = () => {
  messageEl.classList.add("show");
};


