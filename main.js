const gridSize = 16;

const grid = document.querySelector("#grid");
for (let i = 0; i < gridSize; i++) {
  let item = document.createElement("div");
  item.classList.add("item");
  grid.appendChild(item);
}

const items = document.querySelectorAll(".item");
items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    // item.setAttribute("backgroundColor", "green");
    console.log(item.textContent);
    item.style["background-color"] = "green";
  });
});
