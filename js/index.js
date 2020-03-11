let cards = document.getElementsByClassName("flip-container");
let cardContents = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
let flippers = document.getElementsByClassName("flipper");
let chosenCards = [];
let matchedCards = [];
let matchedCardIds = [];
let currentAttempts = 0;
let attemptAddedOnce = false;


// Game starts.
getAttempts(currentAttempts);
setCardValues(cardContents);

/* Adding click events to cards (their flip-containers). 
   When two cards have been chosen they are compared; 
   if match they stay up, else they flip back. */
for (i = 0; i < cards.length; i++) {
    currentFlipper = flippers[i];
    let currentLoopIndex = i;

    cards[i].addEventListener("click", function() { 
        if (chosenCards.length != 2) {
        chooseCards(currentLoopIndex);
        matchCards();        
        if (matchedCards.length == 16) {
            togglePopUp("pop-up-restart");
            document.querySelector("#pop-up-restart p").innerHTML = `You made it in ${currentAttempts} attempts!`;
        }
        }
    })
}

/* Game ends. 
   Restart popup appears. */
document.getElementById("restart-button").addEventListener("click", function() {
    togglePopUp("pop-up-restart");
    // Flipping cards back. Extracts ID number from each card, so they can be sent to flipCard().
    for (i = 0; i < matchedCards.length; i++) {    
        matchedCardIds.push(matchedCards[i].id);
        matchedCardIds[i] = matchedCardIds[i].replace("card-", ""); 
        flipCard(matchedCardIds[i]-1);
    }

    // Clearing matchedCards[] and matchedCardIds for next round. 
    for (i = 0; i < 16; i++) {
        matchedCards.pop();
        matchedCardIds.pop();
    }
    
    // Resetting attempts and randomizes cards for next round.
    currentAttempts = 0;
    getAttempts(currentAttempts);
    setTimeout(function() {
        setCardValues(cardContents);
    }, 1000);
})






// ******************* LIST OF FUNCTIONS ******************* 
function getAttempts(attempts) {
    let displayAttempts = document.getElementById("attempts-tag").innerText = `Attempts - ${attempts}`;
    return displayAttempts;   
}

function togglePopUp(elementId) {
    document.getElementById(elementId).classList.toggle("hidden");
}

function setCardValues(array) {
    let shuffledArray = arrayShuffle(array);
    for (i = 0; i < shuffledArray.length; i++) {
        cards[i].querySelector(".back").innerText = `${shuffledArray[i]}`;
    }     
}

function arrayShuffle(array) {
    let newArrayIndex;
    let temporaryHolder; 
    for (i = array.length - 1; i > 0; i--) {
        temporaryHolder = array[i];
        newArrayIndex = Math.floor(Math.random() * (i + 1)); 
        array[i] = array[newArrayIndex];
        array[newArrayIndex] = temporaryHolder;
    }
    return array;
};

// For clicking on cards.
function chooseCards(currentLoopIndex) {
    if ((chosenCards.length < 2) && (chosenCards.includes(cards[currentLoopIndex]) == false) && (matchedCards.includes(cards[currentLoopIndex]) == false)) {
        flipCard(currentLoopIndex);
        chosenCards.push(cards[currentLoopIndex]);
        } 
        // If user clicks already chosen or matched card.
        else if ((chosenCards.includes(cards[currentLoopIndex])) || (matchedCards.includes(cards[currentLoopIndex]))) {
            shakeCard(currentLoopIndex);
        } 
}

// Checks for match when two cards are chosen.
function matchCards() {
    if (chosenCards.length == 2) {
        if (attemptAddedOnce == false) {
            currentAttempts++;
            getAttempts(currentAttempts);
            attemptAddedOnce = true; 
        }
        if ((chosenCards[0].getElementsByClassName("back")[0].innerHTML) == (chosenCards[1].getElementsByClassName("back")[0].innerHTML)) {
            // Saving matched cards, clearing chosenCards for next attempt. 
            matchedCards.push(chosenCards[0]);
            matchedCards.push(chosenCards[1]);
            chosenCards.pop();
            chosenCards.pop();
            attemptAddedOnce = false; 
        } else {
            // Unmatching cards shake and flip back.
            shakeCard(chosenCards);
            flipCard(chosenCards);
            attemptAddedOnce = false;
        }
    }
}

function flipCard(cardIndex) {
    if (Array.isArray(cardIndex)) {
        let cardId1 = cardIndex[0].id.replace("card-", "") - 1;
        let cardId2 = cardIndex[1].id.replace("card-", "") - 1;
        setTimeout(function() {
            flippers[cardId1].classList.toggle("flipped");
            chosenCards.shift();
            flippers[cardId2].classList.toggle("flipped");
            chosenCards.shift();
            }, 2000); 
    } else {
    flippers[cardIndex].classList.toggle("flipped");
    }    
}

function shakeCard(cardIndex) {
    if (Array.isArray(cardIndex)) {
        let cardId1 = cardIndex[0].id.replace("card-", "") - 1;
        let cardId2 = cardIndex[1].id.replace("card-", "") - 1;
        setTimeout(function() {
            cards[cardId1].classList.toggle("shake-effect");
            cards[cardId2].classList.toggle("shake-effect");
            }, 1000); 
        cards[cardId1].classList.toggle("shake-effect");
        cards[cardId2].classList.toggle("shake-effect");        
    } else {
    setTimeout(function() {cards[cardIndex].classList.toggle("shake-effect")}, 1000);
    // Resets the shake-effect.
    cards[cardIndex].classList.toggle("shake-effect");
    }
}


