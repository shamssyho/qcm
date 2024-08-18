import React from 'react';
import QuestionnaireStagiaire from './QuestionnaireStagiaire';

const mockQuestions = ["Question 1", "Question 2", "Question 3"];

const QuestionnairePage: React.FC = () => {
    const handleFinish = () => {
        alert("Le temps est écoulé ou le questionnaire est terminé !");
    };

    return (
        <QuestionnaireStagiaire questions={mockQuestions} onFinish={handleFinish} />
    );
};

export default QuestionnairePage;
