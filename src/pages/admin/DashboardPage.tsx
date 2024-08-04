import React from 'react';
import StatCard from '../../components/statCard/StatCard';
import ListeStagiaires from './ListeStagiaires';

const dashboardData = {
    totalQuestions: 40,
    totalCorrectAnswers: 30,
    totalParticipants: 10,
    averageScore: 75,
};


const DashboardPage: React.FC = () => {
    return (
        <div>

            <div className="max-w-7xl mx-auto p-4">
                {/* <h1 className="text-3xl font-bold mb-6">Dashboard</h1> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <StatCard title="Total Questions" value={dashboardData.totalQuestions} description="Total number of questions in the database" />
                    <StatCard title="Total Correct Answers" value={dashboardData.totalCorrectAnswers} description="Total number of correct answers provided" />
                    <StatCard title="Total Participants" value={dashboardData.totalParticipants} description="Total number of participants" />
                    <StatCard title="Average Score" value={dashboardData.averageScore} description="Average score across all participants" />
                </div>
                <br />
                <br />
                <ListeStagiaires />
            </div>
        </div>
    );
};

export default DashboardPage;
