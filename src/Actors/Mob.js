import Actor from "./Actor";
import C_Stats from "../Components/C_Stats";
import C_Solid from "../Components/C_Solid";
import { Game } from "../main";

export default class Mob extends Actor {
    constructor(name, description, x, y, char, fg, bg, stats = { STR: 10, DEX: 10, INT: 10, HP: 6, DEF: 0, AP: 1 }) {
        super(name, description, x, y, char, fg, bg);

        this.add(new C_Solid());
        this.add(new C_Stats(
            stats.STR, stats.DEX, stats.INT,
            stats.HP, stats.DEF, stats.AP
        ));
    }

    die() {
        this.char = '%';
        this.fg = '#F00F';
        this.bg = '#900F';
        this.remove(this.solid);
        this.remove(this.stats);
    }

    tryMove() {
        if (!this.move) return;

        let mx = this.x + this.move.dx;
        let my = this.y + this.move.dy;

        let blockers = Game.Actors.filter((a) => {
            return a.x === mx && a.y === my && a.solid
        });

        if (blockers.length) {
            blockers.forEach((a) => a.interact(this))
        } else {
            this.x += this.move.dx;
            this.y += this.move.dy;
        }

        this.remove(this.move);
    }

    act() {
        //console.log(`${this.name} thinks!`);
    }
}