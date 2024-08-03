import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockQuestions } from '../../assets/mockQuestions';

const QuestionDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const questionId = parseInt(id ?? '', 10);
    const question = mockQuestions.find(q => q.id_question === questionId);
    const navigate = useNavigate();

    // Convertir les indices des bonnes réponses en valeurs de choix
    const initialSelectedAnswers = question ? question.bonne_reponse.map(index => question.choix[index]) : [];

    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(initialSelectedAnswers);

    if (!question) {
        return <div>Question non trouvée</div>;
    }

    const handleSave = () => {
        // Logique de sauvegarde de la question
        console.log(`Sauvegarder les modifications pour la question avec l'ID: ${question.id_question}`);
        console.log(`Bonnes réponses sélectionnées: ${selectedAnswers}`);
    };

    const handleDelete = () => {
        // Logique de suppression de la question
        console.log(`Supprimer la question avec l'ID: ${question.id_question}`);
        navigate('/'); // Retour à la liste des questions après suppression
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
                    <input id="texteQuestion" type="text" defaultValue={question.texte_question} className="w-full p-2 border border-gray-300 rounded-md mb-2" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600" htmlFor="nombreReponses">Nombre de Réponses:</label>
                    <span id="nombreReponses" className="block text-lg font-semibold mb-4">{question.nbre_reponses}</span>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600" htmlFor="Choix">Choix:</label>
                    {question.choix.map((choix, index) => (
                        <div key={index} className="flex mb-2 items-center">
                            <input
                                type="text"
                                defaultValue={choix}
                                className="inline-block w-5/6 p-2 border border-gray-300 rounded-md"
                                id={`choix-${index}`}
                            />
                            <input
                                type="checkbox"
                                checked={selectedAnswers.includes(choix)}
                                onChange={() => handleCheckboxChange(choix)}
                                className="inline-block w-1/6"
                                id={`checkbox-${index}`}
                                aria-labelledby={`choix-${index}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600" htmlFor="bonneReponse">Bonne Réponse:</label>
                    <ul>
                        {selectedAnswers.length > 0 ? (
                            selectedAnswers.map((reponse, index) => (
                                <li key={index} className="list-disc list-inside">
                                    {reponse}
                                </li>
                            ))
                        ) : (
                            <p className="text-sm text-red-500">Aucune réponse sélectionnée</p>
                        )}
                    </ul>
                </div>
            </div>
            <div className="flex justify-end space-x-4">
                <button onClick={handleSave} className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">Sauvegarder</button>
                <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Supprimer</button>
            </div>
        </div>
    );
};

export default QuestionDetail;
