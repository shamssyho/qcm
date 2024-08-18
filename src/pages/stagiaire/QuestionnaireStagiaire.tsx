import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionnairesI } from '../../interfaces/QuestionnaireI'; // Assurez-vous que cette interface est correcte
import { mockQuestionnaires } from '../../assets/mockQuestionnaires'; // Vos données mockées

const QuestionnaireStagiaire: React.FC = () => {
    const navigate = useNavigate();

    // Fonction pour démarrer le questionnaire (redirection vers la page du questionnaire)
    const handleStartQuestionnaire = (id_questionnaire: number) => {
        // Redirection vers la page des questions du questionnaire
        navigate(`/questionnaire/${id_questionnaire}/questions`);
    };

    return (
        <div className="p-5 bg-gray-200 mx-auto my-0 mt-24 rounded-2xl text-gray-800 w-11/12 md:w-2/3">
            <h1 className="text-3xl font-bold text-center mb-8">Liste des Questionnaires</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="border border-gray-300 p-2">ID Questionnaire</th>
                        <th className="border border-gray-300 p-2">Nom</th>
                        <th className="border border-gray-300 p-2">Description</th>
                        <th className="border border-gray-300 p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mockQuestionnaires.map((questionnaire: QuestionnairesI) => (
                        <tr key={questionnaire.id_questionnaire} className="even:bg-gray-100 odd:bg-white hover:bg-gray-300">
                            <td className="border border-gray-300 p-2">{questionnaire.id_questionnaire}</td>
                            <td className="border border-gray-300 p-2">{questionnaire.name}</td>
                            <td className="border border-gray-300 p-2">{questionnaire.description}</td>
                            <td className="border border-gray-300 p-2">
                                <button
                                    onClick={() => handleStartQuestionnaire(questionnaire.id_questionnaire)}
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                >
                                    Commencer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default QuestionnaireStagiaire;
