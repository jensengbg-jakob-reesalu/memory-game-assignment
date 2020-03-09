let cards = document.getElementsByClassName("flip-container");
let flippers = document.getElementsByClassName("flipper");
let chosenCards = [];
let matchedCards = [];


// Adding click events to cards (their flip-containers).
for (i = 0; i < cards.length; i++) {
    currentFlipper = flippers[i];
    let currentLoopIndex = i;

    cards[i].addEventListener("click", function() {
        choosingCards(currentLoopIndex);
        matchingCards();        
    })
}

// LIST OF FUNCTIONS
function choosingCards(currentLoopIndex) {
    if ((chosenCards.length < 2) && (chosenCards.includes(cards[currentLoopIndex]) == false) && (matchedCards.includes(cards[currentLoopIndex]) == false)) {
        flippers[currentLoopIndex].classList.toggle("flipped");
        chosenCards.push(cards[currentLoopIndex]);
        console.log(chosenCards);
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

function matchingCards() {
    if (chosenCards.length == 2) {
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
            // When two cards don't match they SHAKE and FLIP BACK.
            chosenCards[0].classList.toggle("shake-effect")
            chosenCards[1].classList.toggle("shake-effect")

            setTimeout(function() {
                flipCard(chosenCards[0].flipper);
                flipCard(chosenCards[1].flipper);
            }, 2000);
            // chosenCards.pop();
            // chosenCards.pop();
            
            // Clearing chosenCards.
            
        }
    }
}

function flipCard(currentCard) {
    console.log("Currentcard is now:");
    console.log(currentCard);
    console.log("Flippers is now:");
    console.log(flippers);
    
    flippers.classList.toggle("flipped");
}

function shakeCard(currentCard) {
    setTimeout(function() {cards[currentCard].classList.toggle("shake-effect")}, 1000);
    // Resets the shake-effect.
    cards[currentCard].classList.toggle("shake-effect");
}


