// src/components/DetailsStagiaire.tsx
import './DetailsStagiaire.css'
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
        <div className="container">
            <h1 className="title">Détail du Stagiaire</h1>
            <div className="stagiaire-info">
                <p><strong>Nom:</strong> {stagiaire.nom}</p>
                <p><strong>Prénom:</strong> {stagiaire.prenom}</p>
                <p><strong>Moyenne:</strong> {stagiaire.moyenne}</p>
                <p><strong>Date de début:</strong> {stagiaire.dateDebut}</p>
            </div>
            <h2 className="subtitle">Questionnaires et Notes</h2>
            <table className="questionnaire-table">
                <thead>
                    <tr>
                        <th>Titre du Questionnaire</th>
                        <th>Description</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {stagiaire.questionnaires.map((sq: StagiaireQuestionnaire) => {
                        const questionnaire = getQuestionnaireDetails(sq.questionnaireId);
                        return questionnaire ? (
                            <tr key={sq.questionnaireId}>
                                <td>{questionnaire.title}</td>
                                <td>{questionnaire.description}</td>
                                <td>{sq.note}</td>
                            </tr>
                        ) : null;
                    })}
                </tbody>
            </table>
            <button onClick={() => navigate(-1)} className="button button-back">Retour</button>
        </div>
    );
}
