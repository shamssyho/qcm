import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchStagiaireById, fetchResponsesByStagiaireId } from '../../../services/api';
import { StagiairesI } from '../../../interfaces/StagiairesI';

const DetailsStagiaire: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [stagiaire, setStagiaire] = useState<StagiairesI | null>(null);
    const [groupedResponses, setGroupedResponses] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedStagiaire = await fetchStagiaireById(parseInt(id));
                setStagiaire(fetchedStagiaire);
                const fetchedResponses = await fetchResponsesByStagiaireId(fetchedStagiaire.id);
                groupResponses(fetchedResponses);
            } catch (error) {
                console.error('Failed to fetch details:', error);
            }
        };

        fetchData();
    }, [id]);

    const groupResponses = (responses) => {
        const grouped = {};
        responses.forEach(response => {
            const questionnaireId = response.question.questionnaire.id;
            if (!grouped[questionnaireId]) {
                grouped[questionnaireId] = {
                    name: response.question.questionnaire.name,
                    description: response.question.questionnaire.description,
                    questions: {}
                };
            }
            const questionId = response.question.id;
            if (!grouped[questionnaireId].questions[questionId]) {
                grouped[questionnaireId].questions[questionId] = {
                    questionText: response.question.questionTexte,
                    responses: []
                };
            }
            response.reponses.forEach(index => {
                grouped[questionnaireId].questions[questionId].responses.push(response.question.choix[index]);
            });
        });
        setGroupedResponses(grouped);
    };

    if (!stagiaire) {
        return <div>Stagiaire non trouvé</div>;
    }

    return (
        <div className="container mx-auto mt-5 p-5 bg-gray-100 rounded-lg shadow">
            <h1 className="text-xl font-bold text-center mb-4">Détails du Stagiaire</h1>
            <div className="mb-4 p-4 bg-white rounded shadow">
                <p><strong>Nom:</strong> {stagiaire.lastName}</p>
                <p><strong>Prénom:</strong> {stagiaire.firstName}</p>
                <p><strong>Email:</strong> {stagiaire.email}</p>
                <p><strong>Date de début:</strong> {new Date(stagiaire.dateCreated).toLocaleDateString()}</p>
            </div>
            <h2 className="text-lg font-bold text-center my-4">Réponses aux Questionnaires</h2>
            {Object.keys(groupedResponses).map(key => (
                <div key={key} className="mb-3 p-3 bg-white rounded shadow">
                    <h3 className="font-semibold">{groupedResponses[key].name}</h3>
                    <p className="text-gray-600">{groupedResponses[key].description}</p>
                    <table className="min-w-full divide-y divide-gray-200 mt-2">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Question
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Réponse
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {Object.entries(groupedResponses[key].questions).map(([questionKey, question]) => 
                                <tr key={questionKey}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {question.questionText}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {question.responses.map((response, idx) => (
                                            <div key={idx}>{response}</div>
                                        ))}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default DetailsStagiaire;
