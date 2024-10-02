// TestSeries.js
import React from 'react';
import './TestSeries.css';

const TestSeries = () => {
    const tests = [
        { name: 'Mock Test 1: Math', link: '#' },
        { name: 'Mock Test 2: Physics', link: '#' },
        // Add more test series
    ];

    return (
        <div className="test-series">
            <h2>Test Series</h2>
            <ul>
                {tests.map((test, index) => (
                    <li key={index}>
                        <a href={test.link}>{test.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TestSeries;
