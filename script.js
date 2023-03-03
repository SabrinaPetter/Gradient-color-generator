const css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const random = document.getElementById("generateRandom");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  let finalGradientColor = color1.value + " and " + color2.value;
  document.getElementById("text").textContent = finalGradientColor;
}

/*  substituted for HEX color 

function randomColor() {
  const o = Math.round,
    r = Math.random,
    s = 255;
  const rgb = "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
  const rgb2 = "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
  body.style.background =
    "linear-gradient(to right, " + rgb + ", " + rgb2 + ")";
  let color1 = rgb;
  let color2 = rgb2;
  const gradientColor = color1 + " and " + color2;
  document.getElementById("text").textContent = gradientColor;
  body.style.background =
    "linear-gradient(to right, " + color1 + ", " + color2 + ")";
}*/

function randomColor() {
  function rgbToHex() {
    const o = Math.round,
      r = Math.random,
      s = 255;
    const red = o(r() * s),
      green = o(r() * s),
      blue = o(r() * s);

    return (
      "#" +
      ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)
    );
  }

  const finalColor = rgbToHex();
  const finalColor2 = rgbToHex();
  console.log(finalColor, finalColor2);

  body.style.background =
    "linear-gradient(to right, " +
    finalColor.valueOf +
    ", " +
    finalColor2.valueOf +
    ")";
  let gradientColor = finalColor + " and " + finalColor2;
  body.style.background =
    "linear-gradient(to right, " + finalColor + ", " + finalColor2 + ")";
  document.getElementById("text").textContent = gradientColor;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

document.getElementById("text").textContent = color1.value + " " + color2.value;
