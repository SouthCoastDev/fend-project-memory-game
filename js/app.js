let openCardList = [];
const deck = document.querySelector(".deck");
let matchedCards = 0;
let moveCounter = 0;



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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



 //set up the event listener for a card. If a card is clicked:
const cards = document.getElementsByClassName('card');

for (var i = 0; i < cards.length; i++){
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", checkMatch);
};
 
 //addEventListener('click', function(event){



 //- display the card's symbol (put this functionality in another function that you call from this one)
 //- add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
//- if the list already has another card, check to see if the two cards match
 //   + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 //   + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
//   + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
//    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 

//});
 


 
function startGame(){
    matchedCards = 0;
    let moveCounter = 0;
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


function gameWon(){
 if(matchedCards == 8){
    openModal();
 }
}

function openModal(){
    setTimeout(function(){
    alert("game won");
    },2000);
}