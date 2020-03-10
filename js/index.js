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

// Adding click events to cards (their flip-containers).
for (i = 0; i < cards.length; i++) {
    currentFlipper = flippers[i];
    let currentLoopIndex = i;

    cards[i].addEventListener("click", function() { 
        chooseCards(currentLoopIndex);
        matchCards();        
        if (matchedCards.length == 16) {
            document.getElementById("pop-up-restart").classList.toggle("hidden");
            document.querySelector("#pop-up-restart p").innerHTML = `You made it in ${currentAttempts} attempts!`;
        }
    })
}

// Game ending: displaying attempts and button to restart.
document.getElementById("restart-button").addEventListener("click", function() {
    document.getElementById("pop-up-restart").classList.toggle("hidden");
    
    // Extracts ID number from each card, so they can be sent to flipCard().
    for (i = 0; i < matchedCards.length; i++) {    
        matchedCardIds.push(matchedCards[i].id);
        matchedCardIds[i] = matchedCardIds[i].replace("card-", ""); 
        flipCard(matchedCardIds[i]-1);
    }

    // Clearing matchedCards[] for next round. 
    for (i = 0; i < 16; i++) {
        console.log("Removing from matchedCards:");
        matchedCards.pop();
    }
    
    // Resetting attempts for next round.
    currentAttempts = 0;
    getAttempts(currentAttempts);
})





// ******************* LIST OF FUNCTIONS ******************* 
function getAttempts(attempts) {
    let displayAttempts = document.getElementById("attempts-tag").innerText = `Attempts - ${attempts}`;
    return displayAttempts;   
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

function chooseCards(currentLoopIndex) {
    // getAttempts(currentAttempts);
    if ((chosenCards.length < 2) && (chosenCards.includes(cards[currentLoopIndex]) == false) && (matchedCards.includes(cards[currentLoopIndex]) == false)) {
        flipCard(currentLoopIndex);
        chosenCards.push(cards[currentLoopIndex]);
        } 
        // If user clicks already CHOSEN card.
        else if (chosenCards.includes(cards[currentLoopIndex]) == true) {
            shakeCard(currentLoopIndex);
        } 
        // If user clicks already MATCHED card.
        else if (matchedCards.includes(cards[currentLoopIndex])) {
            shakeCard(currentLoopIndex);
        }
}


function matchCards() {
    if (chosenCards.length == 2) {
        if (attemptAddedOnce == false) {
            attemptAddedOnce = true; 
            currentAttempts++;
            getAttempts(currentAttempts);
        }

        if ((chosenCards[0].getElementsByClassName("back")[0].innerHTML) == (chosenCards[1].getElementsByClassName("back")[0].innerHTML)) {
            console.log("MATCH!");
            console.log(chosenCards[0].getElementsByClassName("back")[0].innerHTML);
            console.log(chosenCards[1].getElementsByClassName("back")[0].innerHTML);
            
            // Saving matched cards, clearing chosenCards for next attempt. 
            matchedCards.push(chosenCards[0]);
            matchedCards.push(chosenCards[1]);
    
            chosenCards.pop();
            chosenCards.pop();
        } else {
            // When two cards don't match they shake and flip BACK.
            chosenCards[0].classList.toggle("shake-effect");
            chosenCards[1].classList.toggle("shake-effect");
            
            setTimeout(function() {
            chosenCards[0].classList.toggle("shake-effect");
            chosenCards[1].classList.toggle("shake-effect");
            attemptAddedOnce = false; 
            }, 2000)
        
            // Extracting card-IDs from the array, for each card to flip back.
            setTimeout(function() {
            let firstChosenCardId = chosenCards[0].id;
            let secondChosenCardId = chosenCards[1].id;

            firstChosenCardId = firstChosenCardId.replace("card-", "");
            secondChosenCardId = secondChosenCardId.replace("card-", "");
            
            flipCard(firstChosenCardId-1);
            chosenCards.shift();
            flipCard(secondChosenCardId-1);
            chosenCards.shift();
            }, 2000); 
        }
    }
}

function flipCard(currentCardIndex) {
    flippers[currentCardIndex].classList.toggle("flipped");
}

function shakeCard(currentCardIndex) {
    setTimeout(function() {cards[currentCardIndex].classList.toggle("shake-effect")}, 1000);
    // Resets the shake-effect.
    cards[currentCardIndex].classList.toggle("shake-effect");
}


