const resultBox = document.getElementById("resultBox");
const powerLevel = document.getElementById("powerLevel");

const ultMessages = [
  "ULT READY: Happy Birthday, Leaf. Your hero aura just broke the matchmaking algorithm.",
  "Combo Activated: Cake + Chaos + Champions. Leaf takes the win today.",
  "Team Callout: Protect Leaf at all costs. It's their birthday and they're carrying."
];

const lootDrops = [
  "Loot Crate Opened: Legendary Skin - Birthday Vanguard Leaf.",
  "Loot Crate Opened: Emote Unlocked - Dance of the Multiverse.",
  "Loot Crate Opened: Voice Line - 'Another year, another victory.'"
];

function showMessage(text, color) {
  resultBox.innerHTML = `<p>${text}</p>`;
  resultBox.style.borderColor = color;
  resultBox.classList.remove("burst");
  void resultBox.offsetWidth;
  resultBox.classList.add("burst");
}

document.getElementById("ultBtn").addEventListener("click", () => {
  const msg = ultMessages[Math.floor(Math.random() * ultMessages.length)];
  const buff = 9000 + Math.floor(Math.random() * 5000);
  powerLevel.textContent = `${buff.toLocaleString()}+`;
  showMessage(msg, "rgba(255, 71, 105, 0.7)");
});

document.getElementById("lootBtn").addEventListener("click", () => {
  const msg = lootDrops[Math.floor(Math.random() * lootDrops.length)];
  showMessage(msg, "rgba(22, 216, 255, 0.74)");
});
