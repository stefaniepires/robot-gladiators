//Game States
//"WIN" - player robot has defeated all enemy robots
//  *Fight all enemy robots
//  *Defeat each enemy robot
// "LOSE" - player robots health is zero or less
var fightOrSkip = function() {
    //Asking if player wants to fight or skip
    var promptFight = window.prompt("Would you like to fight or skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (!promptFight || promptFight === " ") {
        alert("You need to provide an answer! Please try again");
        return fightOrSkip();
    }
    promptFight = promptFight.toLowerCase();
    if (promptFight === "skip" || promptFight === "SKIP") {
    //confirming player wants to quit
        var confirmSkip = window.confirm("Are you sure you want to quit?");
    //if yes (true), leave fight
        if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        //subtract money from player
        playerInfo.money = Math.max(0, playerInfo.money - 15);
        return true;
        }
    }
    return false;
}
var fight = function(enemy) {
    console.log(enemy)
    //repeat and execute as long as enemy robot is alive
    while(enemy.health > 0 && playerInfo.health > 0) {
        if (fightOrSkip()) {
            break;
        }
        //Subtract the value of playerInfo.attack from the value of enemy.health and use that result to update the value in enemy.healthvar
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        //Log a resulting message to the console so we know that it worked
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );
    
        //check enemy health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            //award money for winning
            playerInfo.money = playerInfo.money + 20;
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        //Subtract the value of enemy.attack from value of playerInfo.health and use that result to update the value in playerInfo.health var
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        //Log a resulting message to the console so that we know it worked.
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        //check player health
        if (playerInfo.health <=0) {
            window.alert(playerInfo.name + " has died!");
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
};
var startGame = function() {
    //reset player stats
    playerInfo.reset();
    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            if (playerInfo.health > 0 && i < enemyInfo.length -1) {
                var storeConfirm = confirm("The fight is over, visit the store before next round?");
                if(storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game OVER!");
            break;
        }
    }
var endGame = function() {
    //if player alive, player wins!
    if (playerInfo.health > 0) {
        alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        alert("You've lost your robot in battle :(");
    }
    var playAgainConfirm = confirm("Would you like to play again?");
        if (playAgainConfirm) {
            startGame();
        } else {
            alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
};
    endGame();
};
var shop = function() {
    var shopOptionPrompt = prompt(
        "Would you like to Refill your health by 30 for 10 dollars, Upgrade your attack by 10 for 10 dollars, or Leave the store? Please enter: 1 for Refill, 2 for Upgrade, or 3 to leave."
    );
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
            alert("Leaving the store.");
            break;
        default:
            alert("You didn't pick a valid option. Try again.");
            shop();
            break;
    }
};
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};
var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null || name === " ") {
        name = prompt("What is your robot's name?");
    }
    console.log("Your Robot's name is " + name);
    return name;
};
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 10) {
            alert("Refilling " + playerInfo.name + "'s health by 30 for 10 dollars.");
            this.health += 30;
            this.money -= 10;
        } else {
            alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 15) {
            alert("Upgrading " + playerInfo.name + "'s attack by 10 for 15 dollars.");
            this.attack += 10;
            this.money -= 15;
        } else {
            alert("You dont have enough money!");
        }
    }
};
var enemyInfo = [
    {
        name: "RobOrto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Andriod",
        attack: randomNumber(10, 14)
    },
    {
        name: "ROBO TRUMBLE",
        attack: randomNumber(10, 14)
    }
];
//start game when page loads
startGame();