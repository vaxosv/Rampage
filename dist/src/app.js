"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./class/app");
var game = new app_1.Game();
app_1.Game.lunch();
document.querySelector('body').addEventListener('click', function () {
    app_1.Game.ball();
});
//# sourceMappingURL=app.js.map