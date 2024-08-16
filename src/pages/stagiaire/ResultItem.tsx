import React from 'react';

interface ResultItemProps {
    questionText: string;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
}

const ResultItem: React.FC<ResultItemProps> = ({ questionText, userAnswer, correctAnswer, isCorrect }) => {
    return (
        <div className={`p-4 mb-2 border rounded ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
            <p className="font-bold">{questionText}</p>
            <p className="text-sm"><span className="font-semibold">Votre réponse:</span> {userAnswer}</p>
            {!isCorrect && <p className="text-sm"><span className="font-semibold">Réponse correcte:</span> {correctAnswer}</p>}
        </div>
    );
};

export default ResultItem;
