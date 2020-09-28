import Point from '../Models/point';

export default class Food {
    constructor(cols, rows, scale, triggerEndGame) {
        this.x = 0;
        this.y = 0;
        this.pickLocationAttempt = 0;
        this.pickLocationAttemptLimit = 3;
        this.cols = cols;
        this.rows = rows;
        this.scale = scale;
        this.triggerEndGame = triggerEndGame;
    }

    pickFoodLocationRandom = () => {
        const randomCol = Math.floor(Math.random() * this.cols);
        const randomRow = Math.floor(Math.random() * this.rows);
        return new Point(randomCol * this.scale, randomRow * this.scale);
    }

    checkIfIsOnTail = (x, y, snakeTail) => {
        let isOnSnakeTail = false;
        for (let i = 0; i < snakeTail.length; i++) {
            let part = snakeTail[i];
            if (part.x === x && part.y === y) {
                isOnSnakeTail = true;
                break;
            }
        }
        return isOnSnakeTail;
    }

    checkIfIsOnWall = (x, y, wallsMap) => {
        let isOnWall = false;
        for (let i = 0; i < wallsMap.length; i++) {
            let wall = wallsMap[i];
            if (wall.x === x && wall.y === y) {
                isOnWall = true;
                break;
            }
        }
        return isOnWall;
    }

    checkIfIsOnHead = (x, y, snakeHead) => {
        return snakeHead.x === x && snakeHead.y === y;   
    }

    checkIfFreeFoodLocation = (x, y, snakeHead, snakeTail, wallsMap) => {
        let free = true;

        if (this.checkIfIsOnTail(x, y, snakeTail)) {
            free = false;
        } else if (this.checkIfIsOnWall(x, y, wallsMap)) {
            free = false;
        } else if (this.checkIfIsOnHead(x, y, snakeHead)) {
            free = false;
        }

        return free;
    }

    pickFoodLocationFromAvailableLocations = (snakeHead, snakeTail, wallsMap) => {
        let location = null;

        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                let x = col * this.scale;
                let y = row * this.scale;
                let okLocation = this.checkIfFreeFoodLocation(x, y, snakeHead, snakeTail, wallsMap);

                if (okLocation) {
                    location = new Point(x, y);
                    break;
                }
            }
        }
        return location;
    }

    pickFoodLocation = (ctx, snakeHead, snakeTail, wallsMap) => {
        let newPos;
        // we want to pick a random location if that is possible since it is faaster
        // but if we get repeated hits on the snake body, we want to use a slower but 100% successful method
        if (this.pickLocationAttempt < this.pickLocationAttemptLimit) {
            newPos = this.pickFoodLocationRandom();
        }
        else {
            newPos = this.pickFoodLocationFromAvailableLocations(snakeHead, snakeTail, wallsMap);
        }

        // if it can't find the new pos it is game over
        if (newPos === null) {
            return false;
        }

        if (!this.checkIfFreeFoodLocation(newPos.x, newPos.y, snakeHead, snakeTail, wallsMap)) {
            this.pickLocationAttempt++;
            this.pickFoodLocation(ctx, snakeHead, snakeTail, wallsMap);
        }
        else {
            this.x = newPos.x;
            this.y = newPos.y;
            // eslint-disable-next-line react-hooks/exhaustive-deps
            this.pickLocationAttempt = 0;
        }
    }

    setFoodSpawnPoint = (ctx, snakeHead, snakeTail, wallsMap) => {
        if (this.pickFoodLocation(ctx, snakeHead, snakeTail, wallsMap)) {
            this.triggerEndGame();
        }
    }
}