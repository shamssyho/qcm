import { useState } from 'react';
import questionnaire from '../../assets/mockQuestionnaire';
import './Questionnaire.css'
import Modal from '../../components/modal/Modal';
import NewQestioannireForm from '../../components/newQuestionnaireForm/NewQuestionnaireForm';

export default function Questionnaire() {
    const [questionnaires,] = useState(questionnaire);
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="p-5 bg-gray-200 mx-auto my-0 mt-24 rounded-2xl text-gray-800 w-11/12 md:w-2/3">
            <h2 className='text-3xl font-bold mb-5'>Questionnaires</h2>
            <table className='w-full border-collapse'>
                <thead>
                    <tr>
                        <th className="p-2 border-b border-gray-600">Intitulé</th>
                        <th className="p-2 border-b border-gray-600">Description</th>
                        <th className="p-2 border-b border-gray-600">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {questionnaires.map((question) => (
                        <tr className="bg-gray-300 border-b border-gray-400" key={question.id}>
                        <td className="p-2">{question.title}</td>
                        <td className="p-2">{question.description}</td>
                        <br/>
                        <td className="flex justify-center items-center space-x-1 p-2">
                            <button onClick={() => alert('Edit ' + question.title)} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700">✏️</button>
                            <button onClick={() => alert('Delete ' + question.title)} className="p-2 bg-red-500 text-white rounded hover:bg-red-700">🗑️</button>
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
                    <NewQestioannireForm />
                </Modal>
            </div>
        </div>
    );
}

