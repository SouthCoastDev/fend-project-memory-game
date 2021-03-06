
//set up game variables:
let openCardList = [];
const deck = document.querySelector(".deck");
let matchedCards = 0;
let moveCounter = 0;
let timer;
let clock = {mins:0 , secs:0};
const timerDisplay = document.querySelector('.time');
const cards = document.getElementsByClassName('card');

const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click' , newGame);

//add event listners to all cards
 for (var i = 0; i < cards.length; i++){
     card = cards[i];
     card.addEventListener("click", displayCard);
     card.addEventListener("click", checkMatch);
 };

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function newGame(){
    //reset all game counters
    matchedCards = 0;
    moveCounter = 0;
    document.querySelector('.moves').innerHTML = moveCounter;
    //remove matched/open/show from all cards:
    for(let i = 0; i < cards.length; i++){
        cards[i].classList.remove('match');
        cards[i].classList.remove('open');
        cards[i].classList.remove('show');
    }
    //reset and stop timer
    clearInterval(timer);
    clock = {mins:0 , secs:0};
    timerDisplay.innerHTML = clock.mins + ':' + clock.secs;
    //shuffle and assign deck.
    let shuffledCards = Array.from(cards);
    shuffledCards = shuffle(shuffledCards);
    for (var i= 0; i < shuffledCards.length; i++){
        deck.appendChild(shuffledCards[i]);
    }
}

function displayCard(){
    this.classList.toggle('open');
    this.classList.toggle('show');
    this.classList.toggle('disabled');
    addToOpenCardList(this);
};

function freezeCards(){
    for (let i = 0; i < cards.length; i++){
        card = cards[i];
        card.classList.add('disabled');
    };
}

function unfreezeCards(){
    setTimeout(function(){
    for (var i = 0; i < cards.length; i++){
        card = cards[i];
        card.classList.remove('disabled');
    };
    },2500);
}

function addToOpenCardList(card){
    openCardList.push(card.firstElementChild.classList[1]);
}

function checkMatch(){
    if(openCardList.length > 1){
        freezeCards();
        if(openCardList[0] == openCardList[1]){
            matchMade();
            openCardList = [];
            matchedCards ++;
            console.log(matchedCards);
            gameWon();
        } else{
            noMatch();
        }
        unfreezeCards();
        increaseCounter();
    }
}

function matchMade(){
    const cards = document.getElementsByClassName(openCardList[1]);
    for(let i = 0; i < cards.length; i++){
        cards[i].parentElement.classList.add('match');
        cards[i].parentElement.classList.remove('open');
        cards[i].parentElement.classList.remove('show');
    }
}

function noMatch(){
    const openCards = document.getElementsByClassName('open');
    setTimeout(function(){
        openCards[0].classList.remove('open','show');
        openCards[0].classList.remove('open' ,'show');
    },2000);
    openCardList = [];
}

function increaseCounter(){
    moveCounter ++;
    setTimeout(function(){
        document.querySelector('.moves').innerHTML = moveCounter;
    },500);
    starRating();
    if(moveCounter == 1 ){
        startTimer();
    }
}

function starRating(){
    const stars = document.querySelector('.stars').children;
    const star1 = stars[0];
    const star2 = stars[1];
    const star3 = stars[2];
    if(moveCounter > 15){
        star3.firstElementChild.classList.add('lifeLost');
    } else if(moveCounter >= 9){
        star2.firstElementChild.classList.add('lifeLost');
    }
}

function startTimer(){
     timer = setInterval(function(){
        if(clock.secs == 59){
            clock.mins ++;
            clock.secs = 0;
            clock.mins = clock.mins > 9 ? clock.mins : '0' + clock.mins;
        } else{
            clock.secs ++;
            clock.secs = clock.secs > 9 ? clock.secs : '0' + clock.secs;
        }
        timerDisplay.innerHTML = clock.mins + ':' + clock.secs;
        }, 1000);
}

function gameWon(){
    if(matchedCards == 8){
       openModal();
    }
   }

function openModal(){
// some logic from: https://www.w3schools.com/howto/howto_css_modals.asp
    setTimeout(function(){
        const modal = document.querySelector('.modal');
        let finalScore = document.querySelector('.final-score');
        let finalTime = document.querySelector('.final-time');
        const playAgain = document.querySelector('.play-again');
        let score = 0;

        if(moveCounter > 15){
            score = 1;
        } else if(moveCounter > 9){
            score = 2;
        } else {
            score =3 ;
        }
        modal.style.display = "block";
        finalScore.innerHTML = "Your final score is: " + score + " stars" ;
        finalTime.innerHTML = "Your final time is " + document.querySelector('.time').innerHTML;
        playAgain.addEventListener('click' , newGame);
        playAgain.addEventListener('click' , function(){
            modal.style.display = "none";
        });
        clearInterval(timer);
        clock = {mins:0 , secs:0};
        timerDisplay.innerHTML = clock.mins + ':' + clock.secs;
    },1000);
}