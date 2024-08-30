import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionnairesI } from '../../interfaces/QuestionnaireI';
import { fetchQuestionnaires } from '../../services/api';

const QuestionnaireStagiaire: React.FC = () => {
    const navigate = useNavigate();
    const [questionnaires, setQuestionnaires] = useState<QuestionnairesI[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Récupérer les questionnaires depuis l'API
        const getQuestionnaires = async () => {
            try {
                const data = await fetchQuestionnaires();
                setQuestionnaires(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch questionnaires');
                setLoading(false);
            }
        };

        getQuestionnaires();
    }, []);

    const handleStartQuestionnaire = (id_questionnaire: number) => {
        navigate(`/questionnaire/${id_questionnaire}/questions`);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

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
                    {questionnaires.map((questionnaire: QuestionnairesI) => (
                        <tr key={questionnaire.id} className="even:bg-gray-100 odd:bg-white hover:bg-gray-300">
                            <td className="border border-gray-300 p-2">{questionnaire.id}</td>
                            <td className="border border-gray-300 p-2">{questionnaire.name}</td>
                            <td className="border border-gray-300 p-2">{questionnaire.description}</td>
                            <td className="border border-gray-300 p-2">
                                <button
                                    onClick={() => handleStartQuestionnaire(questionnaire.id)}
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
