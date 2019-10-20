"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var text_1 = require("./class/text");
var pixi_1 = require("./class/pixi");
var pixi = new pixi_1.Pixi();
var header = new text_1.TexT('slot');
pixi.app.stage.addChild(header.text);
pixi.app.ticker.add(function (delta) {
    header.update(delta);
});
//# sourceMappingURL=app.js.map