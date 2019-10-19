"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.lunch = function () {
        console.log("game lunched");
        this.manu();
    };
    Game.manu = function () {
        console.log("show menu");
    };
    Game.ball = function () {
        console.log("show ball");
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=app.js.map