const messages = [
  "🌻 Hola Nicole 🌻",
  "Eres una buena persona , porque  me ayududaste en muchas cosas 💕",
  "Con  estos girasoles, queria agradecerte por todo ☀️",
  "Te APRECIO hoy, mañana y siempre 💛"
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

