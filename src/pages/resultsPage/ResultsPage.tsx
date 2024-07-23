import React from 'react';
import ScoreCircle from '../../components/scoreCircle/ScoreCircle';

interface Result {
    subject: string;
    score: number;
}

const mockResults: Result[] = [
    { subject: "TypeScript", score: 75 },
    { subject: "GitHub", score: 80 },
    { subject: "Python", score: 10 },
];

const ResultsPage: React.FC = () => {
    const totalQuestions = 4;
    const correctAnswers = 3;
    const score = (correctAnswers / totalQuestions) * 100;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">Résultat</h1>
            <div className="bg-gray-100 p-6 rounded-md text-center">
                <h2 className="text-2xl font-bold mb-4">Félicitations</h2>
                <p className="mb-2">Votre score est {score}%</p>
                <p className="mb-4">Vous avez bien répondu à {correctAnswers} questions sur {totalQuestions}</p>
                <p className="mb-4">Vous pouvez revoir les questions qui vous ont été posées</p>
                <div className="flex justify-around mt-6">
                    {mockResults.map((result, index) => (
                        <ScoreCircle key={index} subject={result.subject} score={result.score} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResultsPage;
