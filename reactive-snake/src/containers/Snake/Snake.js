import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import classes from './Snake.module.css';
import Canvas from '../../components/Canvas/Canvas';
import Point from '../../shared/point';
import * as actions from '../../store/actions/actions';
import { canvasSettings, figureStyles } from '../../shared/gameSettings';
import { randomLocationNearEdge, randomLocationNearMiddle } from '../../shared/utility';
import SnakeClass from '../../shared/snake';

const Snake = (props) => {    
    const gameOver = props.gameOver;
    const initialLoad = props.initialLoad;
    const speed = props.speed;
    const walls = props.walls;
    const snakee = new SnakeClass(canvasSettings.canvasWidth, canvasSettings.canvasHeight, canvasSettings.scale);
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
    let food = new Point(0, 0);
    const wallsMap = [];
    let pickLocationAttempt = 0;
    const pickLocationAttemptLimit = 3;
    
    const pickRandomLocation = useCallback(
        () => {
            const randomCol = Math.floor(Math.random() * cols);
            const randomRow = Math.floor(Math.random() * rows);
            return new Point(randomCol * scale, randomRow * scale);
        }, [cols, rows, scale]
    );

    const pickFoodLocationRandom = () => {
        return pickRandomLocation();
    }

    const checkIfFreeFoodLocation = (x, y) => {
        let free = true;
        let snakeHead = snakee.getSnakeHead();

        if (snakee.tail.find(part => part.x === x && part.y === y)) {
            free = false;
        } else if (wallsMap.find(w => w.x === x && w.y === y)) {
            free = false;
        } else if (snakeHead.x === x && snakeHead.y === y) {
            free = false;
        }

        return free;
    }

    const pickFoodLocationFromAvailableLocations = () => {
        let location = null;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                let x = col * scale;
                let y = row * scale;
                let okLocation = checkIfFreeFoodLocation(x, y);

                if (okLocation) {
                    location = new Point(x, y);
                    break;
                }
            }
        }
        return location;
    }

    const pickFoodLocation = useCallback(
        (ctx) => {
            let newPos;
            // we want to pick a random location if that is possible since it is faaster
            // but if we get repeated hits on the snake body, we want to use a slower but 100% successful method
            if (pickLocationAttempt < pickLocationAttemptLimit) {
                newPos = pickFoodLocationRandom();
            }
            else {
                newPos = pickFoodLocationFromAvailableLocations();
            }

            // if it can't find the new pos it is game over
            if (newPos === null) {
                return false;
            }

            if (!checkIfFreeFoodLocation(newPos.x, newPos.y)) {
                pickLocationAttempt++;
                pickFoodLocation(ctx);
            }
            else {
                food.x = newPos.x;
                food.y = newPos.y;
                // eslint-disable-next-line react-hooks/exhaustive-deps
                pickLocationAttempt = 0;
            }

        }, [food, canvasWidth, canvasHeight, scale, snakee]
    );

    const setFoodSpawnPoint = useCallback(
        (ctx) => {
            // this can be improved with tracking all the valid points where it can spawn
            // and choosing at random on of those
            if (pickFoodLocation(ctx)) {
                endGame();
            }
        }, [pickFoodLocation, endGame]
    );

    const pickWallsLocation = useCallback(
        () => {
            const numberOfWalls = cols * rows * (walls.walls / 100);
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
                    setFoodSpawnPoint(ctx);
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
            setFoodSpawnPoint();
        }, [setFoodSpawnPoint, pickWallsLocation]    
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