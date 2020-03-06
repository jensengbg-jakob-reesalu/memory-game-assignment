let cards = document.getElementsByClassName("flip-container");
let flippers = document.getElementsByClassName("flipper");
let chosenCards = [];
let matchedCards = [];


// Adding click event to all flip-containers (i.e. all cards)
for (i = 0; i < cards.length; i++) {
    currentFlipper = flippers[i];
    let currentIndex = i;

    cards[i].addEventListener("click", function(event) {
        // Choosing cards
        if (chosenCards.length < 2 && chosenCards.includes(cards[currentIndex]) == false) {
        flippers[currentIndex].classList.toggle("flipped");
        chosenCards.push(cards[currentIndex]);
        console.log(chosenCards);
        } else if (chosenCards.includes(cards[currentIndex]) == true) {
            document.getElementById("pop-up-chosen-already").classList.toggle("hidden");
            setTimeout(function() {document.getElementById("pop-up-chosen-already").classList.toggle("hidden")}, 1500);
        } else if (chosenCards.length == 2) {
            if ((chosenCards[0].getElementsByClassName("back")[0].innerHTML) == (chosenCards[1].getElementsByClassName("back")[0].innerHTML)) {
                console.log("MATCH!");
                console.log(chosenCards[0].getElementsByClassName("back")[0].innerHTML);
                console.log(chosenCards[1].getElementsByClassName("back")[0].innerHTML);
                

                matchedCards.push(chosenCards[0]);
                matchedCards.push(chosenCards[1]);
            } else {
                console.log("not the same");
            }
            
            

             {
            }
        }
            
    })
        

        // flippers[currentIndex].classList.toggle("flipped");
        // secondCard = cards[currentIndex];
    
        // console.log(firstCard);
        // console.log(secondCard);
        
      
}



