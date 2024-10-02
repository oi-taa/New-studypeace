import React, { useState } from 'react';
import './MindMap.css';

const MindMap = () => {
    const [useIframe, setUseIframe] = useState(false); // State to toggle between iframe and manual input
    const [mindmap, setMindmap] = useState('');

    const handleMindmapChange = (e) => {
        setMindmap(e.target.value);
    };

    return (
        <div className="mind-map-container">
            <h2 className="mind-map-title">Create Your Mind Map</h2>

            <div className="toggle-options">
                <button
                    className={`toggle-btn ${useIframe ? '' : 'active'}`}
                    onClick={() => setUseIframe(false)}
                >
                    Manual Mode
                </button>
                <button
                    className={`toggle-btn ${useIframe ? 'active' : ''}`}
                    onClick={() => setUseIframe(true)}
                >
                    Use mapify
                </button>
            </div>

            {useIframe ? (
                <div className="iframe-container">
                    <iframe
                        src="https://mapify.so/"
                        title="MindMup Iframe"
                        className="mindmup-iframe"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <div className="manual-input">
                    <textarea
                        value={mindmap}
                        onChange={handleMindmapChange}
                        placeholder="Start creating your mind map manually..."
                        className="mind-map-textarea"
                    ></textarea>
                </div>
            )}
        </div>
    );
};

export default MindMap;
