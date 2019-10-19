export class Game {

    arr: Array<number> = [1];

    constructor(){}

    static lunch(){
        console.log(`game lunched`);
        this.manu();
    }

    static manu(){
        console.log(`show menu`)
    }

    static ball(){
        console.log(`show ball`)
    }
}
