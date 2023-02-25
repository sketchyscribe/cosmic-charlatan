import { Game } from "../main";
import Mob from "./Mob";

export default class M_Goblin extends Mob {
    constructor(x, y) {
        super(
            'Goblin',
            'a small, greasy, green-skinned creature with beady red eyes..',
            x,
            y,
            'g',
            '#0F0',
            '#000'
        );
    }

    interact(other) {
        if (other.name === 'You') {
            Game.logMessage(
                `${other.name} bash the ${this.name}!`,
                this.fg,
                this.bg
            );
        } else {
            Game.logMessage(
                `${other.name} bashes the ${this.name}!`,
                this.fg,
                this.bg
            );
        }
        
        this.die();
    }

    act() {
        super.act();
    }
}