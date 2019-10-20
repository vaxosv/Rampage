import {TexT} from './class/text'
import {Pixi} from "./class/pixi";
import {SpritE} from "./class/sprite";

const speed = 6;
let stop = false;

// let arr: Array<TexT> = []

const pixi = new Pixi();
const header = new TexT(100, 10, 'slot');
const header2 = new TexT(200, 10, 'slot2');
const spell = new SpritE(300, 10);
pixi.app.stage.addChild(header.text);
pixi.app.stage.addChild(header2.text);
pixi.app.stage.addChild(spell.sprite);


// for (let i = 0; i <= 10; i++) {
//     const header = new TexT('slot', 100 * i, 10);
//     pixi.app.stage.addChild(header.text);
//     arr.push(header)
//
// }
console.log(pixi.app);
pixi.app.ticker.add((delta) => {
    header.update(delta, speed);
    header2.update(delta, speed);
    spell.update(delta, speed)
    // arr.forEach(item => {
    //     item.update(delta, 5)
    // })
});

document.querySelector('canvas').addEventListener('click', () => {
    stop = !stop;
    if (stop) {
        pixi.app.ticker.stop();
    } else {
        pixi.app.ticker.start();
    }
})


