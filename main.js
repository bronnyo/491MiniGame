const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./assets/pixelforest.png");
ASSET_MANAGER.queueDownload("./assets/Yogi.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	PARAMS.TILEWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;
	PARAMS.TILEHEIGHT = PARAMS.BITWIDTH * PARAMS.SCALE;

	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;


	gameEngine.init(ctx);

	new SceneManager(gameEngine);
	// gameEngine.addEntity(new Background(gameEngine));

	gameEngine.start();
});
