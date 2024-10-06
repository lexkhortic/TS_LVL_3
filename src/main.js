var button = document.getElementById("actionButton");
var imageBlock = document.getElementById("imageBlock");
var isImageVisible = false;
button.addEventListener("click", function () {
    if (!isImageVisible) {
        button.textContent = "Тыкни снова и все пройдет!";
        imageBlock.style.display = "block";
        isImageVisible = true;
    }
    else {
        button.textContent = "Не тыкай на меня, худо будет!";
        imageBlock.style.display = "none";
        isImageVisible = false;
    }
});
