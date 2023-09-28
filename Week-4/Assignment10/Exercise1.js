const game = {
    // Add properties: lives - initially 3, and coins - initially 0
    lives: 3,
    coins: 0,
    
    // Add a getter called points that returns coins * 10
    get points() {
      return this.coins * 10;
    },
    
    // Add a playerDies() method that subtracts 1 from lives if lives is greater than 0
    playerDies() {
      if (this.lives > 0) {
        this.lives--;
      }
    },
    
    // Add a newGame() method that sets lives to 3 and coins to 0
    newGame() {
      this.lives = 3;
      this.coins = 0;
    }
  };
  
  //DO NOT EDIT VALUES BELOW THIS COMMENT
  
  console.log("lives = " + game.lives); // should be 3
  
  console.log("coins = " + game.coins); // should be 0
  
  console.log("points = " + game.points); // should be 0
  
  game.coins = 2;
  
  console.log("points = " + game.points); // should be 20
  
  game.playerDies();
  
  console.log("lives = " + game.lives); // should be 2
  
  game.playerDies();
  game.playerDies();
  game.playerDies();
  
  console.log("lives = " + game.lives); // should be 0
  
  game.newGame();
  
  console.log("lives = " + game.lives); // should be 3
  
  console.log("coins = " + game.coins); // should be 0
  