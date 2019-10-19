"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = require("pixi.js");
var Pixi = /** @class */ (function () {
    function Pixi() {
        var app = new pixi_js_1.Application({
            width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
        });
        document.body.appendChild(app.view);
        var container = new pixi_js_1.Container();
        app.stage.addChild(container);
    }
    return Pixi;
}());
exports.Pixi = Pixi;
//# sourceMappingURL=pixi.js.map