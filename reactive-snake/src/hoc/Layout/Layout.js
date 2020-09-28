import React from 'react';

import classes from './Layout.module.css';
import Game from '../../containers/Game/Game';

const Layout = () => {
    return (
        <div className={classes.Layout}>
            <Game/>
        </div>
    );
};

export default Layout;