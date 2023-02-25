import '../style.css';
import Stats from 'stats.js';

import * as UTIL from './util';
import Terminal from './terminal';
import drawUI from './gui';

import M_Player from './Actors/A_Player';
import T_Wall from './Actors/T_Wall';
import T_Floor from './Actors/T_Floor';
import M_Goblin from './Actors/M_Goblin';

//TODO:
// * Implement FOV Algorithm
// * Map Generation
//      * Ship Generation
//      * Dungeon World Generation > 3 levels
// * Turn Scheduler
//      * Action Points - Each action takes 1 point, limited AP/turn
//      * OR
//      * Turn phases - Movement > Attack > Bonus 
// * Inventory System
//      * 10 Slots
//      * Pickup & drop items from specific slots
//      * Equip item from slot || Use item from inventory
// * Basic Items
//      * Sword
//      * Torch
//      * Food
//      * Shield
//      * 1 artifact
// * Implement ship mechanics
//      * On ship storage for items, simply drop and pickup from ground
//      * Acces computer terminal for marketplace to buy and sell items
//      * Access cockpit to select next bounty location

export const Game = {
    Term: new Terminal({
        width: 50,
        height: 25,
        cellSize: 64,
        isFullscreen: true,
        fullscreenBG: '#000'
    }),
    Actors: [],
    Map: {
        width: 100,
        height: 30,
    },
    getAt: (x, y) => {
        Game.Actors.filter((a) => {
            return a.x === x && a.y === y
        });
    },
    Log: [],
    logMessage: (msg, fg = '#FFF', bg = '#000') => {
        Game.Log.unshift({
            msg: msg,
            fg: fg,
            bg: bg
        });
    }
}

function inBounds(x, y, w, h) {
    return (x >= 0 && y >= 0 && x <= w && y <= h)
}

let stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);

function createMap() {
    for (let y = 0; y < Game.Map.height; y++) {
        for (let x = 0; x < Game.Map.width; x++) {
            if (x === 0 || y === 0 || x === Game.Map.width - 1 || y === Game.Map.height - 1) {
                new T_Wall(x, y);
            } else {
                new T_Floor(x, y);
            }
        }
    }

    new M_Goblin(10, 10);
    new M_Goblin(20, 15);
    Game.player = new M_Player(1, 1);

    Game.logMessage(
        'Welcome brave adventurer!',
        '#FF0',
        '#440'
    )
}

function init() {
    createMap();
}

//Used to check for turn progression
const inputMap = [
    //Movement Keys
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',

    'KeyW',
    'KeyA',
    'KeyX',
    'KeyD',
    'KeyQ',
    'KeyE',
    'KeyZ',
    'KeyC',

    'Numpad1',
    'Numpad2',
    'Numpad3',
    'Numpad4',
    'Numpad6',
    'Numpad7',
    'Numpad8',
    'Numpad9',

    //Wait Keys
    'Numpad5',
    'Period',
    'KeyS',
    'NumpadDecimal'
];

function tick() {
    if (inputMap.includes(Game.Term.lastInput)) {
        Game.Actors.filter((a) => 'act' in a).forEach((actor) => {
            actor.act();
            actor.tryMove();
        });

        Game.Term.lastInput = null;
    }
}

function draw() {
    Game.Term.clear();

    let offsetX = UTIL.clamp((Game.player.x - (Game.Term.width / 2) | 0), -1, Game.Map.width - Game.Term.width + 1);
    let offsetY = UTIL.clamp((Game.player.y - (Game.Term.height / 2) + 4 | 0), -1, Game.Map.height - Game.Term.height + 7);

    Game.Actors.forEach((actor) => {
        if (inBounds(actor.x - offsetX, actor.y - offsetY, Game.Term.width, Game.Term.height)) {
            Game.Term.drawChar(
                actor.x - offsetX,
                actor.y - offsetY,
                actor.char,
                actor.fg,
                actor.bg
            );
        }
    });
}

function loop() {
    stats.begin();
    tick();
    draw();

    drawUI();
    stats.end();
    requestAnimationFrame(loop);
}

window.onload = () => {
    init();
    loop();
}

window.game = Game;