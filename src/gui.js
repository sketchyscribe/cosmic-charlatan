import { Game } from "./main";

function drawLog() {
    Game.Term.ctx.fillStyle = '#000';
    Game.Term.ctx.fillRect(0, (Game.Term.height - 6) * Game.Term.cellSize - 16, Game.Term.canvas.width, Game.Term.canvas.height);

    if (!Game.Log.length) return;

    let c = 'F';
    let i = 0;

    for (let line of Game.Log) {

        switch (i) {
            case 1:
                c = 'F';
                break;
            case 2:
                c = 'A';
                break;
            case 3:
                c = '4';
                break;
        }

        Game.Term.drawTextF({
            msg: line.msg,
            fg: line.fg + c,
            bg: line.bg,
            x: 0,
            y: Game.Term.height - 5 + i
        });

        i++
    }
}

function drawStats() {
    Game.Term.drawText(`HP|${Game.player.stats.HP}/${Game.player.stats.HP_MAX}| |STR|${Game.player.stats.STR}/${Game.player.stats.STR_MAX}| |DEX|${Game.player.stats.DEX}/${Game.player.stats.DEX_MAX}| |INT|${Game.player.stats.INT}/${Game.player.stats.INT_MAX}| |DEF|${Game.player.stats.DEF}|`, 0, Game.Term.height - 6, '#FFFF', '#0000');
}

export default function drawUI() {
    drawLog();
    drawStats();

    Game.Term.ctx.fillStyle = '#FFF';
    Game.Term.ctx.fillRect(0, (Game.Term.height - 6) * Game.Term.cellSize, Game.Term.canvas.width, 4);Game.Term.ctx.fillStyle = '#FFF';
    Game.Term.ctx.fillRect(0, (Game.Term.height - 5) * Game.Term.cellSize, Game.Term.canvas.width, 4);
}