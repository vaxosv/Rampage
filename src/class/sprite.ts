// @ts-ignore
import * as PIXI from "pixi.js";
import {Height} from "./globals";
import Sprite = PIXI.Sprite;

export class SpritE {
    sprite: PIXI.Sprite;
    initialSpeed = 10;
    topSpeed = 30;
    speedvalue = 3;
    speed = this.speedvalue;

    constructor(possitionX: number, posssitionY: number){
        // @ts-ignore
        this.sprite = new Sprite.from('./assets/epic-potion.png');
        this.sprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        this.sprite.interactive= true;
        this.sprite.scale.x = 0.1;
        this.sprite.scale.y = 0.1;
        this.possitionX = possitionX +100 ;
        this.possitionY = posssitionY;
        // new PIXI.filters.DisplacementFilter(this.sprite);
    }

    update(delta: number, time: number) {
        this.possitionY += delta * time;
        this.reset(delta);
    }

    static click() {
        console.log('daeklika')
    }

    private reset(delta: number) {
        if ((this.sprite.y) >= Height) {
            this.sprite.y = 0;
            this.initialSpeed += this.speed;
        }

        if (this.initialSpeed >= this.topSpeed) {
            this.speed = -this.speedvalue;
        }

        if (this.initialSpeed <= 10){
            this.speed = this.speedvalue;
        }

    }

    protected set possitionX(x: number) {
        this.sprite.x = x;
    }

    protected set possitionY(y: number) {
        this.sprite.y = y;
    }

    protected get possitionX() {
        return this.sprite.x
    }

    protected get possitionY() {
        return this.sprite.y
    }

}
