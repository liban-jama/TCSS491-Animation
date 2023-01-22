class Background {

constructor(game) {
  this.game = game;
};

update() {

};

draw(ctx) {
  ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/bricks.png"), 0, 600);

};

};