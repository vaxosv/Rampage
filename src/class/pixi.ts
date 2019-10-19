import {Application, Container} from 'pixi.js'

export class Pixi {
    constructor() {
        const app = new Application({
            width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
        });
        document.body.appendChild(app.view);

        const container = new Container();

        app.stage.addChild(container)
    }
}
