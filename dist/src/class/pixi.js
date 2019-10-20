"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = require("pixi.js");
var globals_1 = require("./globals");
var Pixi = /** @class */ (function () {
    function Pixi() {
        var _this = this;
        this.app = new pixi_js_1.Application({
            width: globals_1.Width, height: globals_1.Height, backgroundColor: 0x2c3e50, resolution: window.devicePixelRatio || 1,
        });
        document.body.appendChild(this.app.view);
        document.querySelector('canvas').addEventListener('click', function () {
            Pixi.stop = !Pixi.stop;
            console.log(Pixi.stop);
            if (Pixi.stop) {
                _this.app.ticker.stop();
            }
            else {
                _this.app.ticker.start();
            }
        });
    }
    Pixi.stop = false;
    return Pixi;
}());
exports.Pixi = Pixi;
//# sourceMappingURL=pixi.js.map