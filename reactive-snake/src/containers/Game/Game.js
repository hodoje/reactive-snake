import React from 'react';

import classes from './Game.module.css';

import Snake from '../../containers/Snake/Snake';
import Summary from '../../components/Summary/Summary';

const Game = () => {
    return (
        <div className={classes.Game}>
            <Summary/>
            <Snake/>
        </div>
    );
};

export default Game;