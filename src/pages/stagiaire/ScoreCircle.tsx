import React from 'react';

interface ScoreCircleProps {
    subject: string;
    score: number;
}

const ScoreCircle: React.FC<ScoreCircleProps> = ({ subject, score }) => {
    const getColor = (score: number) => {
        const red = Math.min(255, 510 - (score * 5.1));
        const green = Math.min(255, (score * 5.1));
        return `rgb(${red},${green},0)`;
    };

    return (
        <div
            className="flex flex-col items-center justify-center w-40 h-40 rounded-full text-white font-bold"
            style={{ backgroundColor: getColor(score) }}
        >
            <span>{subject}</span>
            <span>{score}%</span>
        </div>
    );
};

export default ScoreCircle;
