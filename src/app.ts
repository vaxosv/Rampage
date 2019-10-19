import {Application, Text} from 'pixi.js'

import { TexT } from './class/text'
import {Height, Width} from "./class/globals";

const app = new Application({
    width: Width, height: Height, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

const header = new TexT('slot');


app.stage.addChild(header.text);

app.ticker.add((delta)=>{
    header.update(delta);
});


document.querySelector('body').addEventListener('click', () => {

});
