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
        this.text.interactive= true;
        this.possitionX = Width / 2 -50 ;
        this.possitionY = 100;
        this.text.on('click', ()=>{TexT.click()})
    }

    update(delta: number) {
        this.possitionY += delta * this.initialSpeed;
        this.reset();
    }

    static click() {
        console.log('daeklika')
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
