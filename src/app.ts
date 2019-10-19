import {Game} from "./class/app";
import * as PIXI from "pixi.js"

let game = new Game();
Game.lunch();

document.querySelector('body').addEventListener('click', () => {
    // Game.ball(12, 12);
    console.log(PIXI)
});

if ( game.arr.sort()){
    console.log(11111111111)

}
