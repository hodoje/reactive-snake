import React from 'react';

import classes from './Layout.module.css';
import Menu from '../../containers/Menu/Menu';
import Game from '../../containers/Game/Game';

const layout = () => {
    return (
        <div className={classes.Layout}>
            <Menu/>
            <Game/>
        </div>
    );
};

export default layout;