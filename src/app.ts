import {TexT} from './class/text'
import {Pixi} from "./class/pixi";
import {SpritE} from "./class/sprite";
import {Global} from './class/globals';

const speed = 6;
let stop = false;

// let arr: Array<TexT> = []

const pixi = new Pixi();
const header = new TexT(100, 10, 'slot');
pixi.app.stage.addChild(header.text);


console.log(pixi.app);
pixi.app.ticker.add((delta) => {
    header.update(delta, speed);
});




