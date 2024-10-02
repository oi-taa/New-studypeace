import React from 'react';
import './Subjects.css';

const Subjects = () => {
    const subjects = ['Math', 'Science', 'History', 'English', 'Computer Science'];

    return (
        <div className="subjects-container">
            <h2 className="subjects-title">Your Subjects</h2>
            <div className="subjects-grid">
                {subjects.map((subject, index) => (
                    <div key={index} className="subject-card">
                        <h3 className="subject-name">{subject}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Subjects;
