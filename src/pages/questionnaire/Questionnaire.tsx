import { useState, useEffect } from 'react';
import { deleteQuestionnaire, fetchQuestionnaires } from '../../services/api';
import Modal from '../../components/modal/Modal';
import NewQuestionnaireForm from '../../components/newQuestionnaireForm/NewQuestionnaireForm';

export default function Questionnaire() {
    const [questionnaires, setQuestionnaires] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        loadQuestionnaires();
    }, []);

    const loadQuestionnaires = async () => {
        try {
            const fetchedQuestionnaires = await fetchQuestionnaires();
            setQuestionnaires(fetchedQuestionnaires);
        } catch (error) {
            console.error('Failed to fetch questionnaires:', error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteQuestionnaire(id);
            loadQuestionnaires(); // Recharge la liste après suppression
        } catch (error) {
            console.error('Error deleting questionnaire:', error);
        }
    };


    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="p-5 bg-gray-200 mx-auto my-0 mt-24 rounded-2xl text-gray-800 w-11/12 md:w-2/3">
            <h2 className='text-3xl font-bold mb-5'>Questionnaires</h2>
            <table className='w-full border-collapse'>
                <thead className="bg-gray-50">
                    <tr>
                        <th className="p-2 border-b border-gray-600 text-center">Intitulé</th>
                        <th className="p-2 border-b border-gray-600 text-center">Description</th>
                        <th className="p-2 border-b border-gray-600 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {questionnaires.map((question) => (
                        <tr key={question.id} className="bg-gray-300 border-b border-gray-400 text-center">
                            <td className="p-2">{question.name}</td>
                            <td className="p-2">{question.description}</td>
                            <td className="flex justify-center items-center space-x-1 p-2">
                                <button onClick={() => alert('Edit ' + question.name)} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700">✏️</button>
                                <button onClick={() => handleDelete(question.id)} className="p-2 bg-red-500 text-white rounded hover:bg-red-700">🗑️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4 flex justify-end">
                <button className="bg-purple-700 text-white p-2 rounded-lg hover:bg-purple-800" onClick={handleOpenModal}>
                    CRÉER UN QUESTIONNAIRE
                </button>

                <Modal show={showModal} handleClose={handleCloseModal}>
                    <NewQuestionnaireForm />
                </Modal>
            </div>
        </div>
    );
}
