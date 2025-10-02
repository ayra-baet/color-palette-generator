// DOM ELEMENTS
const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.getElementById("palette-container");

// EVENT LISTENER
generateBtn.addEventListener("click", generatePalette);

function generatePalette() {
    const colors = [];

    for (let i = 0; i < 5; i++) {
        colors.push(generateRandomColor());
    }

    displayPalette(colors);
}

function generateRandomColor() {
    const values = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += values[Math.floor(Math.random() * values.length)];
    }

    return color;
}

function displayPalette(colors) {
    const colorBoxes = document.querySelectorAll(".color-box");

    colorBoxes.forEach((box, index) => {
        const color = colors[index];
        const colorDiv = box.querySelector(".color");
        const hexValue = box.querySelector(".hex-value");

        colorDiv.style.background = color;
        hexValue.textContent = color;
    });
}

generatePalette();