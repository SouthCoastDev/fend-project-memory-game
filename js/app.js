

    var playerGuess = [];
    var moveCounter = 0;


//  function flipCard(){
//     document.querySelector('.deck').addEventListener('click', function(event){
//         if(event.target.classList.contains('card')){
//            let card = event.target;
//            card.classList.toggle('open');
//         }
//     });    
//  }

function addCardToGuess(card){
    playerGuess.push(card);
}


function matchTrue(){
//clear array
//lock cards open
//add to list of matched cards
//check if anything is left to match?
//show win modal.
}



function increaseAttmept(){
    moveCounter ++;
}





 /*
 * Create a list that holds all of your cards
 */
var cardList = [
    "fa-diamond"
    ,"fa-paper-plane-o"
    ,"fa-anchor"
    ,"fa-bolt"
    ,"fa-cube"
    ,"fa-leaf"
    ,"fa-bicycle"
    ,"fa-bomb"
];

var guessList = [];

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


/* set up the event listener for a card. If a card is clicked: */
  document.querySelector('.deck').addEventListener('click', function(event){         
 /*  - display the card's symbol (put this functionality in another function that you call from this one) */
    let card = event.target;   
    let cardFront = event.target.firstElementChild;
    if(card.classList.contains('card')){
        card.classList.toggle('open');
     }
 
 /*  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one) */


    if(cardFront.firstElementChild.classList.contains('fa')){
        guessList.push(cardFront.firstElementChild.classList[1]);
    }
    
    console.log(guessList);
    console.log(guessList[0]);
    console.log(guessList[1]);
 
    /*  - if the list already has another card, check to see if the two cards match */

    if(guessList.length > 1){

        if(guessList[0] === guessList[1]){
            console.log("Match");
        } else{
            console.log("No match");
            
        }   
        
      
        
    }
    
    if(guessList.length == 2) {
        while(guessList.length > 0) {
            guessList.pop();
        }
    }
    

    });  //end event listener
 

 /*    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 /*    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)*/
        
 //empty guessList
       
 
 
/*    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)*/


function matchCheck(){
    guessList[0] == guessList[1] ? true : false; 
}



 