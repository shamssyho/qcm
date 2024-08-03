import { useNavigate, useParams } from 'react-router-dom';
import mockStagiaires from '../../assets/mockStagiares';
import mockQuestionnaire from '../../assets/mockQuestionnaire';
import { StagiaireI, StagiaireQuestionnaire } from '../../interfaces/StagiaireI';
import { QuestionnaireI } from '../../interfaces/QuestionnaireI';

export default function DetailsStagiaire() {
    const { id } = useParams<{ id: string }>();
    const stagiaireId = parseInt(id ?? '', 10);
    const stagiaire: StagiaireI | undefined = mockStagiaires.find(s => s.id === stagiaireId);
    const navigate = useNavigate();

    if (!stagiaire) {
        return <div>Stagiaire non trouvé</div>;
    }

    const getQuestionnaireDetails = (questionnaireId: number): QuestionnaireI | undefined => {
        return mockQuestionnaire.find(q => q.id === questionnaireId);
    };

    
    return (
        <div className="max-w-4xl mx-auto mt-10 p-5 bg-white shadow-xl rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-8">Détail du Stagiaire</h1>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                <p className="text-lg"><strong>Nom:</strong> {stagiaire.nom}</p>
                <p className="text-lg"><strong>Prénom:</strong> {stagiaire.prenom}</p>
                <p className="text-lg"><strong>Moyenne:</strong> {stagiaire.moyenne}</p>
                <p className="text-lg"><strong>Date de début:</strong> {stagiaire.dateDebut}</p>
            </div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Questionnaires et Notes</h2>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="py-3 px-6">Titre du Questionnaire</th>
                        <th className="py-3 px-6">Description</th>
                        <th className="py-3 px-6">Note</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {stagiaire.questionnaires.map((sq: StagiaireQuestionnaire) => {
                        const questionnaire = getQuestionnaireDetails(sq.questionnaireId);
                        return questionnaire ? (
                            <tr key={sq.questionnaireId} className="border-b">
                                <td className="py-4 px-6">{questionnaire.title}</td>
                                <td className="py-4 px-6">{questionnaire.description}</td>
                                <td className="py-4 px-6">{sq.note}</td>
                            </tr>
                        ) : null;
                    })}
                </tbody>
            </table>
            <div className="flex justify-end mt-6">
                <button onClick={() => navigate(-1)} className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">Retour</button>
            </div>
        </div>
    );
    
}
