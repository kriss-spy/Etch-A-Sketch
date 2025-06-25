let gridLength = 4;

const grid = document.querySelector("#grid");
for (let i = 0; i < gridLength ** 2; i++) {
  let item = document.createElement("div");
  item.classList.add("item");
  grid.appendChild(item);
}

let items = document.querySelectorAll(".item");
items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    // item.setAttribute("backgroundColor", "green");
    item.style["background-color"] = "green";
  });
});

const sizeInput = document.querySelector("#size-input");
const btn = document.querySelector("#submit-btn");
btn.addEventListener("click", () => {
  gridLength = sizeInput.value;
  sizeInput.value = "";
  if (gridLength > 100) {
    alert("grid size maximum exceeded");
  }
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
      item.style["background-color"] = "green";
    });
  });
});
