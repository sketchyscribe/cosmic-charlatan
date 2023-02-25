import { Game } from "../main";

export default class Actor {
    constructor(name, description, x, y, char, fg, bg) {
        this.name = name || '!UNDEFINED!';
        this.description = description || '!UNDEFINED!';

        this.x = x || 0;
        this.y = y || 0;

        this.char = char || '?';
        this.fg = fg || '#F0FF';
        this.bg = bg || '#0000';

        Game.Actors.push(this);
    }

    add(component) {
        this[component.name] = component;
    }

    remove(component) {
        delete this[component.name];
    }

    interact() {
        //Game.MessageLog.unshift(`This is a ${this.name}. It is ${this.description}.`);
    }
}