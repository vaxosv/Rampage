import {Text} from "pixi.js";
import {Height, Width} from "./globals";

export class TexT {
    text: PIXI.Text;
    initialSpeed = 10;
    topSpeed = 30;
    speedvalue = 3;
    speed = this.speedvalue;

    constructor(text: string) {
        this.text = new Text(text, {fill: `#fff`});
        this.possitionX = Width / 2 -50 ;
        this.possitionY = 100;
    }

    update(delta: number) {
        this.possitionY += delta * this.initialSpeed;
        this.reset();
    }

    private reset() {
        if ((this.text.y) >= Height) {
            this.text.y = 0;
            this.initialSpeed += this.speed;
        }

        if (this.initialSpeed >= this.topSpeed) {
            this.speed = -this.speedvalue;
        }

        if (this.initialSpeed <= 10){
            this.speed = this.speedvalue;
        }

        console.log(this.speed);
    }

    private set possitionX(x: number) {
        this.text.x = x;
    }

    private set possitionY(y: number) {
        this.text.y = y;
    }

    private get possitionX() {
        return this.text.x
    }

    private get possitionY() {
        return this.text.y
    }


}
