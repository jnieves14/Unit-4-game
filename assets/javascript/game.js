$(document).ready(function() {

    var random = [];
    for (var r = 18; r < 120; r++) {
        random.push(r);
    }

    var crystals = [];
    for (var c = 1; c < 13; c++) {
        crystals.push(c)
    }
    console.log("crystals", crystals);


    var randomNumber;
    var crystalAssign = [];

    var c1;
    var c2;
    var c3;
    var c4;

var userScore = 0;
    var wins = 0;
    var losses = 0;


function pickRandomNumber(arr) {
    var x = arr[Math.floor(Math.random() * arr.length)];
    randomNumber = x;
    $("#randomDisp").html(randomNumber);
    console.log("random number: " + randomNumber);
}

function pickRandomCrystals(arr) {
    for (var y = 0; y < 4; y++) {
        var a = arr[Math.floor(Math.random() * arr.length)];
        crystalAssign.push(a);
    }
    console.log("Crystal assignment: " + crystalAssign);
}

function crystalValues(arr) {
    for (var i = 0; i < arr.length; i++) {
        $("#button-" + (i+1)).attr("value", arr[i]);
    }
    c1 = arr[0];
    c2 = arr[1];
    c3 = arr[2];
    c4 = arr[3];
}

function gameReset(x) {
    crystalAssign = [];
    pickRandomNumber(random);
    pickRandomCrystals(crystals);
    crystalValues(crystalAssign);
    userScore = 0;
        $("#totalScore").html(userScore);
    alert(x);
}

pickRandomNumber(random);
pickRandomCrystals(crystals);
crystalValues(crystalAssign);

$("#button-1").on("click", function(){
    userScore += c1;
    $("#totalScore").html(userScore);
});

$("#button-2").on("click", function(){
    userScore += c2;
    $("#totalScore").html(userScore);
});

$("#button-3").on("click", function(){
    userScore += c3;
    $("#totalScore").html(userScore);
});

$("#button-4").on("click", function(){
    userScore += c4;
    $("#totalScore").html(userScore);
});

$("button").on("click", function() {
    if (userScore === randomNumber) {
        wins++;
        console.log(userScore);
        $("#totalScore").html(userScore);
        $("#wins").html("Wins: " + wins);

        setTimeout(function () {gameReset("Congrats! You won!")}, 300);
    }

    else if (userScore > randomNumber) {
        losses++;
        console.log("User Score: " + userScore);
        $("#totalScore").html(userScore);
        $("#losses").html("Losses: " + losses);

        setTimeout(function() {gameReset("That's too bad...You lost!")}, 300);
    }
});
});