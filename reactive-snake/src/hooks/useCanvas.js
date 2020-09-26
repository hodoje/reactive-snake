import { useEffect, useRef } from 'react';

const useCanvas = (draw, options = {}) => {

    const { predraw, postdraw } = options;
    const canvasRef = useRef(null);

    useEffect(() => {
    
        const canvas = canvasRef.current;
        const context = canvas.getContext(options.context || '2d');
        let animationFrameId;
        
        // frame rate control
        const requestedFrameRate = options.frameRate;
        let frameRate;
        let now;
        let then;
        let elapsed;
        
        const render = (time) => {
            // request next frame
            animationFrameId = window.requestAnimationFrame(render);

            // calc elapsed time since the last loop 
            now = time;
            elapsed = now - then; 

            if (elapsed > frameRate) {
                then = now - (elapsed % frameRate);
                predraw(context, canvas);
                draw(context);
                postdraw(context);
            }
        }

        const startAnimating = (fps) => {
            frameRate = 1000 / fps;
            then = window.performance.now();
            render();
        }

        startAnimating(requestedFrameRate);
        
        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, [draw, options, predraw, postdraw]);

    return canvasRef;
};

export default useCanvas;