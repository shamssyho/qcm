import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockQuestionnaires } from '../../assets/mockQuestionnaires';
import Modal from '../../components/modal/Modal';
import NewQuestionnaireForm from '../../components/newQuestionnaireForm/NewQuestionnaireForm';
import { QuestionnairesI } from '../../interfaces/QuestionnaireI';

export default function Questionnaire() {
    const [questionnaires, setQuestionnaires] = useState<QuestionnairesI[]>(mockQuestionnaires);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleSaveQuestionnaire = (newQuestionnaire: { name: string, description: string }) => {
        const currentDate = new Date().toISOString();
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
        handleCloseModal(); // Close modal after saving
    };

    const handleViewQuestionnaire = (id: number) => {
        navigate(`/questionnaire/${id}`);
    };

    const handleDeleteQuestionnaire = (id: number) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce questionnaire ?')) {
            const updatedQuestionnaires = questionnaires.filter(q => q.id_questionnaire !== id);
            setQuestionnaires(updatedQuestionnaires);
        }
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
                        <tr className="even:bg-gray-100 odd:bg-white hover:bg-gray-300" key={question.id_questionnaire}>
                            <td className="border border-gray-300 p-2">{question.name}</td>
                            <td className="border border-gray-300 p-2">{question.description}</td>
                            <td className="border border-gray-300 p-2">
                                <button
                                    onClick={() => handleViewQuestionnaire(question.id_questionnaire)}
                                    className="text-blue-500 hover:text-blue-800"
                                >
                                    Voir
                                </button>
                                {" | "}
                                <button
                                    onClick={() => handleDeleteQuestionnaire(question.id_questionnaire)}
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
                    <NewQuestionnaireForm onSave={handleSaveQuestionnaire} onClose={handleCloseModal} />
                </Modal>
            </div>
        </div>
    );
}
