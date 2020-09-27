import React, { useEffect, useCallback } from 'react';

import classes from './Snake.module.css';
import Canvas from '../../components/Canvas/Canvas';
import SnakeClass from './snakee';
import Point from './point';

const Snake = () => {
    let gameOver = false;
    const frameRate = 10;   // frame rate is set to 10 because it gives the game a genuine feel of the snake game
    const canvasWidth = 600;
    const canvasHeight = 600;
    const scale = 30;
    let food = new Point(0, 0);
    let snakee = new SnakeClass(canvasWidth, canvasHeight, scale);
    let pickLocationAttempt = 0;
    let pickLocationAttemptLimit = 3;
    
    const pickFoodLocationRandom = (cols, rows) => {
        let randomCol = Math.floor(Math.random() * cols);
        let randomRow = Math.floor(Math.random() * rows);
        return new Point(randomCol * scale, randomRow * scale);
    }

    const pickFoodLocationFromAvailableLocations = (cols, rows) => {
        let location = null;
        let snakeHead = snakee.getSnakeHead();
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                let x = col * scale;
                let y = row * scale;
                if (snakee.tail.find(part => part.x === x && part.y === y) || (snakeHead.x === x && snakeHead.y === y)) {
                    continue;
                }
                location = new Point(x, y);
            }
        }
        return location;
    }

    const deleteFood = useCallback(
        (ctx, x, y, isBody) => {
            ctx.clearRect(x, y, scale, scale);
            if (isBody) {
                ctx.fillStyle = '#93FF19';
            }
            else {
                ctx.fillStyle = 'white';
            }
            ctx.fillRect(x, y, scale, scale);
        }, [scale]
    );

    const pickFoodLocation = useCallback(
        (ctx) => {
            let cols = Math.floor(canvasWidth / scale);
            let rows = Math.floor(canvasHeight / scale);
            let newPos;

            // we want to pick a random location if that is possible since it is faaster
            // but if we get repeated hits on the snake body, we want to use a slower but 100% successful method
            if (pickLocationAttempt < pickLocationAttemptLimit) {
                newPos = pickFoodLocationRandom(cols, rows);
            }
            else {
                newPos = pickFoodLocationFromAvailableLocations(cols, rows);
            }

            // if it can't find the new pos it is game over
            if (newPos === null) {
                return false;
            }

            // check food spawned on the snake or not
            let snakeHead = snakee.getSnakeHead();
            if (snakee.tail.find(part => part.x === newPos.x && part.y === newPos.y) || (snakeHead.x === newPos.x && snakeHead.y === newPos.y)) {
                // check if food spawned on the body (and that also gives us if it spawned on the body)
                // which let us determine if we will repaint the spot as a head or a body
                let isBody = snakeHead.x === newPos.x && snakeHead.y === newPos.y;
                pickLocationAttempt++;
                deleteFood(ctx, newPos.x, newPos.y, isBody);
                pickFoodLocation(ctx);
            }
            else {
                food.x = newPos.x;
                food.y = newPos.y;
                // eslint-disable-next-line react-hooks/exhaustive-deps
                pickLocationAttempt = 0;
            }

        }, [food, canvasWidth, canvasHeight, scale, snakee, deleteFood]
    );

    const setFoodSpawnPoint = useCallback(
        (ctx) => {
            // this can be improved with tracking all the valid points where it can spawn
            // and choosing at random on of those
            if (pickFoodLocation(ctx)) {
                gameOver = true;
            }
        }, [pickFoodLocation]
    );

    const drawHorizontalGridLines = (ctx, strokeStyle) => {
        ctx.beginPath(); 
        for (let y = 0; y <= canvasHeight; y += scale) {
            ctx.moveTo(0, y);
            ctx.lineTo(canvasWidth, y);
        }
        ctx.strokeStyle = strokeStyle;
        ctx.stroke();
    }

    const drawVerticalGridLines = (ctx, strokeStyle) => {
        ctx.beginPath(); 
        for (let x = 0; x <= canvasWidth; x += scale) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvasHeight);
        }
        ctx.strokeStyle = strokeStyle;
        ctx.stroke(); 
    }
    
    const snakeGameLifecycle = (ctx) => {
        if (!gameOver) {
            // draw the snake
            if (snakee.death()) {
                console.log('death');
                gameOver = true;
                snakee.show(ctx);
                return;
            }
            snakee.update();
            snakee.show(ctx);
            
            // check if snake is eating
            if (snakee.eat(food)) {
                setFoodSpawnPoint(ctx);
            }
            // draw the food
            ctx.fillStyle = '#FF0080';
            ctx.fillRect(food.x, food.y, scale, scale);
        }
        else {
            snakee.show(ctx);
        }
    }

    const draw = (ctx) => {
        // draw the grid
        drawVerticalGridLines(ctx, 'rgb(255,255,255)');
        drawHorizontalGridLines(ctx, 'rgb(255,255,255)');
        snakeGameLifecycle(ctx);
    }

    const setup = useCallback(
        () => {       
            setFoodSpawnPoint();
        }, [setFoodSpawnPoint]    
    );

    useEffect(() => {
        document.addEventListener('keydown', snakee.getDirection);

        setup();

        return () => {
            document.removeEventListener('keydown', snakee.getDirection);
        }
    }, [setup, snakee.getDirection]);

    return (
        <div className={classes.Snake}>
            <Canvas draw={draw} width={canvasWidth} height={canvasHeight} frameRate={frameRate}/>
        </div>
    );
};

export default Snake;