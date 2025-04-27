document.getElementById("bt").onclick = function() {
            var randomNumber= Math.random();
            randomNumber = randomNumber * 6;
            randomNumber = Math.floor(randomNumber);

    if(document.getElementById("finger").value == randomNumber) {
        alert("You guessed it right!");
    }
    else {
        alert("The number was " + randomNumber);
    }
};