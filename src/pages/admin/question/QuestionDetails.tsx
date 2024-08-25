import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteQuestion, fetchQuestionById, updateQuestion } from '../../../services/api';

const QuestionDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const questionId = parseInt(id ?? '', 10);
    const navigate = useNavigate();

    const [question, setQuestion] = useState<any | null>(null); // Remplace 'any' par ton type réel si tu as défini une interface
    const [texteQuestion, setTexteQuestion] = useState('');
    const [choix, setChoix] = useState<string[]>([]);
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

    useEffect(() => {
        const loadQuestion = async () => {
            if (!isNaN(questionId)) {
                try {
                    const fetchedQuestion = await fetchQuestionById(questionId);
                    setQuestion(fetchedQuestion);
                    setTexteQuestion(fetchedQuestion.questionTexte);
                    setChoix(fetchedQuestion.choix);
                    setSelectedAnswers(fetchedQuestion.reponsesCorrectes.map((index: number) => fetchedQuestion.choix[index]));
                } catch (error) {
                    console.error('Failed to fetch question:', error);
                    alert('Failed to load question details.');
                }
            }
        };
        loadQuestion();
    }, [questionId]);

    const handleSave = async () => {
        const updatedQuestion = {
            ...question,
            questionTexte: texteQuestion,
            choix,
            reponsesCorrectes: choix
                .map((c, index) => (selectedAnswers.includes(c) ? index : -1))
                .filter(index => index !== -1),
        };

        try {
            await updateQuestion(questionId, updatedQuestion);
            alert('Question mise à jour avec succès!');
            navigate('/questions');
        } catch (error) {
            console.error('Failed to update question:', error);
            alert('La mise à jour de la question a échoué.');
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cette question?')) {
            try {
                await deleteQuestion(questionId);
                alert('Question supprimée avec succès!');
                navigate('/questions');
            } catch (error) {
                console.error('Failed to delete question:', error);
                alert('La suppression de la question a échoué.');
            }
        }
    };

    const handleCheckboxChange = (choixText: string) => {
        setSelectedAnswers(prev =>
            prev.includes(choixText) ? prev.filter(c => c !== choixText) : [...prev, choixText]
        );
    };

    const handleChoixChange = (index: number, value: string) => {
        const newChoix = [...choix];
        newChoix[index] = value;
        setChoix(newChoix);
    };

    if (!question) {
        return <div>Chargement des détails de la question...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto mt-24 mb-24 p-4 bg-gray-200 shadow-md rounded-md">
            <h1 className="text-3xl font-bold text-center mb-4">Détails de la Question</h1>
            <div>
                <div className="mb-4">
                    <label className="block text-gray-600" htmlFor="idQuestionnaire">ID Questionnaire:</label>
                    <span id="idQuestionnaire" className="block text-lg font-semibold mb-4">
                        {question.questionnaire?.id}
                    </span>
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
                    <span id="nombreReponses" className="block text-lg font-semibold mb-4">
                        {question.nbreReponses}
                    </span>
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
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                    >
                        Sauvegarder
                    </button>
                    <button
                        onClick={handleDelete}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                    >
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuestionDetail;
