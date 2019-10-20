import {Application, Container} from 'pixi.js'
import {Height, Width} from "./globals";

export class Pixi {
    app: Application;
    constructor() {
        this.app = new Application({
            width: Width, height: Height, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
        });
        document.body.appendChild(this.app.view);
    }
}
