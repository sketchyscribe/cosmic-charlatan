import Actor from "./Actor";
import { Game } from "../main";

export default class Floor extends Actor {
    constructor(x, y) {
        super(
            'Floor',
            'made of smooth, cold stone.',
            x,
            y,
            '•',
            '#FFF',
            '#0000'
        );
    }

    interact() {
        //Game.MessageLog.unshift(`You inspect the floor closer... it seems to be ${this.description}`);
    }
}