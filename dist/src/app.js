"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./class/app");
var pixi_1 = require("./class/pixi");
var pixi = new pixi_1.Pixi();
var game = new app_1.Game();
document.querySelector('body').addEventListener('click', function () {
    app_1.Game.lunch();
});
//# sourceMappingURL=app.js.map