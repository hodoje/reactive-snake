import React, { useEffect, useState } from 'react';

import classes from './Countdown.module.css';

const Countdown = (props) => {
    const [counter, setCounter] = useState(3);

    useEffect(() => {
        let timer;
        if (counter > 0) { 
            timer = setTimeout(() => setCounter(counter - 1), 1000);
        }
        else {
            props.callback();
        }

        return () => {
            clearTimeout(timer);
        }
    }, [props, counter]);
    
      return (
        <div className={classes.Countdown}>
          <div>{counter}</div>
        </div>
      );
};

export default Countdown;