const textEl = document.getElementById("text"),
  speedEl = 1,
  text = "  Hi i'am oussema, i'm junior web developper";
let idx = 1;
let speed = 300 / speedEl;

const writeText = () => {
  textEl.innerText = text.slice(0, idx);
  idx++;
  setTimeout(writeText, speed);
};
writeText();
