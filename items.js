class Basket {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.width = 60;
        this.height = 60;
        this.spritesheet = ASSET_MANAGER.getAsset("./assets/basket.png");
        this.basket = new Animator(this.spritesheet, 1, 1, this.width, this.height, 1, 1);

        this.x = 200,
        this.y = 200;

        this.BB = new BoundingBox(this.x + 10, this.y + 7, PARAMS.TILEWIDTH * 3, PARAMS.TILEHEIGHT * 3);
    };

    update() {

    };

    draw(ctx) {
        this.basket.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 1);
        
        if(PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
        }
    };
}

class Score {
    constructor(game, x, y, score) {
        Object.assign(this, {game, x, y, score});

        this.game.camera.score += this.score;
    };

    update() {
    
    };

    draw(ctx) {
        ctx.font = PARAMS.TILEWIDTH;
        ctx.fillStyle = "Black";
        ctx.fillText(this.score, this.x - this.game.camera.x, this.y - this.game.camera.y);
    };
}