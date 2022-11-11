/* global Phaser */

//created by sophie
//created on nov 2022
//this is the Phaser3 game configuration file

/**
*This class is the Splash scene
*/
class SplashScene extends Phaser.scene{
  /**
  *this method is ht econstructor
  */
  constructor () {
    super({key: 'splashScene'})
  }

  /**
  *Can be defined on your own Scenes
  *This method is called by the Scene Manager when the scene starts,
  *before preload() and create()
  *@param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
  */

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  /**
  *Can be defined on your own Scenes
  *Use it to load assets
  */
  preload () {
    consol.log('Splash Scene')
  }

  /**
  *Can be defined on your own Scenes
  *Use it to create your game objects
  * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
  */
  create (data){
    
  }

  /**
  *Should be overriden by your own scenes
  *this method is called once per game step while the scene is running
  * @param {number} time - the current time
  * @param {number} delta - The delta time in ms since the last frame
  */
  update (time, delta) {
    
  }
}

export default SplashScene