import scaleToWindow from '../lib/scaleToWindow';

export default class Terminal {
    #canvas;
    #ctx;
    #scale = 1;

    options = {};
    input = [];

    constructor(options = {
        width,
        height,
        cellSize,
        isFullscreen,
        fullscreenBG,
    }) {
        this.width = options.width || 80;
        this.height = options.height || 50;
        this.cellSize = options.cellSize || 16;
        this.options.isFullscreen = options.isFullscreen || false;
        this.options.fullscreenBG = options.fullscreenBG || '#FFF';

        this.#canvas = document.createElement('canvas');
        this.#ctx = this.#canvas.getContext('2d');

        this.#canvas.width = this.width * this.cellSize;
        this.#canvas.height = this.height * this.cellSize;

        this.#ctx.font = `bold ${this.cellSize}px Arial`;
        this.#ctx.textAlign = 'center'
        this.#ctx.textBaseline = 'top';

        document.body.appendChild(this.#canvas);

        if (this.options.isFullscreen) {
            this.#scale = scaleToWindow(this.#canvas, this.options.fullscreenBG);
            window.onresize = () => this.#scale = scaleToWindow(this.#canvas, this.options.fullscreenBG);
        }

        window.addEventListener('keydown', (e) => { this.input[e.code] = true; this.lastInput = e.code });
        window.addEventListener('keyup', (e) => { this.input[e.code] = false; });
    }

    get ctx() {
        return this.#ctx;
    }

    get canvas() {
        return this.#canvas;
    }

    isKeyDown(key) {
        return this.input[key];
    }

    keyPressed(key) {
        if (this.input[key] === true) {
            this.input[key] = false;
            return true;
        }

        return false;
    }

    clear(color = null) {
        this.ctx.fillStyle = color || '#000';
        this.ctx.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
    }

    drawChar(x = 0, y = 0, char = '', fg = null, bg = null) {
        this.ctx.fillStyle = bg || '#0000';
        this.ctx.fillRect(
            x * this.cellSize,
            y * this.cellSize,
            this.cellSize,
            this.cellSize
        );

        this.ctx.fillStyle = fg;
        this.ctx.fillText(
            char,
            x * this.cellSize + (this.cellSize / 2),
            y * this.cellSize
        );
    }

    drawText(msg = '', x = 0, y = 0, fg = '#fff', bg = null, max = 80) {
        let yOffset = 0;
        let xOffset = 0;
        let idx = 0;

        //Draw every character in the message
        for (let char of msg) {
            if (char === '\n') {
                yOffset++;
                idx = 0;
                continue;
            } else if (idx === max) {
                yOffset++;
                idx = 0;
            }

            this.drawChar((x + idx), y + yOffset, char, fg, bg);
            idx++;
        }
    }

    drawTextF(template) {
        const msg = template.msg;

        msg.split("").forEach((char, index) => {
            const options = { ...template };
            this.drawChar(
                index + options.x,
                options.y,
                char,
                options.fg,
                options.bg
            );
        });
    }

    drawBar(x, y, current, max, fg, bg) {

        for (let i = 0; i < max; i++) {
            this.drawChar(i + x, y, ' ', '#0000', bg);
        }

        for (let i = 0; i < current; i++) {
            this.drawChar(i + x, y, ' ', '#0000', fg);
        }
    }
}