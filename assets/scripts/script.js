const startBtn = document.querySelector('.start-btn');
const poputInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');


startBtn.onclick = () => {
    poputInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    poputInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    main.classList.remove('active');
   
}