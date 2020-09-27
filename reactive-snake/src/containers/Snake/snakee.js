import { keyboard } from '../../shared/utility';
import Point from './point';

export default class SnakeClass {
    constructor(canvasWidth, canvasHeight, scale) {
        this.x = 0;
        this.y = 0;
        // initial state is that the snake moves to the right
        this.direction = keyboard.keys.RIGHT_ARROW;
        // we use this field to check if we can move
        // we use this since we use event listener for 'keydown'
        // and event handler can get invoked before checks in the
        // snakeGameLifecycle method inside Snake.js
        // effectively letting us go in reverse when there are 0 or 1 elements in the tail
        this.lastKnownDirection = this.direction;
        this.dx = 0;
        this.dy = 0;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.scale = scale;
        // tracks the number of history parts (tail elements)
        this.length = 0;
        // tracks the history of snake's movement (if it has eaten any food)
        this.tail = [];
        this.isDead = false;
    }

    update = () => {
        if (!this.isDead) {
            // shift only if a food has been eaten
            if (this.length === this.tail.length) {
                // shift all tail parts
                this.tail.shift();
            }
            // add latest previous position of the head
            this.tail[this.length - 1] = new Point(this.x, this.y);

            // move grid cell by grid cell
            const newX = this.x + this.dx * this.scale;
            const newY = this.y + this.dy * this.scale;

            // check if in bounds left and right
            if (newX >= 0 && newX <= this.canvasWidth - this.scale) {
                this.x = newX;
            }

            // check if in bounds up and down
            if (newY >= 0 && newY <= this.canvasHeight - this.scale) {
                this.y = newY;
            }

            // update last known position only after update
            // which will technically be a new canvas frame
            this.setLastKnownDirection();
        }
    }

    show = (ctx) => {
        // draw the tail
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'white';
        for (let i = 0; i < this.tail.length; i++) {
            ctx.strokeRect(this.tail[i].x, this.tail[i].y, this.scale, this.scale);
            ctx.fillRect(this.tail[i].x, this.tail[i].y, this.scale, this.scale);
        }

        // draw the head
        ctx.fillStyle = '#93FF19';
        ctx.fillRect(this.x, this.y, this.scale, this.scale);
    }

    getDirection = (event) => {
        if (!this.isDead) {
            const key = event.keyCode;
            switch(key) {
                case keyboard.keys.UP_ARROW:
                    this.setDirection(0, -1, key);
                    break;
                case keyboard.keys.DOWN_ARROW:
                    this.setDirection(0, 1, key);
                    break;
                case keyboard.keys.LEFT_ARROW:
                    this.setDirection(-1, 0, key);
                    break;
                case keyboard.keys.RIGHT_ARROW:
                    this.setDirection(1, 0, key);
                    break;
                default:
                    break;
            }
        }
    }

    setDirection = (dx, dy, newDirection) => {
        // restricting movement in opposite direction
        let canMove = true;

        switch(newDirection) {
            case keyboard.keys.UP_ARROW:
                if (this.lastKnownDirection === keyboard.keys.DOWN_ARROW) {
                    canMove = false;
                }
                break;
            case keyboard.keys.DOWN_ARROW:
                if (this.lastKnownDirection === keyboard.keys.UP_ARROW) {
                    canMove = false;
                }
                break;
            case keyboard.keys.LEFT_ARROW:
                if (this.lastKnownDirection === keyboard.keys.RIGHT_ARROW) {
                    canMove = false;
                }
                break;
            case keyboard.keys.RIGHT_ARROW:
                if (this.lastKnownDirection === keyboard.keys.LEFT_ARROW) {
                    canMove = false;
                }
                break;
            default:
                break;
        }

        if (canMove) {
            this.direction = newDirection;
            this.dx = dx;
            this.dy = dy;
        }
    }

    eat = (food) => {
        if (this.x === food.x && this.y === food.y) {
            this.grow();
            return true;
        }
        else {
            return false;
        }
    }

    grow = () => {
        this.length++;
    }

    death = () => {
        let isDead = false;
                
        let x = this.x + this.dx * this.scale;
        let y = this.y + this.dy * this.scale;

        // check if future snake pos is out of bounds
        if (x < 0 || x >= this.canvasWidth ||
            y < 0 || y >= this.canvasHeight) {
            isDead = true;
        }

        // check if snake ate itself
        for (let i = 0; i < this.tail.length; i++) {
            let pos = this.tail[i];
            if (this.x === pos.x && this.y === pos.y) {
                isDead = true;
                break;
            }
        }

        if (this.isDead !== isDead) {
            this.isDead = isDead;
        }
        return isDead;
    }

    resurrect = () => {
        this.isDead = false;
        this.length = 0;
        this.tail = [];
    }

    getSnakeHead = () => {
        return new Point(this.x, this.y);
    }

    getSnakeLength = () => {
        return this.length;
    }

    setLastKnownDirection = () => {
        this.lastKnownDirection = this.direction;
    }
}