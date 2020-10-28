// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function (enemyName) {
    while(enemyHealth > 0 && playerHealth > 0) { 

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

if (promptFight === "skip" || promptFight === "SKIP") {
    //confirming player wants to quit
    var confirmSkip = window.confirm("Are you sure you want to quit?");
    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from player
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }
}

 //Subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in enemyHealth var
 enemyHealth = enemyHealth - playerAttack;
 //Log a resulting message to the console so we know that it worked
 console.log(
     playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
 );

   //check enemy health
   if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");

    //award money for winning
    playerMoney = playerMoney + 20;
    break;
} else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
//Subtract the value of enemyAttack from value of playerHealth and use that result to update the value in playerHealth var
playerHealth = playerHealth - enemyAttack;

//Log a resulting message to the console so that we know it worked.
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

//check player health
if (playerHealth <=0) {
    window.alert(playerName + " has died!");
    break;
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
}
};



  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
    
        // reset enemyHealth before starting new fight
        enemyHealth = 50;
    
        // use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;
    
        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
}
