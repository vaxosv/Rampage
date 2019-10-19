"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./class/app");
var PIXI = require("pixi.js");
var game = new app_1.Game();
app_1.Game.lunch();
document.querySelector('body').addEventListener('click', function () {
    // Game.ball(12, 12);
    console.log(PIXI);
});
if (game.arr.sort()) {
    console.log(11111111111);
    console.log(game.arr);
}
//# sourceMappingURL=app.js.map