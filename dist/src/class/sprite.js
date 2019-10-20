"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var PIXI = require("pixi.js");
var globals_1 = require("./globals");
var Sprite = PIXI.Sprite;
var SpritE = /** @class */ (function () {
    function SpritE(possitionX, posssitionY) {
        this.initialSpeed = 10;
        this.topSpeed = 30;
        this.speedvalue = 3;
        this.speed = this.speedvalue;
        // @ts-ignore
        this.sprite = new Sprite.from('./assets/epic-potion.png');
        this.sprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        this.sprite.interactive = true;
        this.sprite.scale.x = 0.1;
        this.sprite.scale.y = 0.1;
        this.possitionX = possitionX + 100;
        this.possitionY = posssitionY;
        // new PIXI.filters.DisplacementFilter(this.sprite);
    }
    SpritE.prototype.update = function (delta, time) {
        this.possitionY += delta * time;
        this.reset(delta);
    };
    SpritE.click = function () {
        console.log('daeklika');
    };
    SpritE.prototype.reset = function (delta) {
        if ((this.sprite.y) >= globals_1.Height) {
            this.sprite.y = 0;
            this.initialSpeed += this.speed;
        }
        if (this.initialSpeed >= this.topSpeed) {
            this.speed = -this.speedvalue;
        }
        if (this.initialSpeed <= 10) {
            this.speed = this.speedvalue;
        }
    };
    Object.defineProperty(SpritE.prototype, "possitionX", {
        get: function () {
            return this.sprite.x;
        },
        set: function (x) {
            this.sprite.x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpritE.prototype, "possitionY", {
        get: function () {
            return this.sprite.y;
        },
        set: function (y) {
            this.sprite.y = y;
        },
        enumerable: true,
        configurable: true
    });
    return SpritE;
}());
exports.SpritE = SpritE;
//# sourceMappingURL=sprite.js.map