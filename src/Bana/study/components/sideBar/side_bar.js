//Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setActiveTab }) => {
    return (
        <div className="sidebar">
            <ul>
                <li onClick={() => setActiveTab('dashboard')}>Dashboard</li>
                <li onClick={() => setActiveTab('subjects')}>Subjects</li>
                <li onClick={() => setActiveTab('materials')}>Study Materials</li>
                <li onClick={() => setActiveTab('timetable')}>Time Table</li>
                <li onClick={() => setActiveTab('tools')}>Tools</li>
                <li onClick={() => setActiveTab('market')}>MarketPlace</li>
                <li onClick={() => setActiveTab('test')}>Test</li>
                <li onClick={() => setActiveTab('assignment')}>Assignment</li>

            </ul>
        </div>
    );
};

export default Sidebar;
