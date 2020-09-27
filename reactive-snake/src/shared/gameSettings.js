export const canvasSettings = Object.freeze(
    {
        canvasWidth: 600,
        canvasHeight: 600,
        scale: 30,
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
        easy: 'EASY',
        medium: 'MEDIUM',
        hard: 'HARD'
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
            walls: 5,
            points: 150
        }
    }
);