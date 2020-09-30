import { keyboard } from '../../../shared/utility';
import { figureStyles } from '../../../shared/gameSettings';
import Point from './point';

export default class SnakeClass {
    constructor(
        canvasWidth, 
        canvasHeight, 
        scale,
        leftControl, 
        upControl, 
        rightControl, 
        downControl) {
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
        this.dx = 1;
        this.dy = 0;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.scale = scale;
        // tracks the number of history parts (tail elements)
        this.length = 0;
        // tracks the history of snake's movement (if it has eaten any food)
        this.tail = [];
        this.isDead = false;
        this.leftControl = leftControl;
        this.upControl = upControl;
        this.rightControl = rightControl;
        this.downControl = downControl;
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
        ctx.shadowBlur = 10;
        ctx.shadowColor = figureStyles.body.fill;
        ctx.fillStyle = figureStyles.body.fill;
        for (let i = 0; i < this.tail.length; i++) {
        
            ctx.fillRect(this.tail[i].x, this.tail[i].y, this.scale, this.scale);
        }

        // draw the head
        ctx.shadowBlur = 10;
        ctx.shadowColor = figureStyles.head.fill;
        ctx.fillStyle = figureStyles.head.fill;        
        ctx.fillRect(this.x, this.y, this.scale, this.scale);
    }

    getDirection = (event) => {
        if (!this.isDead) {
            const key = event.keyCode;
            switch(key) {
                case this.upControl:
                    this.setDirection(0, -1, key);
                    break;
                case this.downControl:
                    this.setDirection(0, 1, key);
                    break;
                case this.leftControl:
                    this.setDirection(-1, 0, key);
                    break;
                case this.rightControl:
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
            case this.upControl:
                if (this.lastKnownDirection === this.downControl) {
                    canMove = false;
                }
                break;
            case this.downControl:
                if (this.lastKnownDirection === this.upControl) {
                    canMove = false;
                }
                break;
            case this.leftControl:
                if (this.lastKnownDirection === this.rightControl) {
                    canMove = false;
                }
                break;
            case this.rightControl:
                if (this.lastKnownDirection === this.leftControl) {
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

    eat = (food, eatFood) => {
        if (this.x === food.x && this.y === food.y) {
            this.grow();
            eatFood();
            return true;
        }
        else {
            return false;
        }
    }

    grow = () => {
        this.length++;
    }

    deathByOutOfBounds = (x, y) => {
        // check if future snake pos is out of bounds
        if (x < 0 || x >= this.canvasWidth ||
            y < 0 || y >= this.canvasHeight) {
            this.isDead = true;
            return true;
        }
    }

    deathByWalls = (x, y, walls) => {
        for (let i = 0; i < walls.length; i++) {
            const wall = walls[i];
            if (x === wall.x && y === wall.y) {
                this.isDead = true;
                return true;
            }
        }
    }

    deathBySuicide = (x, y) => {
        // check if snake ate itself
        for (let i = 0; i < this.tail.length; i++) {
            const pos = this.tail[i];
            if (x === pos.x && y === pos.y) {
                this.isDead = true;
                return true;
            }
        }
    }

    death = (walls) => {            
        let x = this.x + this.dx * this.scale;
        let y = this.y + this.dy * this.scale;

        if (this.deathByOutOfBounds(x, y)) {
            return true;
        }

        if (this.deathByWalls(x, y, walls)) {
            return true;
        }

        if (this.deathBySuicide(x, y)) {
            return true;
        }

        return false;
    }

    getSnakeHead = () => {
        return new Point(this.x, this.y);
    }

    getSnakeTail = () => {
        return this.tail;
    }

    setLastKnownDirection = () => {
        this.lastKnownDirection = this.direction;
    }
}