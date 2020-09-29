import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Snake.module.css';
import Canvas from '../../components/Canvas/Canvas';
import Food from './Models/food';
import SnakeClass from './Models/snake';
import * as actions from '../../store/actions/actions';
import { canvasSettings, figureStyles } from '../../shared/gameSettings';
import { randomLocationNearEdge, randomLocationNearMiddle } from '../../shared/utility';

const Snake = () => {
    const gameOver = useSelector(state => state.game.gameOver);
    const initialLoad = useSelector(state => state.game.initialLoad);
    const speed = useSelector(state => state.game.speed);
    const walls = useSelector(state => state.game.walls);
    const leftControl = useSelector(state => state.controls.leftControl);
    const upControl = useSelector(state => state.controls.upControl);
    const rightControl = useSelector(state => state.controls.rightControl);
    const downControl = useSelector(state => state.controls.downControl);
    const snakee = new SnakeClass(
        canvasSettings.canvasWidth, 
        canvasSettings.canvasHeight, 
        canvasSettings.scale,
        leftControl, 
        upControl, 
        rightControl, 
        downControl);
    const dispatch = useDispatch();

    const endGame = useCallback(
        () => {
            dispatch(actions.endGame());
        }, [dispatch]
    );

    const eatFood = useCallback(
        () => {
            dispatch(actions.eatFood())
        }, [dispatch]
    );

    const frameRate = speed.speed;
    const canvasWidth = canvasSettings.canvasWidth;
    const canvasHeight = canvasSettings.canvasHeight;
    const scale = canvasSettings.scale;
    const cols = Math.floor(canvasWidth / scale);
    const rows = Math.floor(canvasHeight / scale);
    let food = new Food(cols, rows, scale, endGame);
    const wallsMap = [];

    const pickWallsLocation = useCallback(
        () => {
            const percentOfWalls = (walls.walls / 100);
            const numberOfWalls = cols * rows * percentOfWalls;
            for (let i = 0; i < numberOfWalls; i++) {
                const middle = Math.random() > 0.5;
                let point;

                if (middle) {
                    point = randomLocationNearMiddle(canvasWidth, canvasHeight, scale);
                }
                else {
                    point = randomLocationNearEdge(canvasWidth, canvasHeight, scale);
                }

                if (wallsMap.findIndex(w => w.x === point.x && w.y === point.y) === -1) {
                    wallsMap.push(point);
                }
                else {
                    i--;
                    continue;
                }
            }
        }, [cols, rows, walls, wallsMap, canvasWidth, canvasHeight, scale]
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

    const drawWalls = (ctx) => {
        ctx.fillStyle = 'black';
        for (let i = 0; i < wallsMap.length; i++) {
            ctx.fillRect(wallsMap[i].x, wallsMap[i].y, scale, scale);
        }
    }
    
    const snakeGameLifecycle = (ctx) => {
        if (initialLoad) {
            if (!gameOver) {
                drawWalls(ctx);
                // draw the snake
                if (snakee.death(wallsMap)) {
                    snakee.show(ctx);
                    endGame();
                    return;
                }
                snakee.update();
                snakee.show(ctx);
                
                // check if snake is eating
                if (snakee.eat(food, eatFood)) {
                    food.setFoodSpawnPoint(ctx, snakee.getSnakeHead(), snakee.getSnakeTail(), wallsMap);
                }
                
                // draw the food
                ctx.fillStyle = figureStyles.food.fill;
                ctx.fillRect(food.x, food.y, scale, scale);
            }
        }
    }

    const draw = (ctx) => {
        // draw the grid
        drawVerticalGridLines(ctx, canvasSettings.stroke);
        drawHorizontalGridLines(ctx, canvasSettings.stroke);
        snakeGameLifecycle(ctx);
    }

    const setup = useCallback(
        () => {
            pickWallsLocation();
            food.setFoodSpawnPoint(null, snakee.getSnakeHead(), snakee.getSnakeTail(), wallsMap);
        }, [pickWallsLocation, snakee, wallsMap, food]    
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

export default React.memo(Snake, (props, nextProps) => {
    return props.gameOver === nextProps.gameOver
});