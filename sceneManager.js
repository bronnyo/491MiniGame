class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;

        this.x = 0;
        this.y = 0;
        this.score = 0;

        this.yogi = new YogiBear(this.game, 2 * PARAMS.TILEWIDTH, 2 * PARAMS.TILEHEIGHT);
        this.game.addEntity(this.yogi);
        this.game.addEntity(new Basket(this.game));
        // this.game.addEntity(new Score(this.game));





        this.game.addEntity(new Background(this.game)); //LAST TO FIRST (background must stay at the bottom)

    };

    addScore(p) {
        this.score += p;
        this.draw(this.game.ctx);
    };

    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;
        let xmid = PARAMS.CANVAS_WIDTH / 2 - PARAMS.TILEWIDTH / 2;
        let ymid = PARAMS.CANVAS_HEIGHT / 2 - PARAMS.TILEHEIGHT / 2;

        this.x = this.yogi.x - xmid;
        this.y = this.yogi.y - ymid;
    };

    draw(ctx) {
        ctx.font = '50px ""';
        ctx.fillStyle = "White";
        ctx.fillText("SCORE:" + this.score + "", 10, 50);
    };
}