/* global Phaser */

//created by sophie
//created on nov 2022
//this is the Phaser3 game configuration file

/**
 * Start Phaser Game
 */
const config = {
  type: Phaser.Auto,
  width: 1920,
  height: 1080,
  //set background color
  backgroundColor: 0x5f6e7a,
};
const game = new Phaser.Game(config);
console.log(game);
