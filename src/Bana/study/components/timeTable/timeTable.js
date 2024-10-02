import React, { useState } from 'react';
import './TimeTable.css';

const TimeTable = () => {
    const [useIframe, setUseIframe] = useState(false); // Toggle for iframe

    const schedule = [
        { day: 'Monday', subject: 'Math', time: '9:00 AM - 10:30 AM' },
        { day: 'Tuesday', subject: 'Science', time: '11:00 AM - 12:30 PM' },
        // Add more timetable entries
    ];

    return (
        <div className="timetable-container">
            <h2 className="timetable-title">Study Time Table</h2>

            <div className="toggle-options">
                <button
                    className={`toggle-btn ${!useIframe ? 'active' : ''}`}
                    onClick={() => setUseIframe(false)}
                >
                    View Timetable
                </button>
                <button
                    className={`toggle-btn ${useIframe ? 'active' : ''}`}
                    onClick={() => setUseIframe(true)}
                >
                    Use wordkraft
                </button>
            </div>

            {useIframe ? (
                <div className="iframe-container">
                    <iframe
                        src="https://wordkraft.ai/ai-writer/interactive-study-planner-generator/"
                        title="Kittl Timetable Iframe"
                        className="kittl-iframe"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <div className="timetable">
                    <table>
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>Subject</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schedule.map((entry, index) => (
                                <tr key={index}>
                                    <td>{entry.day}</td>
                                    <td>{entry.subject}</td>
                                    <td>{entry.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default TimeTable;
