import React, { useRef, useState } from 'react';
import './Whiteboard.css';

const Whiteboard = () => {
    const canvasRef = useRef(null);
    const [drawing, setDrawing] = useState(false);
    const [useIframe, setUseIframe] = useState(false); // Toggle for iframe

    const startDrawing = () => setDrawing(true);
    const stopDrawing = () => setDrawing(false);

    const draw = (event) => {
        if (!drawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#34495e';
        ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    };

    return (
        <div className="whiteboard-container">
            <h2 className="whiteboard-title">Whiteboard</h2>

            <div className="toggle-options">
                <button
                    className={`toggle-btn ${useIframe ? '' : 'active'}`}
                    onClick={() => setUseIframe(false)}
                >
                    Manual Whiteboard
                </button>
                <button
                    className={`toggle-btn ${useIframe ? 'active' : ''}`}
                    onClick={() => setUseIframe(true)}
                >
                    Use Witeboard
                </button>
            </div>

            {useIframe ? (
                <div className="iframe-container">
                    <iframe
                        src="https://witeboard.com/"
                        title="Witeboard Iframe"
                        className="witeboard-iframe"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <div className="manual-whiteboard">
                    <canvas
                        ref={canvasRef}
                        onMouseDown={startDrawing}
                        onMouseUp={stopDrawing}
                        onMouseMove={draw}
                        onMouseLeave={stopDrawing}
                        width="500"
                        height="500"
                        className="whiteboard-canvas"
                    ></canvas>
                </div>
            )}
        </div>
    );
};

export default Whiteboard;
