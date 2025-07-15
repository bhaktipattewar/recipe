const text = "THE RECIPE BOOK!";
const welcomeText = document.getElementById("welcome-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    welcomeText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 80); // typing speed
  }
}

window.onload = typeWriter;
