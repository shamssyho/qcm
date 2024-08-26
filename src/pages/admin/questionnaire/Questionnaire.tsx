import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockQuestionnaires } from '../../../assets/mockQuestionnaires';
import Modal from '../../../components/modal/Modal';
import { QuestionnairesI } from '../../../interfaces/QuestionnaireI';
import NewQuestionnaireForm from './NewQuestionnaireForm';
import { createQuestionnaire, deleteQuestionnaire, fetchQuestionnaires, updateQuestionnaire } from '../../../services/api';

export default function Questionnaire() {
    const [questionnaires, setQuestionnaires] = useState<QuestionnairesI[]>(mockQuestionnaires);
    const [showModal, setShowModal] = useState(false);
    const [currentQuestionnaire, setCurrentQuestionnaire] = useState<QuestionnairesI | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        loadQuestionnairesFromAPI();
    }, []);

    // Récupération des questionnaire de la BDD
    const loadQuestionnairesFromAPI = async () => {
        try {
            const fetchedQuestionnaires = await fetchQuestionnaires();
            setQuestionnaires(fetchedQuestionnaires);
        } catch (error) {
            console.error('Failed to fetch questionnaires:', error);
        }
    };

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentQuestionnaire(null); // Réinitialiser le questionnaire en cours de modification
        setIsEditing(false);
    };

    /* const handleSaveQuestionnaire = (newQuestionnaire: { name: string, description: string }) => {
        const currentDate = new Date().toISOString();

        if (isEditing && currentQuestionnaire) {
            const updatedQuestionnaires = questionnaires.map(q =>
                q.id_questionnaire === currentQuestionnaire.id_questionnaire
                    ? { ...q, ...newQuestionnaire, date_modified: currentDate }
                    : q
            );
            setQuestionnaires(updatedQuestionnaires);
        } else {
            const newQuestionnaires = [
                ...questionnaires,
                {
                    id_questionnaire: questionnaires.length + 1,
                    id_admin: 1,
                    ...newQuestionnaire,
                    date_created: currentDate,
                    date_modified: currentDate
                }
            ];
            setQuestionnaires(newQuestionnaires);
        }
        handleCloseModal();
    }; */

    /* const handleSaveQuestionnaire = async (newQuestionnaire) => {
        try {
            const savedQuestionnaire = await createQuestionnaire(newQuestionnaire);
            setQuestionnaires([...questionnaires, savedQuestionnaire]);
            handleCloseModal();
        } catch (error) {
            console.error('Failed to create questionnaire:', error);
        }
    }; */

    const handleSaveQuestionnaire = async (newQuestionnaire) => {
        try {
            if (isEditing && currentQuestionnaire) {
                // Mise à jour du questionnaire existant
                const updatedQuestionnaire = await updateQuestionnaire(currentQuestionnaire.id, newQuestionnaire);
                setQuestionnaires(questionnaires.map(q =>
                    q.id === currentQuestionnaire.id ? updatedQuestionnaire : q
                ));
            } else {
                // Création d'un nouveau questionnaire
                const savedQuestionnaire = await createQuestionnaire(newQuestionnaire);
                setQuestionnaires([...questionnaires, savedQuestionnaire]);
            }
            handleCloseModal();
        } catch (error) {
            console.error('Error saving questionnaire:', error);
        }
    };

    const handleViewQuestionnaire = (id: number) => {
        navigate(`/questionnaire/${id}`);
    };

    const handleDeleteQuestionnaire = async (id: number) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce questionnaire ?')) {
            try {
                await deleteQuestionnaire(id);
                const updatedQuestionnaires = questionnaires.filter(q => q.id !== id);
                setQuestionnaires(updatedQuestionnaires);
            } catch (error) {
                console.error('Error deleting questionnaire:', error);
                alert('Failed to delete questionnaire: ' + error.message);
            }
        }
    };


    const handleEditQuestionnaire = (questionnaire: QuestionnairesI) => {
        setCurrentQuestionnaire(questionnaire);
        setIsEditing(true);
        setShowModal(true);
    };

    return (
        <div className="p-5 bg-gray-200 mx-auto my-0 mt-24 rounded-2xl text-gray-800 w-11/12 md:w-2/3">
            <h2 className='text-3xl font-bold mb-5'>Questionnaires</h2>
            <table className='w-full border-collapse'>
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Intitulé</th>
                        <th className="border border-gray-300 p-2">Description</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {questionnaires.map((question) => (
                        <tr className="even:bg-gray-100 odd:bg-white hover:bg-gray-300" key={question.id}>
                            <td className="border border-gray-300 p-2">{question.name}</td>
                            <td className="border border-gray-300 p-2">{question.description}</td>
                            <td className="border border-gray-300 p-2">
                                <button
                                    onClick={() => handleViewQuestionnaire(question.id)}
                                    className="text-blue-500 hover:text-blue-800"
                                >
                                    Voir
                                </button>
                                {" | "}
                                <button
                                    onClick={() => handleEditQuestionnaire(question)}
                                    className="text-yellow-500 hover:text-yellow-800"
                                >
                                    Modifier
                                </button>
                                {" | "}
                                <button
                                    onClick={() => handleDeleteQuestionnaire(question.id)}
                                    className="text-red-500 hover:text-red-800"
                                >
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4 flex justify-end">
                <button className="bg-purple-700 text-white p-2 rounded-lg hover:bg-purple-800" onClick={handleOpenModal}>
                    CRÉER UN QUESTIONNAIRE
                </button>

                <Modal show={showModal} onClose={handleCloseModal}>
                    <NewQuestionnaireForm
                        onSave={handleSaveQuestionnaire}
                        onClose={handleCloseModal}
                        initialData={currentQuestionnaire}
                    />
                </Modal>
            </div>
        </div>
    );
}
