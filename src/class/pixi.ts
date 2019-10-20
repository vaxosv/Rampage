import {Application, Container} from 'pixi.js'
import {Global, Height, Width} from "./globals";

export class Pixi {
    app: Application;
    static stop = false;

    constructor() {
        this.app = new Application({
            width: Width, height: Height, backgroundColor: 0x2c3e50, resolution: window.devicePixelRatio || 1,
        });
        document.body.appendChild(this.app.view);
        document.querySelector('canvas').addEventListener('click', () => {
            Pixi.stop = !Pixi.stop;
            console.log(Pixi.stop);
            if (Pixi.stop) {
                this.app.ticker.stop();
            } else {
                this.app.ticker.start();
            }
        })
    }




}
