import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuestions } from '../../../services/QuestionContext';

const QuestionDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const questionId = parseInt(id ?? '', 10);
    const { questions, deleteQuestion, updateQuestion } = useQuestions();
    const question = questions.find(q => q.id_question === questionId);
    const navigate = useNavigate();

    const initialSelectedAnswers = question ? question.bonne_reponse.map(index => question.choix[index]) : [];
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(initialSelectedAnswers);
    const [texteQuestion, setTexteQuestion] = useState(question?.texte_question || '');
    const [choix, setChoix] = useState(question?.choix || []);

    if (!question) {
        return <div>Question non trouvée</div>;
    }

    const handleSave = () => {
        const updatedQuestion = {
            ...question,
            texte_question: texteQuestion,
            choix: choix,
            bonne_reponse: choix.map((c, i) => selectedAnswers.includes(c) ? i : -1).filter(i => i !== -1),
        };

        updateQuestion(updatedQuestion);
        navigate('/questions');
    };

    const handleDelete = () => {
        deleteQuestion(question.id_question);
        navigate('/questions');
    };

    const handleCheckboxChange = (choix: string) => {
        setSelectedAnswers(prevSelectedAnswers => {
            if (prevSelectedAnswers.includes(choix)) {
                return prevSelectedAnswers.filter(answer => answer !== choix);
            } else {
                return [...prevSelectedAnswers, choix];
            }
        });
    };

    const handleChoixChange = (index: number, value: string) => {
        const newChoix = [...choix];
        newChoix[index] = value;
        setChoix(newChoix);
    };

    return (
        <div className="max-w-4xl mx-auto mt-24 mb-24 p-4 bg-gray-200 shadow-md rounded-md">
            <h1 className="text-3xl font-bold text-center mb-4">Détails de la Question</h1>
            <div>
                <div className="mb-4">
                    <label className="block text-gray-600" htmlFor="idQuestionnaire">ID Questionnaire:</label>
                    <span id="idQuestionnaire" className="block text-lg font-semibold mb-4">{question.id_questionnaire}</span>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600" htmlFor="texteQuestion">Question:</label>
                    <input
                        id="texteQuestion"
                        type="text"
                        value={texteQuestion}
                        onChange={(e) => setTexteQuestion(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600" htmlFor="nombreReponses">Nombre de Réponses:</label>
                    <span id="nombreReponses" className="block text-lg font-semibold mb-4">{question.nbre_reponses}</span>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600" htmlFor="Choix">Choix:</label>
                    {choix.map((choixText, index) => (
                        <div key={index} className="flex mb-2 items-center">
                            <input
                                type="text"
                                value={choixText}
                                onChange={(e) => handleChoixChange(index, e.target.value)}
                                className="inline-block w-5/6 p-2 border border-gray-300 rounded-md"
                                id={`choix-${index}`}
                            />
                            <input
                                type="checkbox"
                                checked={selectedAnswers.includes(choixText)}
                                onChange={() => handleCheckboxChange(choixText)}
                                className="inline-block w-1/6"
                                id={`checkbox-${index}`}
                                aria-labelledby={`choix-${index}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-end space-x-4">
                    <button onClick={handleSave} className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">Sauvegarder</button>
                    <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Supprimer</button>
                </div>
            </div>
        </div>
    );
};

export default QuestionDetail;
