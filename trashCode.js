// CODE THAT HAS BEEN REPLACED BY OTHER CODE

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
