import {Application, Container} from 'pixi.js'
import {Height, Width} from "./globals";

export class Pixi {
    app: Application;
    constructor() {
        this.app = new Application({
            width: Width, height: Height, backgroundColor: 0x2c3e50, resolution: window.devicePixelRatio || 1,
        });
        document.body.appendChild(this.app.view);
    }
}
