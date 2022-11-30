/* global Phaser */

//created by sophie
//created on nov 2022
//this is the Phaser3 game configuration file

/**
 *This class is the Game scene
 */
class GameScene extends Phaser.Scene {
  /**
   *this method is the constructor
   */
  constructor() {
    super({ key: "gameScene" });

    this.background = null;
    this.ship = null;
  }

  /**
   *Can be defined on your own Scenes
   *This method is called by the Scene Manager when the scene starts,
   *before preload() and create()
   *@param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }

  /**
   *Can be defined on your own Scenes
   *Use it to load assets
   */
  preload() {
    console.log("Game Scene");

    //images
    this.load.image("starBackground", "assets/starBackground.png");
    this.load.image("ship", "assets/spaceShip.png");
  }

  /**
   *Can be defined on your own Scenes
   *Use it to create your game objects
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0);
    this.background.setOrigin(0, 0);

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship");
  }

  /**
   *Should be overridden by your own scenes
   *this method is called once per game step while the scene is running
   * @param {number} time - the current time
   * @param {number} delta - The delta time in ms since the last frame
   */
  update(time, delta) {}
}

export default GameScene;
