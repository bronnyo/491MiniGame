class Background {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./assets/pixelforest.png");
        this.background = new Animator(this.spritesheet, 1, 1, 2048, 1534, 1, 1);

        this.x = 0;
        this.y = 0;
    };
    
    update() {
        
    };
    
    draw(ctx) {
       this.background.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 1);
    };
}