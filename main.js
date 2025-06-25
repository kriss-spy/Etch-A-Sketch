let gridLength = 4;
const root = document.documentElement;
root.style.setProperty("--gridLength", gridLength);

const grid = document.querySelector("#grid");
for (let i = 0; i < gridLength ** 2; i++) {
  let item = document.createElement("div");
  item.classList.add("item");
  grid.appendChild(item);
}

let items = document.querySelectorAll(".item");
items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    item.style["background-color"] = randomColor;
  });
});

const sizeInput = document.querySelector("#size-input");
const btn = document.querySelector("#submit-btn");
btn.addEventListener("click", () => {
  gridLength = sizeInput.value;
  sizeInput.value = "";
  if (!gridLength || gridLength != +gridLength) {
    alert("grid size bad input");
    return;
  } else if (gridLength <= 0) {
    alert("grid size must be positive integer");
    return;
  } else if (gridLength > 100) {
    alert("grid size maximum exceeded");
    return;
  }
  root.style.setProperty("--gridLength", gridLength);
  grid.textContent = "";
  for (let i = 0; i < gridLength ** 2; i++) {
    let item = document.createElement("div");
    item.classList.add("item");
    grid.appendChild(item);
  }
  items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      // item.setAttribute("backgroundColor", "green");
      randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      item.style["background-color"] = randomColor;
    });
  });
});
