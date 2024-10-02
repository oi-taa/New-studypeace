// StudyPage.js
import React, { useState } from 'react';
import Sidebar from './components/sideBar/side_bar';
import SearchBar from './components/searchBar/search';
import TimeTable from './components/timeTable/timeTable';
import ProfileDashboard from './components/profile_and_dashboard/dashboard';
import Subjects from './components/subjects/subject';
import StudyMaterials from './components/MainMaterial/MainOP';
import Market_page from './components/marketPlace/market';
import Test_page from './components/TestSeries/test';
import Tools_page from './components/Tools/tools';
import AssignmentGenerator from './components/AssignmentPage/assign';
import './StudyPage.css';

const StudyPage = () => {
    const [activeTab, setActiveTab] = useState('dashboard'); // Set default tab

    const renderActiveTab = () => {
        switch (activeTab) {
            case 'dashboard':
                return <ProfileDashboard />;
            case 'subjects':
                return <Subjects />;
            case 'materials':
                return <StudyMaterials />;
            case 'timetable':
                return <TimeTable />;
            case 'market':
                return <Market_page />;
            case 'test':
                return <Test_page />;
            case 'tools':
                return <Tools_page />;
            case 'assignment':
                return <AssignmentGenerator />;
            default:
                return <ProfileDashboard />;
        }
    };

    return (
        <div className="study-page">
            <section className="study-sidebar">
                <Sidebar setActiveTab={setActiveTab} />
            </section>
            <section className="study-main-content">
                <div className="main-content">
                    <SearchBar />
                    <div className="study-content">
                        {renderActiveTab()}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default StudyPage;
