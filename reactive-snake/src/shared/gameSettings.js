// this can be changed to track number of columns and then set the scale
// ofc you should set these settings to give a round number of either columns
// when it comes to current shape of the settings or round number for scale
export const canvasSettings = Object.freeze(
    {
        canvasWidth: 700,
        canvasHeight: 700,
        scale: 35,
        stroke: 'white'
    }
);

export const figureStyles = Object.freeze(
    {
        head: {
            fill: '#93FF19',
            stroke: 'black'
        },
        body: {
            fill: 'white',
            stroke: 'black'
        },
        food: {
            fill: '#FF0080',
            stroke: 'black'
        },
        wall: {
            fill: 'black',
            stroke: 'black'
        }
    }
);

export const gameModes = Object.freeze(
    {
        easy: {
            name: 'EASY',
            value: 1
        },
        medium: {
            name: 'MEDIUM',
            value: 2
        },
        hard: {
            name: 'HARD',
            value: 3
        }
    }
);

export const speedSettings = Object.freeze(
    {
        easy: {
            speed: 8,
            points: 15
        },
        medium: {
            speed: 10,
            points: 30
        },
        hard: {
            speed: 13,
            points: 50
        }
    }
);

export const wallSettings = Object.freeze(
    {
        easy: {
            walls: 0,
            points: 0
        },
        medium: {
            walls: 3,
            points: 100
        },
        hard: {
            walls: 6,
            points: 150
        }
    }
);