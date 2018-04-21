let openCardList = [];
const deck = document.querySelector(".deck");




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
    card.addEventListener("click", matchMade);
    card.addEventListener("click",gameWon);
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

}

function displayCard(){
    this.classList.toggle('open');
    this.classList.toggle('show');  
    addToOpenCardList(this); 
};

function freezeCards(){
    for (var i = 0; i < cards.length; i++){
        card = cards[i];
        card.classList.add('disabled');
    };
}

function unfreezeCards(){
    for (var i = 0; i < cards.length; i++){
        card = cards[i];
        card.classList.remove('disabled');
    };
}



function addToOpenCardList(card){
    openCardList.push(card.firstElementChild.classList[1]);
    console.log(openCardList);
}


function matchMade(){  
    
    if(openCardList.length > 1){
        
        if(openCardList[0] == openCardList[1]){
            const cards = document.getElementsByClassName(openCardList[1]);
            for(let i = 0; i < cards.length; i++){                
                cards[i].parentElement.classList.add('match');
                cards[i].parentElement.classList.remove('open');            
                cards[i].parentElement.classList.remove('show');           
            }
        } 
        openCardList = [];        
    } 
 
}

function noMatch(){

}

function increaseCounter(){

}

function gameWon(){

}