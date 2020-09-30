import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Snake.module.css';
import Canvas from '../../components/Canvas/Canvas';
import Food from './Models/food';
import SnakeClass from './Models/snake';
import * as actions from '../../store/actions/actions';
import { generalSettings, figureStyles } from '../../shared/gameSettings';
import { randomLocationNearEdge, randomLocationNearMiddle } from '../../shared/utility';
import background from '../../assets/img/background.png';

const Snake = () => {
    const gameOver = useSelector(state => state.game.gameOver);
    const initialLoad = useSelector(state => state.game.initialLoad);
    const speed = useSelector(state => state.game.speed);
    const walls = useSelector(state => state.game.walls);
    const leftControl = useSelector(state => state.controls.leftControl);
    const upControl = useSelector(state => state.controls.upControl);
    const rightControl = useSelector(state => state.controls.rightControl);
    const downControl = useSelector(state => state.controls.downControl);
    const dispatch = useDispatch();

    const endGame = useCallback(
        () => {
            dispatch(actions.endGame());
        }, [dispatch]
    );

    const eatFood = useCallback(
        () => {
            dispatch(actions.eatFood());
        }, [dispatch]
    );

    const eatBonusFood = useCallback(
        () => {
            dispatch(actions.eatBonusFood());
        }, [dispatch]
    );

    const frameRate = speed.speed;
    const canvasWidth = generalSettings.canvasWidth;
    const canvasHeight = generalSettings.canvasHeight;
    const scale = generalSettings.scale;
    const cols = Math.floor(canvasWidth / scale);
    const rows = Math.floor(canvasHeight / scale);
    const wallsMap = [];
    const snakee = new SnakeClass(
        generalSettings.canvasWidth, 
        generalSettings.canvasHeight, 
        generalSettings.scale,
        leftControl, 
        upControl, 
        rightControl, 
        downControl);
    const food = new Food(
        cols, 
        rows, 
        scale, 
        figureStyles.food.fill, 
        figureStyles.food.stroke, 
        endGame);

    const bonusFood = new Food(
        cols, 
        rows, 
        scale, 
        figureStyles.bonusFood.fill, 
        figureStyles.bonusFood.stroke, 
        endGame);
    const bonusFoodSpawnInterval = generalSettings.bonusFoodSpawnInterval;
    const bonusFoodSpawnDuration = generalSettings.bonusFoodSpawnDuration;
    let start;
    let bonusFoodTime;
    let isBonusFoodSpawned = false;

    const resetBonusFood = useCallback(
        () => {
            bonusFood.x = Number.MIN_SAFE_INTEGER;
            bonusFood.y = Number.MIN_SAFE_INTEGER;
            // eslint-disable-next-line react-hooks/exhaustive-deps
            isBonusFoodSpawned = false;
            // eslint-disable-next-line react-hooks/exhaustive-deps
            start = Date.now();
        }, [bonusFood, isBonusFoodSpawned, start]
    );

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

    // const drawHorizontalGridLines = (ctx, strokeStyle) => {
    //     ctx.beginPath(); 
    //     for (let y = 0; y <= canvasHeight; y += scale) {
    //         ctx.moveTo(0, y);
    //         ctx.lineTo(canvasWidth, y);
    //     }
    //     ctx.strokeStyle = strokeStyle;
    //     ctx.stroke();
    // }

    // const drawVerticalGridLines = (ctx, strokeStyle) => {
    //     ctx.beginPath(); 
    //     for (let x = 0; x <= canvasWidth; x += scale) {
    //         ctx.moveTo(x, 0);
    //         ctx.lineTo(x, canvasHeight);
    //     }
    //     ctx.strokeStyle = strokeStyle;
    //     ctx.stroke(); 
    // }

    const drawWalls = (ctx) => {
        ctx.shadowBlur = 10;
        ctx.shadowColor = figureStyles.wall.fill;
        ctx.fillStyle = figureStyles.wall.fill;
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
                    endGame();
                    return;
                }
                snakee.update();
                snakee.show(ctx);
                
                // check if snake ate food
                if (snakee.eat(food, eatFood)) {
                    food.setFoodSpawnPoint(snakee.getSnakeHead(), snakee.getSnakeTail(), wallsMap);
                }

                // check if snake ate bonus food
                if (snakee.eat(bonusFood, eatBonusFood)) {
                    resetBonusFood();
                }

                // draw the food
                food.show(ctx);

                // should draw bonus food
                let now = Date.now();
                if (now - start > bonusFoodSpawnInterval) {
                    if (!isBonusFoodSpawned) {
                        bonusFood.setFoodSpawnPoint(snakee.getSnakeHead(), snakee.getSnakeTail(), wallsMap);
                        isBonusFoodSpawned = true;
                        bonusFoodTime = Date.now();
                    }
                }
                if (isBonusFoodSpawned) {
                    if (now - bonusFoodTime > bonusFoodSpawnDuration) {
                        resetBonusFood()
                        bonusFoodTime = now;
                    }
                    bonusFood.show(ctx);
                }

            }
        }
    }

    const draw = (ctx) => {
        snakeGameLifecycle(ctx);
    }

    const setup = useCallback(
        () => {
            pickWallsLocation();
            food.setFoodSpawnPoint(snakee.getSnakeHead(), snakee.getSnakeTail(), wallsMap);
            resetBonusFood();
        }, [pickWallsLocation, snakee, wallsMap, food, resetBonusFood]    
    );

    // const backgroundDraw = (ctx) => {
    //     // draw the grid
    //     drawVerticalGridLines(ctx, generalSettings.stroke);
    //     drawHorizontalGridLines(ctx, generalSettings.stroke);
    // }

    useEffect(() => {
        document.removeEventListener('keydown', snakee.getDirection);
        document.addEventListener('keydown', snakee.getDirection);
        return () => {
            document.removeEventListener('keydown', snakee.getDirection);
        }
    }, [snakee.getDirection]);

    useEffect(() => {
        setup();        
    }, [setup])

    return (
        <div className={classes.Snake}>
            {/* <Canvas draw={backgroundDraw} width={canvasWidth} height={canvasHeight} frameRate={frameRate}/> */}
            {/* using image as background for better performance */}
            <img src={background} alt=''/>
            <Canvas draw={draw} width={canvasWidth} height={canvasHeight} frameRate={frameRate}/>
        </div>
    );
};

export default Snake;