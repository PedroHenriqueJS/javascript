const colors = ["Green", "Red", "Blue", "Yellow", "Orange", "Purple"];
const colorTranslations = {
    "Green": "Verde",
    "Red": "Vermelho",
    "Blue": "Azul",
    "Yellow": "Amarelo",
    "Orange": "Laranja",
    "Purple": "Roxo"
};
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    const colorName = colors [randomNumber];
    const translatedColor = colorTranslations[colorName];

    document.body.style.backgroundColor = colorName;
    color.textContent = translatedColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}