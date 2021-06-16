class Game {

  /**
   * Sets up the game
   * @param {string} player1Name The name of player 1
   * @param {string} player2Name The name of player 2
   */
  constructor(player1Name="pl1", player2Name="pl2"){
    this.theEnd = false; 

    this.player1 = {
      name: player1Name,
      health: 100
    }

    this.player2 = {
      name: player2Name,
      health: 100
    }
    
  }

  /**
   * Starts the game and logs out the status of players
   */
  start(){
    this.reset()
    while(!this.theEnd){
      this.pl1AttackPl2()
      this.pl2Heal()
      this.pl2AttackPl1();
      this.pl1Heal()
      this.playerStatus()
      this.checkTheEnd()
    }
    this.declareWinner()
  }

  /**
   * Console log the winner of the battle
   */

  /*
  # Have a statement to check if the player 1s heath is greater then 0.
  # After this display a message that player 1 is winner and their name
  # esle have a statement to check if the player 2s heath is greather then 0.
  # After this display a message that player 2 is winner and their name
  */
  declareWinner(){
    if(this.player1.health > 0) {
      console.log(`Player 1: ${this.player1.name} is the winner!!`)
    } else if(this.player2.health > 0) {
      console.log(`Player 2: ${this.player2.name} is the winner!!`)
    }

  }

  /**
   * If player 1 or player 2 health is below 0
   * Mark theEnd true, to stop the game
   */

   /*
   # Check if the player 1 health is below 0 or if player 2s health is below 0
   # if either returns true change the value of the end to true.  
   */
  checkTheEnd(){
    if(this.player1.health < 0 || this.player2.health < 0) {
      this.theEnd = true;
    }
  }

  /**
   * Console log the name and health of both players
   * Ex: Player 1: 100 | Player 2: 50
   */

  /*
  # displays a message with the players health 
  */
  playerStatus(){ 
    console.log("\n\nCurrent Health")
    console.log(`Player 1: ${this.player1.health}`)
    console.log(`Player 2: ${this.player2.health}`)

  }

  /**
   * Reset health of player 1 and player 2 to 100
   * Reset theEnd to false
   */

  
  reset(){ 
    this.player1.health = 100;
    this.player2.health = 100;
    this.theEnd = false;
  }

  /**
   * Generate a random number between 1 and 10 using Math.random()
   * Use that number to decrease health from player 2
   */

  /*
  # first you have to get a random number between 1 and 10 
  # After this is is taken away from player 2s health
  */
  pl1AttackPl2(){ 

    let damage = Math.floor(Math.random() * 10) + 1;
    this.player2.health-= damage;

  }

  /**
   * Generate a random number between 1 and 10 using Math.random()
   * Use that number to decrease health from player 1
   */

    /*
  # first you have to get a random number between 1 and 10 
  # After this is is taken away from player 1s health
  */
  pl2AttackPl1(){ 
    let damage = Math.floor(Math.random() * 10) + 1;
    this.player1.health-= damage;
  }

  /**
   * Generate a random number between 1 and 5 using Math.random()
   * Use that number to increase health of player 1
   */
  /*
  # before healing the player you must check health if it is 100;
  # Only if the health is less then 100 will the player be healed.  
  # first you generate a number between 1 and 5
  # Then you increate the health of player 1 by 5
  */

  pl1Heal(){
    if(this.player1.health < 100) {
      let heal = Math.floor(Math.random() * 5) + 1;
      this.player1.health+= heal;
      if(this.player1.health > 100) {
        this.player1.health = 100;
      }
    } 
  }

  /**
   * Generate a random number between 1 and 5 using Math.random()
   * Use that number to increase health of player 2
   */
  /*
  # before healing the player you must check health if it is 100;
  # Only if the health is less then 100 will the player be healed.  
  # first you generate a number between 1 and 5
  # Then you increate the health of player 1 by 5
  */

  pl2Heal(){ 
    if(this.player2.health < 100) {
      let heal = Math.floor(Math.random() * 5) + 1;
      this.player2.health+= heal;
      if(this.player2.health > 100) {
        this.player2.health = 100;
      }
    } 
  }

}

// Initialize the class here
// Call the start function of the game
let game = new Game("John", "Jake");
game.start();