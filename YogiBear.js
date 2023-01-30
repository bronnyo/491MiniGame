class YogiBear {
    constructor(game, x , y) {
        Object.assign(this, {game, x, y});
        this.animator = new Animator(ASSET_MANAGER.getAsset("./assets/Yogi.png"), .02, 0, 37, 75, 11, 0.2, false);

        this.facing = 0; // 0 = right, 1 = left
        this.state = 0;
    
        this.x = 0;
        this.y = 0;
        this.speed = 0;

        this.updateBB();

        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations() {
        for(let i = 0; i < 2; i++) { // 2 states (idle, walk)
            this.animations.push([]);
            for(let j = 0; j < 2; j++) { // 2 directions
                this.animations[i].push([]);
            }
        }

        // 0 = right, 1 = left
        this.animations[0][0] = new Animator(ASSET_MANAGER.getAsset("./assets/Yogi.png"), 298, 6, 37, 75, 1, 0.2, false);

        this.animations[0][1] = new Animator(ASSET_MANAGER.getAsset("./assets/Yogi.png"), 0, 0, 37, 75, 11, 0.2, false);
        this.animations[1][1] = new Animator(ASSET_MANAGER.getAsset("./assets/Yogi.png"), 1, 82, 37, 75, 11, 0.2, true);

        // this.animator[0][1] = new animator(ASSET_MANAGER.getAsset("./Yogi.png"))
        // this.animator[1][2] = new animator(ASSET_MANAGER.getAsset("./Yogi.png"))
        // this.animator[2][3] = new animator(ASSET_MANAGER.getAsset("./Yogi.png"))
        // this.animator[3][4] = new animator(ASSET_MANAGER.getAsset("./Yogi.png"))
    };

    updateBB() {
        this.BB = new BoundingBox(this.x + 20, this.y, PARAMS.TILEWIDTH * 2, PARAMS.TILEHEIGHT * 8);
    }

    update() {
        
        const MOVE = 400;

        const TICK = this.game.clockTick;

        // horizontal movement
        if(this.game.left && !this.game.right) {
            this.facing = 1;
            this.state = 1;
            this.x -= MOVE * TICK;
        } else if(this.game.right && !this.game.left) {
            this.facing = 0;
            this.state = 1;
            this.x += MOVE * TICK;
        } else if(this.game.up && !this.game.down) {
            this.state = 1;
            this.y -= MOVE * TICK;
        } else if(this.game.down && !this.game.up) {
            this.state = 1;
            this.y += MOVE * TICK;
        }
        this.updateBB();
        
        //collision
        var that = this;
        this.game.entities.forEach(entity => {
            if(entity.BB && that.BB.collide(entity.BB)) {
                if(entity instanceof Basket) {
                    console.log("collided with basket");
                    that.game.camera.addScore(1);
                    entity.removeFromWorld = true;
                }
            }
        })
    };

    draw(ctx) {
        this.animations[this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, PARAMS.SCALE);
        
        if(PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
        }
    };
}