////Master function to roll all dice

 function runGame () {
       
    let carArray = [ "NA", "Civic", "Corolla", "Miata","Mustang","Charger","Lancer","STI","240sx","RX7","Sentra","Skyline","Beetle","Passat","Jetta","M3","A4","Bugati","Romero","Fiat","Diablo"];
    
    displayOutput ("Welcome to DICE RACER!!") 
    user = getUserInput ("What is your Racer name:");
    displayOutput ("Welcome " + user + " your dice rolls will determine the distance your vehicle has traveled. To beat your rival your gonna need to have a Guts & 50 Pts. Their are 6 different types of dices to choose from  4-SIDED | 6-SIDED | 8-SIDED | 10-SIDED | 12-SIDED | 20 SIDED each one representing a different gear and ultimately some NOS (rolls all 6 dice types) use it wisely)");
     
    let carChoiceValue = getUserInput("What Dice would you like to roll first? this will determine your cartype. Please choose from 4 | 6 | 8 | 10 | 12 or 20 ");
     
    let raceCar = carArray [rollOnedice(carChoiceValue)];
      
    displayOutput("Your racecar is a " + raceCar + " !");
     
    displayOutput("Here we go! Hold on tight and always remember to buckle up and use your seatbelt!");
     
    displayOutput("Pulling out from a 7-11 with your " + raceCar + " a mysterious vehicle cuts you off. You mind your own business pulling to his right ready to make a turn when all of a sudden...");
     
    displayOutput("You hear his engine roar the red lights begin to turn. the tires on your " + raceCar + " begin to screech!!! THIS IS IT!!!");

    displayOutput("LET'S GO GET THIS GUY you'll get 5 tries to roll against your rival and don't forget your ONE NOS shot! best of luck! " + user); 
    
    playerTurn();
          
}

//6 different dices
//4-sided, 6-sided, 8, 10, 12, and 20

function dice4Side() {
   
    let randomNumber = Math.floor(Math.random() * 4 + 1);
        displayOutput ("You rolled a: " + randomNumber);
        return randomNumber;
    }

    function dice6Side() {
       
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        displayOutput ("You rolled a: " + randomNumber);
        return randomNumber;
    }

    function dice8Side() {
       
        let randomNumber = Math.floor(Math.random() * 8 + 1);
        displayOutput ("You rolled a: " + randomNumber);
        return randomNumber;
    }

    function dice10Side() {
        
        let randomNumber = Math.floor(Math.random() * 10 + 1);
        displayOutput ("You rolled a: " + randomNumber);
        return randomNumber;
    }

    function dice12Side() {
        
        let randomNumber = Math.floor(Math.random() * 12 + 1);
        displayOutput ("You rolled a: " + randomNumber);
        return randomNumber;
    }

    function dice20Side() {
        
        let randomNumber = Math.floor(Math.random() * 20 + 1);
        displayOutput ("You rolled a: " + randomNumber);
        return randomNumber;
    }

    function NOSRoll(){
        
        let randomNumber = ( dice4Side()+dice6Side()+dice8Side()+dice10Side()+dice12Side()+dice20Side());
        displayOutput ("WOOOOH!!! CAN YOU FEEL THE BOOST!!!");
        return randomNumber;
}


//rolls dice
 
 
function rollOnedice (diceType){
    
    let randomNumber;
    
    if (diceType ==4) {
        randomNumber = dice4Side();
    } 
    
    else if (diceType ==6) {
        randomNumber = dice6Side();
    }
    
    else if (diceType ==8) {
        randomNumber = dice8Side();
    }
    
    else if (diceType ==10){
        randomNumber = dice10Side();
    }
    
    else if (diceType ==12){
        randomNumber = dice10Side();
    }
    
    else if (diceType ==20){
        randomNumber = dice20Side();
    }
    
    else if ( diceType =="NOS" || diceType=="nos"){
        randomNumber = NOSRoll();
    }
    
    else {
        alert ("please enter a valid entry. please try again");
        rollDice = getUserInput("please select 4 | 6 | 8 | 10 | 12 or 20");
        randomNumber = rollOnedice (rollDice);
    }
    
    return randomNumber;
    
}


//Player Turn

function playerTurn (){
    
    let playerOneScore = 0;
    
    for (i = 0; i < 5; i++){

        let rollDice = rollOnedice(getUserInput("What dice did you want to roll? 4 | 6 | 8 | 10 | 12 | 20 or NOS"));

        playerOneScore = playerOneScore + rollDice;

        displayOutput("Your current score is " + playerOneScore );

        playerOneAlerts(playerOneScore);
        
        if (playerOneScore > 49){
            
            alert(":) CONGRATULATIONS! YOU WON and remember street racing is illegal!!") 
            i = 5;
        }
    }

    if (playerOneScore < 49){

        alert("Thanks for driving the speed limit but YOU LOSE! Better Luck Next Time." );
    }
}    

// Turn Results


function playerOneAlerts (playerOneScore) {
    
    if ( playerOneScore <= 10 ) {
    displayOutput("Damn he's too fast time to choose a higher gear");
    } 
    
    else if (playerOneScore > 20 && playerOneScore <= 29){
    displayOutput("Oh No! it's not enough we're starting still see his tail lights!!");
    }    
    
    else if (playerOneScore > 30 && playerOneScore <= 39){
    displayOutput("Wooh!!! toe to toe with him!! This is looking Good");
    }
    
    else if (playerOneScore >40 && playerOneScore <=49){
    displayOutput("The home stretch! we can see him in our rear veiw mirror! Hopefully this is enough");
    }
}


function getUserInput(message) {
    
    let input = prompt(message);
    return input;
}  

function displayOutput(message) {
    
    alert(message);
}


runGame();