"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game = /** @class */ (function () {
    function Game() {
        this.stop = false;
        this.arr = [1];
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
    Game.prototype.pause = function () {
        var _this = this;
        document.querySelector('canvas').addEventListener('click', function () {
            _this.stop = !_this.stop;
            if (stop) {
                // pixi.app.ticker.stop();
            }
            else {
                // pixi.app.ticker.start();
            }
        });
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=app.js.map