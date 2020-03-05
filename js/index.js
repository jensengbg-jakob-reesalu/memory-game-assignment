document.getElementById("card-1").addEventListener("click", function() {
    changeText();
    console.log("hej hej");
})



function changeText() {
    document.getElementById("front1").classList.toggle("flipped");
}