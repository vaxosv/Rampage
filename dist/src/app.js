"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var text_1 = require("./class/text");
var pixi_1 = require("./class/pixi");
var sprite_1 = require("./class/sprite");
var speed = 6;
var stop = false;
// let arr: Array<TexT> = []
var pixi = new pixi_1.Pixi();
var header = new text_1.TexT(100, 10, 'slot');
var header2 = new text_1.TexT(200, 10, 'slot2');
var spell = new sprite_1.SpritE(300, 10);
pixi.app.stage.addChild(header.text);
pixi.app.stage.addChild(header2.text);
pixi.app.stage.addChild(spell.sprite);
// for (let i = 0; i <= 10; i++) {
//     pixi.app.stage.addChild(header.text);
//     arr.push(header)
//
//     const header = new TexT('slot', 100 * i, 10);
// }
console.log(pixi.app);
pixi.app.ticker.add(function (delta) {
    header.update(delta, speed);
    header2.update(delta, speed);
    spell.update(delta, speed);
    // arr.forEach(item => {
    //     item.update(delta, 5)
    // })
});
//# sourceMappingURL=app.js.map