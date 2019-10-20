"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = require("pixi.js");
var globals_1 = require("./globals");
var Pixi = /** @class */ (function () {
    function Pixi() {
        this.app = new pixi_js_1.Application({
            width: globals_1.Width, height: globals_1.Height, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
        });
        document.body.appendChild(this.app.view);
    }
    return Pixi;
}());
exports.Pixi = Pixi;
//# sourceMappingURL=pixi.js.map