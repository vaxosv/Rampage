import {Game} from "./class/app";
import {Pixi} from "./class/pixi";

const pixi = new Pixi();
let game = new Game();

document.querySelector('body').addEventListener('click', () => {
    Game.lunch();
});
