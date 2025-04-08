const grid = document.getElementById("grid");
const sequenceText = document.getElementById("sequence");
const levelText = document.getElementById("level");
const nextButton = document.getElementById("nextButton");
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modalOverlay");
const modalMessage = document.getElementById("modalMessage");

const sequences = [
    { 
        text: "<img src='imagens/baixo.png' alt='baixo'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/cima.png' alt='cima'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/pintura.png' alt='pintura'>",
        correctPath: [1, 2, 4, 7] 
    },
    { 
        text: "<img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/pintura.png' alt='pintura'>",
        correctPath: [0, 5, 10, 15] 
    },
    { 
        text: "<img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/pintura.png' alt='pintura'>",
        correctPath: [0, 4, 8, 9, 13] 
    },
    { 
        text: "<img src='imagens/direita.png' alt='direita'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/pintura.png' alt='pintura'>",
        correctPath: [1, 5, 6, 7, 11, 15] 
    },
    { 
        text: "<img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/esquerda.png' alt='esquerda'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/pintura.png' alt='pintura'>",
        correctPath: [0, 5, 8, 13] 
    },
    { 
        text: "<img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/pintura.png' alt='pintura'>",
        correctPath: [0, 4, 8, 12, 13, 14, 15] 
    },
    { 
        text: "<img src='imagens/baixo.png' alt='baixo'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/esquerda.png' alt='esquerda'> <img src='imagens/pintura.png' alt='pintura'>",
        correctPath: [5, 6, 9, 10] 
    },
    { 
        text: "<img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/cima.png' alt='cima'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/baixo.png' alt='baixo'> <img src='imagens/direita.png' alt='direita'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/cima.png' alt='cima'> <img src='imagens/cima.png' alt='cima'> <img src='imagens/pintura.png' alt='pintura'> <img src='imagens/cima.png' alt='cima'> <img src='imagens/pintura.png' alt='pintura'>",
        correctPath: [0, 3, 4, 7, 9, 10, 12, 15] 
    }

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
        sequenceText.innerHTML = sequences[currentSequence].text; 
        levelText.innerText = "Nível " + (currentSequence + 1);
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
sequenceText.innerHTML = sequences[currentSequence].text; 
createGrid();


const tutorialBtn = document.getElementById('tutorial');
    const tutorialBox = document.getElementById('tutorialBox');

    tutorialBtn.addEventListener('click', () => {
        if (tutorialBox.style.display === 'none') {
            tutorialBox.style.display = 'block';
        } else {
            tutorialBox.style.display = 'none';
        }
    });
