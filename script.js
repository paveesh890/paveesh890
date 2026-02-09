const flowerContainer = document.querySelector(".flowers");

for (let i = 0; i < 20; i++) {
  const flower = document.createElement("span");
  flower.innerHTML = "🌸";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 5 + Math.random() * 5 + "s";
  flower.style.fontSize = 20 + Math.random() * 20 + "px";
  flowerContainer.appendChild(flower);
}
