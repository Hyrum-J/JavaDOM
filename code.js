function blastoff() {
    console.log("blastoff() started");
//currTime is what number is displayed
    var currTime = 50;
    //Does this loop 11 times in order to go from 50 to 0 by 5s
    for (var i = 0; i < 11; i++){
        setTimeout(function(){
            console.log(currTime);
            // If above 25, displays this text
            if(currTime >= 25){
                document.getElementById("Blastoff Text").innerHTML = "Time Left Until Blastoff: " + currTime;
                // Other wise display this text
            }else{
                document.getElementById("Blastoff Text").innerHTML = "Warning Less than ½ way to launch, time left: " + currTime;
            };
            // If 0, it equals blastoff!
            if(currTime <= 0){
                document.getElementById("Blastoff Text").innerHTML = "Blastoff!";
            }
            //updates currTime
            currTime = currTime - 5;
        }, i * 5000);
    };
};



function start(){
    console.log("start() method started");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data"
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startbutton").disabled = true;
    document.getElementById("stopbutton").disabled = false;
};

function stop(){
    console.log("stop() method started");
    clearInterval(timer);
    document.getElementById("stopbutton").disabled = true;
    document.getElementById("startbutton").disabled = false;
};

// This is the win counter. As you win, it will go up by one.
var wins = 0;
// This is the loss counter. As you lose, it will go up by one everytime. 
var loses = 0;
// This is the push counter. If you get a push, it will go up by one. 
var pushes = 0;
// This is the reset button. It clears all dice, sums, and counters.
function reset() {
    // This resets the win counter back to 0
    wins = 0;
    // This prints 0 next to wins
    document.getElementById("Win count").innerHTML = "Wins: " + wins;
    // This resets the loss counter back to 0
    loses = 0;
    // This prints 0 next to losses
    document.getElementById("loss count").innerHTML = "Losses: " + loses;
    // This resets the push counter back to 0 
    pushes = 0;
    // This prints 0 
    document.getElementById("push count").innerHTML = "Pushes: " + pushes;
    // This resets die 1 to nothing
    document.getElementById("die one").innerHTML = "Die 1";
    // This resets die 2 to nothing
    document.getElementById("die two").innerHTML = "Die 2";
    // This resets sums to nothing
    document.getElementById("Sums").innerHTML = "Sum";
    // This resets the win condition to nothing
    document.getElementById("Win").innerHTML = "";
};

// This is the start of the play function that will play craps.
function play() {
//This gives a random number between 0 and 6 rounded up. This makes a six sided die
    var die1 = Math.ceil(Math.random() * 6);
//This does the same so you have two six sided die
    var die2 = Math.ceil(Math.random() * 6);
//This adds the dice together for a sum
    var sum = die1 + die2;
//This displays what you rolled on the first die. 
    document.getElementById("die one").innerHTML = "Die 1 = " + die1;
//This displays what you rolled on the second die. 
    document.getElementById("die two").innerHTML = "Die 2 = " + die2;
//This displays what the sum of the two were. 
    document.getElementById("Sums").innerHTML = "Sum = " + sum;
//This starts the begining of the win conditions. 
    if (sum == 7 || sum == 11){
        //This is the loss updater. It updates the counter by one. 
        loses = loses + 1;
        // This tells the user that they lost because they got an 11 or a 7. 
        document.getElementById("Win").innerHTML = "CRAPS - you lose";
        //This updates the results for the player, and displays the total. 
        document.getElementById("loss count").innerHTML = "Losses: " + loses;
    //This is win condition. If you roll doubles that are the same, you win. 
    }else if (die1 == die2 && die1 % 2 == 0){
        // This is the win updater. It updates the counter by one. 
        wins = wins + 1;
        // This tells the player that they have won!
        document.getElementById("Win").innerHTML = "DOUBLES - you win";
        // This updates the screen on how many times they have won. 
        document.getElementById("Win count").innerHTML = "Wins: " + wins;
    // This is the push condition. This happens when they don't win or lose. 
    }else{
        // This is the push updater. It updates the counter by one. 
        pushes = pushes + 1;
        //This tells the player that they got a push and should try again. 
        document.getElementById("Win").innerHTML = "Push - try again";
        // This updates the screen on push counters on how many times they got push. 
        document.getElementById("push count").innerHTML = "Pushes: " + pushes;
    };
};

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.play = function(){
        this.sound.play();
    };
    this.stop = function(){
        this.sound.pause();
    };
};

function playMusic(){
    console.log("Commence Jamming");
    mySound = new sound("Bonnie Tyler - Holding Out For A Hero (Official HD Video).mp3");
    mySound.play();
}