import Actor from "./Actor";
import Solid from "../Components/C_Solid";
import { Game } from "../main";

export default class Wall extends Actor {
    constructor(x, y) {
        super(
            'Wall',
            'made of smooth, cold stone.',
            x,
            y,
            '#',
            '#FFF',
            '#000'
        );

        this.add(new Solid());
    }

    interact() {
        Game.logMessage('You bump into a wall...', this.fg, this.bg);
    }
}