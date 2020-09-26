import { keyboard, distance } from '../../shared/utility';
import Point from './point';

export default class SnakeClass {
    constructor(canvasWidth, canvasHeight, scale) {
        this.x = 0;
        this.y = 0;
        // initial state is that the snake moves to the right
        this.direction = keyboard.keys.RIGHT_ARROW;
        this.dx = 1;
        this.dy = 0;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.scale = scale;
        // tracks the number of history parts (tail elements)
        this.length = 0;
        // tracks the history of snake's movement (if it has eaten any food)
        this.tail = [];
    }

    update = () => {
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

    setDirection = (x, y, newDirection) => {
        // restricting movement in opposite direction
        let canMove = true;

        switch(newDirection) {
            case keyboard.keys.UP_ARROW:
                if (this.direction === keyboard.keys.DOWN_ARROW) {
                    canMove = false;
                }
                break;
            case keyboard.keys.DOWN_ARROW:
                if (this.direction === keyboard.keys.UP_ARROW) {
                    canMove = false;
                }
                break;
            case keyboard.keys.LEFT_ARROW:
                if (this.direction === keyboard.keys.RIGHT_ARROW) {
                    canMove = false;
                }
                break;
            case keyboard.keys.RIGHT_ARROW:
                if (this.direction === keyboard.keys.LEFT_ARROW) {
                    canMove = false;
                }
                break;
            default:
                break;
        }

        if (canMove) {
            this.direction = newDirection;
            this.dx = x;
            this.dy = y;
        }
    }

    eat = (food) => {
        let dist = distance(this.x, this.y, food.x, food.y);
        if (dist < 1) {
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
                
        // check if future snake pos is out of bounds
        if (this.x + this.scale === this.canvasWidth || this.x + this.dx === -1 ||
            this.y + this.scale === this.canvasHeight || this.y + this.dy === -1) {
            isDead = true;
        }

        // check if snake ate itself
        for (let i = 0; i < this.tail.length; i++) {
            let pos = this.tail[i];
            let dist = distance(this.x, this.y, pos.x, pos.y);
            if (dist < 1) {
                // this.length = 0;
                // this.tail = [];
                isDead = true;
                break;
            }
        }

        return isDead;
    }
}