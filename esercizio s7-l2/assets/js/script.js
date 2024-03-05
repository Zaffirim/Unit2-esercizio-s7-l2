const nameInput = document.getElementById("name-input");
const saveButton = document.getElementById("save-button");
const clearButton = document.getElementById("clear-button");
const savedNameElement = document.getElementById("saved-name");

// Carica il nome salvato dal localStorage
const savedName = localStorage.getItem("nome");
if (savedName) {
  savedNameElement.textContent = `Nome salvato: ${savedName}`;
  nameInput.value = savedName;
}

// Gestisci il salvataggio del nome
saveButton.addEventListener("click", () => {
  const nome = nameInput.value;
  localStorage.setItem("nome", nome);
  savedNameElement.textContent = `Nome salvato: ${nome}`;
});

// Gestisci la cancellazione del nome
clearButton.addEventListener("click", () => {
  localStorage.removeItem("nome");
  savedNameElement.textContent = "";
  nameInput.value = "";
});


const counterElement = document.getElementById("counter");

// Carica il valore del contatore dal sessionStorage
let counter = sessionStorage.getItem("counter");
if (!counter) {
  counter = 0;
}

// Aggiorna il contatore ogni secondo
setInterval(() => {
  counter++;
  counterElement.textContent = counter;
  sessionStorage.setItem("counter", counter);
}, 1000);
