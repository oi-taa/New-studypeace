import React, { useState } from 'react';
import './NoteTaking.css';

const NoteTaking = () => {
    const [note, setNote] = useState('');
    const [useIframe, setUseIframe] = useState(false); // Toggle between manual and iframe note-taking

    const handleSave = () => {
        localStorage.setItem('note', note);
        alert('Note saved!');
    };

    return (
        <div className="note-taking-container">
            <h2 className="note-taking-title">Note Taking</h2>

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
                    Use RemNote
                </button>
            </div>

            {useIframe ? (
                <div className="iframe-container">
                    <iframe
                        src="https://www.remnote.com/"
                        title="RemNote Iframe"
                        className="remnote-iframe"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <div className="manual-note-taking">
                    <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Write your notes here..."
                        className="note-taking-textarea"
                    ></textarea>
                    <button onClick={handleSave} className="save-btn">Save Note</button>
                </div>
            )}
        </div>
    );
};

export default NoteTaking;
