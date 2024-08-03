// components/detailsStagiaire/DetailsStagiaire.tsx
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mockStagiaires from '../../../assets/mockStagiares';
import { mockQuestionnaires } from '../../../assets/mockQuestionnaires';
import { StagiairesI } from '../../../interfaces/StagiairesI';
import { QuestionnaireI } from '../../../interfaces/QuestionnaireI';
import Modal from '../../../components/modal/Modal';


export default function DetailsStagiaire() {
    const { id } = useParams<{ id: string }>();
    const stagiaireId = parseInt(id ?? '', 10);
    const stagiaire: StagiairesI | undefined = mockStagiaires.find(s => s.id_stagiaire === stagiaireId);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [nom, setNom] = useState(stagiaire?.nom || '');
    const [prenom, setPrenom] = useState(stagiaire?.prenom || '');
    const [dateCreated, setDateCreated] = useState(stagiaire?.date_created || '');

    if (!stagiaire) {
        return <div>Stagiaire non trouvé</div>;
    }

    const getQuestionnaireDetails = (questionnaireId: number): QuestionnaireI | undefined => {
        return mockQuestionnaires.find(q => q.id_questionnaire === questionnaireId);
    };

    const handleSave = () => {
        // Logique de sauvegarde des données
        setShowModal(false); // Ferme la modal après la sauvegarde
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 p-5 bg-white shadow-xl rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-8">Détail du Stagiaire</h1>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                <p className="text-lg"><strong>Nom:</strong> {stagiaire.nom}</p>
                <p className="text-lg"><strong>Prénom:</strong> {stagiaire.prenom}</p>
                <p className="text-lg"><strong>Date de création:</strong> {stagiaire.date_created}</p>
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
                    {stagiaire.questionnaires.map((sq) => {
                        const questionnaire = getQuestionnaireDetails(sq.id_questionnaire);
                        return questionnaire ? (
                            <tr key={sq.id_questionnaire} className="border-b">
                                <td className="py-4 px-6">{questionnaire.name}</td>
                                <td className="py-4 px-6">{questionnaire.description}</td>
                                <td className="py-4 px-6">{sq.resultat}</td>
                            </tr>
                        ) : null;
                    })}
                </tbody>
            </table>
            <div className="flex justify-between mt-6">
                <button onClick={() => navigate(-1)} className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">Retour</button>
                <button onClick={() => setShowModal(true)} className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300">Modifier</button>
            </div>

            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <h1 className="text-2xl font-bold mb-6">Modifier le Stagiaire</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Nom</label>
                        <input
                            type="text"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Prénom</label>
                        <input
                            type="text"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Date de création</label>
                        <input
                            type="date"
                            value={dateCreated}
                            onChange={(e) => setDateCreated(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex justify-end mt-6">
                        <button type="button" onClick={handleSave} className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">Enregistrer</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
