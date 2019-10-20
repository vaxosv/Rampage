import {TexT} from './class/text'
import {Pixi} from "./class/pixi";

const pixi = new Pixi();
const header = new TexT('slot');
pixi.app.stage.addChild(header.text);
pixi.app.ticker.add((delta) => {
    header.update(delta);
});

