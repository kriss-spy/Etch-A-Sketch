const items = document.querySelectorAll(".item");
items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    // item.setAttribute("backgroundColor", "green");
    console.log(item.textContent);
    item.style["background-color"] = "green";
  });
});
