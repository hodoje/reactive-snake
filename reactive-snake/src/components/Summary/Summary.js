import React from 'react';

import classes from './Summary.module.css';

const summary = () => {

    const classList = [classes.Summary, classes['Summary-Slide-Out']];

    return (
        <div className={classList.join(' ')}>

        </div>
    );
};

export default summary;