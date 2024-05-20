const root = document.getElementById("root");
const text = document.getElementById("text");
const button = document.getElementById("button");
root.addEventListener("click", () => {
  text.style.display = "block";
  button.style.display = "block";
});
button.addEventListener("click", () => {
  window.location.href = "./menu.html";
});
