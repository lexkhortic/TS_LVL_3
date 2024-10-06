const button = document.getElementById("actionButton") as HTMLButtonElement;
const imageBlock = document.getElementById("imageBlock") as HTMLElement;

let isImageVisible = false;

button.addEventListener("click", () => {
  if (!isImageVisible) {
    button.textContent = "Тыкни снова и все пройдет!"
    imageBlock.style.display = "block";
    isImageVisible = true;
  }
  else {
    button.textContent = "Не тыкай на меня, худо будет!"
    imageBlock.style.display = "none";
    isImageVisible = false;
  }
});
