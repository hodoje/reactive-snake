import React from 'react';

import useCanvas from '../../hooks/useCanvas';

const _predraw = (context, canvas) => {
    context.save();    
    // we can resize the canvas here
    const { width, height } = context.canvas;
    context.clearRect(0, 0, width, height);
}

const _postdraw = (context) => {
    context.restore();
}

const Canvas = (props) => {

    // we take these properties from the parent so this Canvas is reusable
    const { draw, frameRate, predraw=_predraw, postdraw=_postdraw, width, height } = props
    // we will use our custom useCanvas hook to set up the canvas and return the ref to it
    const canvasRef = useCanvas(draw, { predraw, postdraw, frameRate });

    return (
        <canvas width={width} height={height} ref={canvasRef}/>        
    );
};

export default Canvas;