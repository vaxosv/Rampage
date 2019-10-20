import {Text} from "pixi.js";
import {Height, Stars, Width, Global} from "./globals";
import * as PIXI from "pixi.js"

export class TexT {
    text: PIXI.Text;
    filter: PIXI.Filter;
    initialSpeed = 10;
    topSpeed = 30;
    speedvalue = 3;
    speed = this.speedvalue;
    constructor(possitionX: number, posssitionY: number, text?: string) {
        this.text = new Text(text, {fill: `#ecf0f1`});
        this.text.interactive = true;
        this.possitionX = possitionX + 100;
        this.possitionY = posssitionY;
        this.text.on('click', () => {
            TexT.click()
        })
    }

    update(delta: number, time: number) {
        this.possitionY += delta * time;
        this.reset(delta);
    }

    static click() {
        console.log('daeklika')
    }

    private reset(delta: number) {
        if ((this.text.y) >= Height) {
            this.text.y = 0;
            this.initialSpeed += this.speed;
        }

        if (this.initialSpeed >= this.topSpeed) {
            this.speed = -this.speedvalue;
        }

        if (this.initialSpeed <= 10) {
            this.speed = this.speedvalue;
        }

        if (this.possitionY >= (Height / 2) - 20 && this.possitionY <= (Height / 2) + 20) {
            console.log('shignit');
            Global.Stars = true;
        } else {
            Global.Stars = false;
        }

    }

    protected set possitionX(x: number) {
        this.text.x = x;
    }

    protected set possitionY(y: number) {
        this.text.y = y;
    }

    protected get possitionX() {
        return this.text.x
    }

    protected get possitionY() {
        return this.text.y
    }


}
