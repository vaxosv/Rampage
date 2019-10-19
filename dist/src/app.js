"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = require("pixi.js");
var text_1 = require("./class/text");
var globals_1 = require("./class/globals");
var app = new pixi_js_1.Application({
    width: globals_1.Width, height: globals_1.Height, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);
var header = new text_1.TexT('slot');
app.stage.addChild(header.text);
app.ticker.add(function (delta) {
    header.update(delta);
});
document.querySelector('body').addEventListener('click', function () {
});
//# sourceMappingURL=app.js.map