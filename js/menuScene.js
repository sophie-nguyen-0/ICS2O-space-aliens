/* global Phaser */

//created by sophie
//created on nov 2022
//this is the Phaser3 game configuration file

/**
 *This class is the Menu scene
 */
class MenuScene extends Phaser.Scene {
  /**
   *this method is the constructor
   */
  constructor() {
    super({ key: "menuScene" });

    this.menuSceneBackgroundImage = null;
    this.startButton = null;
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
    console.log("Menu Scene");
    this.load.image("menuSceneBackground", "assets/aliens_screen_image2.jpg");
    this.load.image("startButton", "assets/start.png");
  }

  /**
   *Can be defined on your own Scenes
   *Use it to create your game objects
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    this.menuSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "menuSceneBackground"
    );
    this.menuSceneBackgroundImage.x = 1920 / 2;
    this.menuSceneBackgroundImage.y = 1080 / 2;

    this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, "startButton");
    this.startButton.setInteractive({ useHandCursor: true });
    this.startButton.on("pointerdown", () => this.clickButton());
  }

  /**
   *Should be overridden by your own scenes
   *this method is called once per game step while the scene is running
   * @param {number} time - the current time
   * @param {number} delta - The delta time in ms since the last frame
   */
  update(time, delta) {}

  clickButton() {
    this.scene.start("gameScene");
  }
}

export default MenuScene;
