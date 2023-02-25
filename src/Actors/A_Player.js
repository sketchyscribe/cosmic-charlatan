import Mob from "./Mob";
import C_Move from "../Components/C_Move";
import { Game } from "../main";

export default class M_Player extends Mob {
    constructor(x, y) {
        super(
            'You',
            'a mighty @ towers over its enemies!',
            x,
            y,
            '@',
            '#FF0',
            '#000a',
        );
    }

    act() {
        if (Game.Term.keyPressed('ArrowRight') || Game.Term.keyPressed('KeyD') || Game.Term.keyPressed('Numpad6')) this.add(new C_Move(1, 0));
        else if (Game.Term.keyPressed('ArrowLeft') || Game.Term.keyPressed('KeyA') || Game.Term.keyPressed('Numpad4')) this.add(new C_Move(-1, 0));
        else if (Game.Term.keyPressed('ArrowDown') || Game.Term.keyPressed('KeyX') || Game.Term.keyPressed('Numpad2')) this.add(new C_Move(0, 1));
        else if (Game.Term.keyPressed('ArrowUp') || Game.Term.keyPressed('KeyW') || Game.Term.keyPressed('Numpad8')) this.add(new C_Move(0, -1));

        else if (Game.Term.keyPressed('KeyQ') || Game.Term.keyPressed('Numpad7')) this.add(new C_Move(-1, -1));
        else if (Game.Term.keyPressed('KeyE') || Game.Term.keyPressed('Numpad9')) this.add(new C_Move(1, -1));
        else if (Game.Term.keyPressed('KeyZ') || Game.Term.keyPressed('Numpad1')) this.add(new C_Move(-1, 1));
        else if (Game.Term.keyPressed('KeyC') || Game.Term.keyPressed('Numpad3')) this.add(new C_Move(1, 1));
        else Game.logMessage(`You wait for a moment...`, '#AAA', '#0000');
    }
}