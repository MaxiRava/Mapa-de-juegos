import Button from "../js/button.js";

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class MainMenu extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("MainMenu")
    }

    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'sky');
        // texto del menú principal
        this.add.text(this.cameras.main.centerX/1.65, this.cameras.main.centerY/1.1, "SpaceGame", {
            fontSize: "64px",
            fill: "white",
          });
        // Logo de Phaser
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY/1.5, 'logo');
        

        // Boton para comenzar a jugar
        const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/3, 'Play', this, () => {
            // Instrucción para pasar a la escena Play
            this.scene.start("Play3", 
            {
                score:0, 
                scoreTime: 60
            });
        });
    }
}