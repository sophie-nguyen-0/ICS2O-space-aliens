/* global Phaser */

//created by sophie
//created on nov 2022
//this is the Phaser3 game configuration file

/**
 *This class is the Title scene
 */
class TitleScene extends Phaser.Scene {
  /**
   *this method is the constructor
   */
  constructor() {
    super({ key: "titlescene" });
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
    console.log("Title Scene");
  }

  /**
   *Can be defined on your own Scenes
   *Use it to create your game objects
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {}

  /**
   *Should be overridden by your own scenes
   *this method is called once per game step while the scene is running
   * @param {number} time - the current time
   * @param {number} delta - The delta time in ms since the last frame
   */
  update(time, delta) {}
}

export default TitleScene;
