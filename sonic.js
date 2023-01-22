class sonic {
  constructor(game) {
    this.game = game;
    this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/sonic.png"), 0, 57, 45, 38, 6, 0.08)
    this.x = 0;
    this.y = 480;
    this.speed = 400; // movement of sprite animation towards the right speed (400 pixels per second)
  };

  update() { // Lets move our running sonic towards the right
    this.x+= this.speed * this.game.clockTick;  
    if (this.x > 1024){ // if movement gets past the width of the canvas
       this.x = 0; // make it back to 0
    }

  };

  
  draw(ctx) {
     this.animator.drawFrame(this.game.clockTick, ctx,this.x,this.y);
  };

};
