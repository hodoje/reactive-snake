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
    
    const pickFoodLocation = useCallback(
        () => {
            let cols = Math.floor(canvasWidth / scale);
            let rows = Math.floor(canvasHeight / scale);
            let randomCol = Math.floor(Math.random() * cols);
            let randomRow = Math.floor(Math.random() * rows);
            food.x = randomCol * scale;
            food.y = randomRow * scale;
        }, [food, canvasWidth, canvasHeight, scale]
    );

    const deleteFood = useCallback(
        (ctx) => {
            ctx.clearRect(food.x, food.y, scale, scale);
        }, [food, scale]
    );

    const setFoodSpawnPoint = useCallback(
        (ctx) => {
            // this can be improved with tracking all the valid points where it can spawn
            // and choosing at random on of those
            pickFoodLocation();
            while (snakee.tail.find(part => part.x === food.x && part.y === food.y)) {
                deleteFood();
                pickFoodLocation();
                break;
            }
        }, [pickFoodLocation, deleteFood, snakee, food]
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
            snakee.update();
            // draw the snake
            if (snakee.death()) {
                console.log('death');
                gameOver = true;
            }
            snakee.show(ctx);
            
            // check if snake is eating
            if (snakee.eat(food)) {
                setFoodSpawnPoint();
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