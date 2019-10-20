"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = require("pixi.js");
var globals_1 = require("./globals");
var TexT = /** @class */ (function () {
    function TexT(possitionX, posssitionY, text) {
        this.initialSpeed = 10;
        this.topSpeed = 30;
        this.speedvalue = 3;
        this.speed = this.speedvalue;
        this.text = new pixi_js_1.Text(text, { fill: "#ecf0f1" });
        this.text.interactive = true;
        this.possitionX = possitionX + 100;
        this.possitionY = posssitionY;
        this.text.on('click', function () { TexT.click(); });
    }
    TexT.prototype.update = function (delta, time) {
        this.possitionY += delta * time;
        this.reset(delta);
    };
    TexT.click = function () {
        console.log('daeklika');
    };
    TexT.prototype.reset = function (delta) {
        if ((this.text.y) >= globals_1.Height) {
            this.text.y = 0;
            this.initialSpeed += this.speed;
        }
        if (this.initialSpeed >= this.topSpeed) {
            this.speed = -this.speedvalue;
        }
        if (this.initialSpeed <= 10) {
            this.speed = this.speedvalue;
        }
    };
    Object.defineProperty(TexT.prototype, "possitionX", {
        get: function () {
            return this.text.x;
        },
        set: function (x) {
            this.text.x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TexT.prototype, "possitionY", {
        get: function () {
            return this.text.y;
        },
        set: function (y) {
            this.text.y = y;
        },
        enumerable: true,
        configurable: true
    });
    return TexT;
}());
exports.TexT = TexT;
//# sourceMappingURL=text.js.map