class Background {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./assets/pixelforest.png");
        this.background = new Animator(this.spritesheet, 1, 1, 2048, 1534, 1, 1);

        this.x = -550;
        this.y = -400;

        this.BB = new BoundingBox(this.x, this.y, 1534, 1534)
    };
    
    update() {
        
    };
    
    draw(ctx) {
       this.background.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 1);

       if(PARAMS.DEBUG) {
        ctx.strokeStyle = 'Red';
        ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
        }
    };
}