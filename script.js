const question = document.getElementById("question");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

// Список фраз, которые будут меняться
const phrases = [
    "Ну давай...",
    "Ну кому ты врешь?",
    "Давай признайся уже!",
    "Я же знаю, что хочешь",
    "Не нажимай сюда!",
    "Хватит вредничать ❤️",
    "Подумай еще раз...",
    "Кнопка 'Да' левее!"
];

let phraseIndex = 0;

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Ура! До встречи 14 февраля! ❤️";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    noBtn.style.display = "none";
});

const moveNoButton = () => {
    // 1. Меняем текст предложения
    question.innerHTML = phrases[phraseIndex];
    
    // Переходим к следующей фразе (когда фразы закончатся, начнем сначала)
    phraseIndex = (phraseIndex + 1) % phrases.length;

    // 2. Логика движения
    const btnRect = noBtn.getBoundingClientRect();
    const padding = 20;
    const maxX = window.innerWidth - btnRect.width - padding;
    const maxY = window.innerHeight - btnRect.height - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
};

// События для ПК и телефонов
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});