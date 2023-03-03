const css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  let finalGradientColor = color1.value + " and " + color2.value;
  document.getElementById("text").textContent = finalGradientColor;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

document.getElementById("text").textContent = color1.value + " " + color2.value;
