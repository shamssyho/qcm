import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Option from '../../components/options/Options';
import { fetchQuestionsByQuestionnaire, submitReponse } from '../../services/api';
import { fetchStagiaireById } from '../../services/api'; // Assurez-vous d'importer cette fonction

const QuestionStagiaire: React.FC = () => {
    const { id_questionnaire } = useParams<{ id_questionnaire: string }>();
    const [questions, setQuestions] = useState<any[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [timeLeft, setTimeLeft] = useState(0);
    const [stagiaire, setStagiaire] = useState<any>(null);

    useEffect(() => {
        const getQuestions = async () => {
            if (id_questionnaire) {
                try {
                    const fetchedQuestions = await fetchQuestionsByQuestionnaire(parseInt(id_questionnaire));
                    console.log('Fetched questions:', fetchedQuestions); // Log des questions récupérées
                    setQuestions(fetchedQuestions);
                    setTimeLeft(fetchedQuestions.length * 30);
                } catch (error) {
                    console.error('Error fetching questions:', error); // Log de toute erreur
                }
            }
        };

        getQuestions();
    }, [id_questionnaire]);



    useEffect(() => {
        if (questions.length > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prevTimeLeft) => {
                    if (prevTimeLeft <= 0) {
                        clearInterval(timer);
                        handleFinish();
                        return 0;
                    }
                    return prevTimeLeft - 1;
                });
            }, 1000);

            return () => clearInterval(timer); // Nettoyer l'intervalle à la fin
        }
    }, [questions]);

    const handleOptionClick = (index: number) => {
        if (questions[currentQuestionIndex]?.bonne_reponse?.length > 1) {
            setSelectedOptions((prev) =>
                prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
            );
        } else {
            setSelectedOptions([index]);
        }
    };

    const handleNextQuestion = async () => {

        // Soumettre la réponse actuelle
        try {
            await submitReponse(questions[currentQuestionIndex], selectedOptions);

            if (currentQuestionIndex < questions.length - 1) {
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
        } catch (error) {
            console.error('Error submitting response:', error);
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
        const sortedCorrectAnswers = questions[currentQuestionIndex]?.bonne_reponse?.sort().join(',');
        return sortedSelectedOptions === sortedCorrectAnswers;
    };

    const handleFinish = () => {
        setIsFinished(true);
        const percentage = (score / questions.length) * 100;

        if (percentage > 75) {
            setFeedbackMessage('Félicitations ! Vous avez obtenu une excellente moyenne.');
        } else if (percentage >= 50) {
            setFeedbackMessage('Bon travail, mais vous pouvez encore vous améliorer.');
        } else {
            setFeedbackMessage("Malheureusement, vous n'avez pas atteint la moyenne. Continuez à travailler pour vous améliorer !");
        }
    };

    if (!questions.length) {
        return <p>Loading...</p>;
    }

    if (isFinished) {
        return (
            <div className="p-5 bg-gray-200 mx-auto my-0 mt-24 rounded-2xl text-gray-800 w-11/12 md:w-2/3">
                <div className="max-w-4xl mx-auto p-4 text-center">
                    <h1 className="text-2xl font-bold mb-4">Félicitations !</h1>
                    <p className="text-lg">Vous avez terminé le questionnaire.</p>
                    <p className="text-xl font-bold mt-4">Votre score est de {score} sur {questions.length}.</p>
                    <p className="text-lg mt-4">{feedbackMessage}</p>
                </div>
            </div>
        );
    }

    const question = questions[currentQuestionIndex];
    if (!question) {
        return <p>Erreur : question non trouvée.</p>;
    }

    return (
        <div className="p-5 bg-gray-200 mx-auto my-0 mt-24 rounded-2xl text-gray-800 w-11/12 md:w-2/3">
            <div className="max-w-4xl mx-auto p-4">
                <div className="flex justify-between mb-4">
                    <h1 className="text-xl font-bold">Question {currentQuestionIndex + 1} : {question.questionTexte}</h1>
                    <div className="text-xl font-bold text-red-600">
                        Temps restant : {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}
                    </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-md">
                    <p className="mb-4">{question.texte_question}</p>
                    {question.choix?.map((option: string, index: number) => (
                        <Option
                            key={index}
                            text={option}
                            color={selectedOptions.includes(index) ? 'border-green-500' : 'border-gray-300'}
                            response={selectedOptions.includes(index)}
                            onClick={() => handleOptionClick(index)}
                            isMultiple={question.bonne_reponse?.length > 1}
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    {[...Array(questions.length)].map((_, index) => (
                        <span key={index} className={`mx-1 ${index === currentQuestionIndex ? 'text-black' : 'text-gray-400'}`}>
                            {index + 1}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={handlePreviousQuestion}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        disabled={currentQuestionIndex === 0}
                    >
                        Précédent
                    </button>
                    <button
                        onClick={handleNextQuestion}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        {currentQuestionIndex === questions.length - 1 ? 'Terminer' : 'Suivant'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuestionStagiaire;
