import React, { useState } from 'react';
import MindMapComponent from "./Components/MindMap/map";
import NoteTakingComponent from "./Components/NoteTaking/note";
import WhiteBoardComponent from "./Components/whiteboard/board";
import './tools-style.css';

const ChooseTools = () => {
    const [activeTools, setActiveTools] = useState(''); // State to track active tool

    const renderTools = () => {
        switch (activeTools) {
            case 'map':
                return <MindMapComponent />;
            case 'note':
                return <NoteTakingComponent />;
            case 'whiteboard':
                return <WhiteBoardComponent />;
            default:
                return <p>Select a tool to get started!</p>; // Default message when no tool is selected
        }
    };

    return (
        <div className="choose-tools-container">
            <h1 className="tools-title">Choose Your Tool</h1>
            <div className="tools-options">
                <div
                    className={`tools-option ${activeTools === 'map' ? 'selected' : ''}`}
                    onClick={() => setActiveTools('map')}
                >
                    <h2>Mind Map</h2>
                    <p>Organize your thoughts with our interactive mind mapping tool.</p>
                </div>
                <div
                    className={`tools-option ${activeTools === 'note' ? 'selected' : ''}`}
                    onClick={() => setActiveTools('note')}
                >
                    <h2>Note Taking</h2>
                    <p>Take notes seamlessly during your study sessions.</p>
                </div>
                <div
                    className={`tools-option ${activeTools === 'whiteboard' ? 'selected' : ''}`}
                    onClick={() => setActiveTools('whiteboard')}
                >
                    <h2>Whiteboard</h2>
                    <p>Sketch, brainstorm, and visualize your ideas with our whiteboard.</p>
                </div>
            </div>
            <div className="selected-tools-content">
                {renderTools()}
            </div>
        </div>
    );
};

export default ChooseTools;
