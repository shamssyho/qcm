import { useState } from 'react';
import questionnaire from '../../assets/mockQuestionnaire';
import './Questionnaire.css'
import Modal from '../../components/modal/Modal';
import NewQestioannireForm from '../../components/newQuestionnaireForm/NewQuestionnaireForm';
import { Link } from 'react-router-dom';

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
                        <th className="border border-gray-300 p-2">Intitulé</th>
                        <th className="border border-gray-300 p-2">Description</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {questionnaires.map((question) => (
                        <tr className="even:bg-gray-100 odd:bg-white hover:bg-gray-300" key={question.id}>
                            <td className="border border-gray-300 p-2">{question.title}</td>
                            <td className="border border-gray-300 p-2">{question.description}</td>
                            <td className="border border-gray-300 p-2">
                                <Link to='#' onClick={() => alert('Edit ' + question.title)} className="text-blue-500 hover:text-blue-800">Voir</Link>
                                {" | "}
                                <button onClick={() => alert('Delete ' + question.title)} className="text-red-500 hover:text-red-800">Supprimer</button>
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
                    <NewQestioannireForm />
                </Modal>
            </div>
        </div>
    );
}

