const btn = document.getElementById("btn");
const body = document.body;

btn.addEventListener("click", changColor)


function changColor() {
    const colorOne = Math.floor(Math.random() * 256);
    const colorTwo = Math.floor(Math.random() * 256);
    const colorThree = Math.floor(Math.random() * 256);
    const newColor = `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
    body.style.background = newColor
    console.log(newColor)
}

changColor();