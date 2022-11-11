/* global Phaser */

//created by sophie
//created on nov 2022
//this is the Phaser3 game configuration file

import splashScene from './splashScene.js'

//our game scene
const splashScene = new SplashScene()

/**
 * Start Phaser Game
 */
const config = {
  type: Phaser.Auto,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  //set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);

//load scenes
//NOTE: remember any key is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)

//start title
game.scene.start('splashScene')
