export class Game {
    stop = false;

    arr: Array<number> = [1];

    constructor() {
    }

    static lunch() {
        console.log(`game lunched`);
        this.manu();
    }

    static manu() {
        console.log(`show menu`)
    }

    static ball() {
        console.log(`show ball`)
    }

    pause() {
        document.querySelector('canvas').addEventListener('click', () => {
            this.stop = !this.stop;
            if (stop) {
                // pixi.app.ticker.stop();
            } else {
                // pixi.app.ticker.start();
            }
        })
    }

}
