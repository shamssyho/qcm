import React, { useState } from 'react';
import Option from '../../components/options/Options';
import { mockQuestions } from '../../assets/mockQuestions';

const QuestionPageStagiaire: React.FC = () => {
    const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const question = mockQuestions[currentQuestionIndex];

    const handleOptionClick = (index: number) => {
        if (question.bonne_reponse.length > 1) {
            setSelectedOptions((prev) =>
                prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
            );
        } else {
            setSelectedOptions([index]);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < mockQuestions.length - 1) {
            if (checkAnswer()) {
                setScore(score + 1);
            }
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOptions([]);
        } else {
            if (checkAnswer()) {
                setScore(score + 1);
            }
            handleFinish();
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedOptions([]);
        }
    };

    const checkAnswer = (): boolean => {
        const sortedSelectedOptions = selectedOptions.sort().join(',');
        const sortedCorrectAnswers = question.bonne_reponse.sort().join(',');
        return sortedSelectedOptions === sortedCorrectAnswers;
    };

    const handleFinish = () => {
        setIsFinished(true);

        const percentage = (score / mockQuestions.length) * 100;

        if (percentage > 75) {
            setFeedbackMessage('Félicitations ! Vous avez obtenu une excellente moyenne.');
        } else if (percentage >= 50) {
            setFeedbackMessage('Bon travail, mais vous pouvez encore vous améliorer.');
        } else {
            setFeedbackMessage('Malheureusement, vous n\'avez pas atteint la moyenne. Continuez à travailler pour vous améliorer !');
        }
    };

    if (isFinished) {
        return (
            <div className="p-5 bg-gray-200 mx-auto my-0 mt-24 rounded-2xl text-gray-800 w-11/12 md:w-2/3">
                <div className="max-w-4xl mx-auto p-4 text-center">
                    <h1 className="text-2xl font-bold mb-4">Félicitations !</h1>
                    <p className="text-lg">Vous avez terminé le questionnaire.</p>
                    <p className="text-xl font-bold mt-4">Votre score est de {score} sur {mockQuestions.length}.</p>
                    <p className="text-lg mt-4">{feedbackMessage}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-5 bg-gray-200 mx-auto my-0 mt-24 rounded-2xl text-gray-800 w-11/12 md:w-2/3">
            <div className="max-w-4xl mx-auto p-4">
                <h1 className="text-xl font-bold mb-4">Question {currentQuestionIndex + 1}</h1>
                <div className="bg-gray-100 p-6 rounded-md">
                    <p className="mb-4">{question.texte_question}</p>
                    {question.choix.map((option, index) => (
                        <Option
                            key={index}
                            text={option}
                            color={selectedOptions.includes(index) ? 'border-green-500' : 'border-gray-300'}
                            response={selectedOptions.includes(index)}
                            onClick={() => handleOptionClick(index)}
                            isMultiple={question.bonne_reponse.length > 1}
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    {[...Array(mockQuestions.length)].map((_, index) => (
                        <span key={index} className={`mx-1 ${index === currentQuestionIndex ? 'text-black' : 'text-gray-500'}`}>
                            {index + 1}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={handlePreviousQuestion}
                        disabled={currentQuestionIndex === 0}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
                    >
                        Précédent
                    </button>
                    <button
                        onClick={handleNextQuestion}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        {currentQuestionIndex === mockQuestions.length - 1 ? 'Terminer' : 'Suivant'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuestionPageStagiaire;
