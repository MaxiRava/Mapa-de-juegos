import Button from "../js/button.js";

var score;

// Clase Retry, donde se crean los botones, el logo y el fondo del menú derrota
export class Retry extends Phaser.Scene {
  constructor() {
    super("Retry");
  }

  init(data) {
    // recupera el valor SCORE enviado como dato al inicio de la escena
    score = data.score;
  }

  create() {

    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,'sky');

    // Vaca triste
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY / 1.5,
      "loss"
    );
    // Texto que muestra el puntaje maximo alcanzado
    this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY/0.95,
        `Puntaje alcanzado: ${score}`,{
          fontSize: "32px",
          fill: "white",
        })
      .setOrigin(0.5);

    // Boton para volver a jugar
    const boton = new Button(
      this.cameras.main.centerX,
      this.cameras.main.centerY + this.cameras.main.centerY / 3,
      "Retry",
      this,
      () => {
        // Instrucción para pasar a la escena Play
        this.scene.start("Play");
      }
    );
  }
}
