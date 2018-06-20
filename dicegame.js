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

    displayOutput("LET'S GO GET THIS GUY you'll get 5 tries to roll against your rival and don't forget your NOS shot! best of luck! " + user); 
    
    playerTurn();
}

//6 different dices
//4-sided, 6-sided, 8, 10, 12, and 20


    function rollADice(diceSideValue) {
        let randomNumber = Math.floor(Math.random() * diceSideValue + 1);
        displayOutput ("You rolled a: " + randomNumber);
        return randomNumber;
    }


    function NOSRoll(){
        
        let randomNumber = ( rollADice(4)+rollADice(6)+rollADice(8)+rollADice(10)+rollADice(12)+rollADice(12));
        displayOutput ("WOOOOH!!! CAN YOU FEEL THE BOOST!!!");
        return randomNumber;
}


//rolls dice
 
 
function rollOnedice (diceType){
    
    let randomNumber;
    
    if (diceType ==4) {
        randomNumber = rollADice(4);
    } 
    
    else if (diceType ==6) {
        randomNumber = rollADice(6);
    }
    
    else if (diceType ==8) {
        randomNumber = rollADice(8);
    }
    
    else if (diceType ==10){
        randomNumber = rollADice(10);
    }
    
    else if (diceType ==12){
        randomNumber = rollADice(12);
    }
    
    else if (diceType ==20){
        randomNumber = rollADice(20);
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