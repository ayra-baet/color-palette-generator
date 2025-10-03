// DOM ELEMENTS
const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.getElementById("palette-container");

// EVENT LISTENER
generateBtn.addEventListener("click", generatePalette);
paletteContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("copy-btn")) {
        const hexValue = e.target.previousElementSibling.textContent;

        navigator.clipboard.writeText(hexValue)
        .then(() => showCopySuccess(e.target))
        .catch((err) => console.log(err));
    }
});

function showCopySuccess(element) {
    element.classList.remove("far", "fa-copy");
    element.classList.add("fas", "fa-check");

    element.style.color = "#48bb78";

    setTimeout(() => {
        element.classList.remove("fas", "fa-check");
        element.classList.add("far", "fa-copy");
        element.style.color = "";
    },1500);
}

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