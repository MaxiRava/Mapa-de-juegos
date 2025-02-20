import { Preloads } from "../scenes/preloads.js";
import { MainMenu } from "../scenes/mainmenu.js";
import { Play } from "../scenes/play.js";
import { Play2 } from "../scenes/play2.js";
import { Play3 } from "../scenes/play3.js";
import { Retry } from "../scenes/retry.js";
import { victory } from "../scenes/victory.js";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [Preloads, MainMenu, Play, Play2, Play3, Retry, victory], // Listado de todas las escenas del juego, en orden
  // La primera escena es con la cual empieza el juego
};

var game = new Phaser.Game(config);
