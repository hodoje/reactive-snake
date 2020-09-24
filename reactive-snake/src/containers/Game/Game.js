import React from 'react';

import classes from './Game.module.css';

import Snake from '../../containers/Snake/Snake';
import Summary from '../../components/Summary/Summary';

const game = () => {
    return (
        <div className={classes.Game}>
            <Summary positionClass={classes.Top}/>
            <Snake positionClass={classes.Bottom}/>
        </div>
    );
};

export default game;