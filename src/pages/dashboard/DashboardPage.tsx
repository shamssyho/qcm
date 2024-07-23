import React from 'react';
import StatCard from '../../components/statCard/StatCard';
import ScoreCircle from '../../components/scoreCircle/ScoreCircle';

const dashboardData = {
    totalQuestions: 40,
    totalCorrectAnswers: 30,
    totalParticipants: 10,
    averageScore: 75,
};

const recentResults = [
    { subject: "TypeScript", score: 75 },
    { subject: "GitHub", score: 80 },
    { subject: "Python", score: 60 },
];

const DashboardPage: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <StatCard title="Total Questions" value={dashboardData.totalQuestions} description="Total number of questions in the database" />
                <StatCard title="Total Correct Answers" value={dashboardData.totalCorrectAnswers} description="Total number of correct answers provided" />
                <StatCard title="Total Participants" value={dashboardData.totalParticipants} description="Total number of participants" />
                <StatCard title="Average Score" value={dashboardData.averageScore} description="Average score across all participants" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Recent Results</h2>
            <div className="flex justify-around mt-6">
                {recentResults.map((result, index) => (
                    <ScoreCircle key={index} subject={result.subject} score={result.score} />
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;
