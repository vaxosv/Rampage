import {Game} from "./class/app";

let game = new Game();
Game.lunch();

document.querySelector('body').addEventListener('click', () => {
    Game.ball();
});
