class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;

        this.x = 0;
        this.y = 0;

        this.yogi = new YogiBear(this.game, 2 * PARAMS.TILEWIDTH, 2 * PARAMS.TILEHEIGHT);
        this.game.addEntity(this.yogi);
        this.game.addEntity(new Background(this.game));


    };

    update() {
        let xmid = PARAMS.CANVAS_WIDTH / 2 - PARAMS.TILEWIDTH / 2;
        let ymid = PARAMS.CANVAS_HEIGHT / 2 - PARAMS.TILEHEIGHT / 2;

        this.x = this.yogi.x - xmid;
        this.y = this.yogi.y - ymid;
    };

    draw(ctx) {

    };
}