const grid = document.getElementById("grid");
const sequenceText = document.getElementById("sequence");
const levelText = document.getElementById("level");
const nextButton = document.getElementById("nextButton");
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modalOverlay");
const modalMessage = document.getElementById("modalMessage");


const sequences = [
    { text: "⬇️🎨➡️⬆️🎨➡️🎨⬇️➡️🎨", correctPath: [1,2,4,7] },
    { text: "🎨⬇️➡️🎨⬇️➡️🎨⬇️➡️🎨", correctPath: [0,5,10,15] },
    { text: "🎨⬇️🎨⬇️🎨➡️🎨⬇️🎨", correctPath: [0,4,8,9,13] },
    { text: "➡️🎨⬇️🎨➡️🎨➡️🎨⬇️🎨⬇️🎨", correctPath: [1,5,6,7,11,15] }
];

let currentSequence = 0; 
let correctPath = sequences[currentSequence].correctPath; 

function createGrid() {
    grid.innerHTML = "";
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cedula");
        cell.dataset.index = i;
        cell.textContent = i;
        cell.addEventListener("click", () => cell.classList.toggle("colored"));
        grid.appendChild(cell);
    }
}

function checarResult() {
    let cells = document.querySelectorAll(".cedula");
    let userPath = [];
    cells.forEach((cell, index) => {
        if (cell.classList.contains("colored")) {
            userPath.push(index);
        }
    });

    if (JSON.stringify(userPath) === JSON.stringify(correctPath)) {
        mostrarModal("🎉 Parabéns! Você acertou!", true);
        nextButton.disabled = false; 
    } else {
        mostrarModal("❌ Ops! Tente novamente.", false);
    }
}

function nextSequencia() {
    if (currentSequence < sequences.length - 1) {
        currentSequence++;
        correctPath = sequences[currentSequence].correctPath; 
        sequenceText.innerText = "Sequência: " + sequences[currentSequence].text;
        levelText.innerText = "Level " + (currentSequence + 1); 
        createGrid(); 
        nextButton.disabled = true; 
    } else {
        mostrarModal("🎉 Você completou todas as sequências!", true);
        nextButton.disabled = true;
    }
}

function mostrarModal(message, success) {
    modalMessage.innerText = message;
    modal.style.display = "block";
    modalOverlay.style.display = "block";
}

function fecharModal() {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
}

// iniciar primeira
sequenceText.innerText = "Sequência: " + sequences[currentSequence].text;
createGrid();