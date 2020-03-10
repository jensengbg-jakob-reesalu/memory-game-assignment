// CODE THAT HAS BEEN REPLACED BY OTHER CODE

// arrayShuffle() including old console.logs
function arrayShuffle(array) {
    let newArrayIndex;
    let temporaryHolder; 
    console.log("Array before shuffle:")
    console.log(array);
    
    for (i = array.length - 1; i > 0; i--) {
        temporaryHolder = array[i];
        console.log("This element is now stored in Temp holder:");
        console.log(temporaryHolder);
        newArrayIndex = Math.floor(Math.random() * (i + 1)); 
        console.log("New array index for the element is calculated:");
        console.log(newArrayIndex);
        array[i] = array[newArrayIndex];
        console.log("The element currently occupying new index overwrites the element. Old index now holds:");
        console.log(array[i]);
        array[newArrayIndex] = temporaryHolder;
        console.log("Temp holder, holding the old element, is put into new index.");
        console.log(`So ${array[newArrayIndex]} has now moved to index ${newArrayIndex}`);
        
    }
    console.log("Array after shuffle:")
    console.log(array);
    
    return array;
};

// Extracting card-IDs from the array, for each card to flip back
    for (i = 0; i < chosenCards.length; i++) {
        let chosenCardId = chosenCards[i].id;
        chosenCardId = chosenCardId.replace("card-", "");        
        flipCard(chosenCardId-1);       
    }


// POPUP window
    // HTML
<!-- Popup notifying user of forbidden actions etc -->
        <section id="pop-up-alerts" class="hidden"></section>

    // CSS
#pop-up-alerts {
    position: absolute;
    text-align: center;
    padding: 0 2rem;
    background-color: white;
    border: 4px solid gray;
    border-radius: 10px;
    font-size: 2rem;
    font-family: 'Caveat', cursive;
    color: burlywood;
}

    // JAVASCRIPT
function popUpChosenAlready() {
    document.getElementById("pop-up-alerts").classList.toggle("hidden");
    document.getElementById("pop-up-alerts").innerHTML = "Card chosen already!";
    setTimeout(function() {document.getElementById("pop-up-alerts").classList.toggle("hidden")}, 1500);
}

function popUpMatchedAlready() {
    document.getElementById("pop-up-alerts").classList.toggle("hidden");
    document.getElementById("pop-up-alerts").innerHTML = "Card matched already!";
    setTimeout(function() {document.getElementById("pop-up-alerts").classList.toggle("hidden")}, 1500);
}
