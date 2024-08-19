import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { QuestionsI } from '../../../interfaces/QuestionsI';
import { deleteQuestion, fetchQuestionnaireById, fetchQuestionsByQuestionnaire } from '../../../services/api';

const QuestionnaireDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [questionnaire, setQuestionnaire] = useState(null);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedQuestionnaire = await fetchQuestionnaireById(parseInt(id));
                setQuestionnaire(fetchedQuestionnaire);
                const fetchedQuestions = await fetchQuestionsByQuestionnaire(parseInt(id));
                setQuestions(fetchedQuestions);
            } catch (error) {
                console.error('Error loading questionnaire details:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleDeleteQuestion = async (questionId: number) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cette question ?')) {
            try {
                await deleteQuestion(questionId);
                const updatedQuestions = questions.filter(question => question.id !== questionId);
                setQuestions(updatedQuestions);
                alert('Question deleted successfully!');
            } catch (error) {
                console.error('Failed to delete question:', error);
                alert(`Failed to delete question: ${error.message}`);
            }
        }
    };

    // Assurez-vous que questionnaireId est un nombre valide
    if (isNaN(id)) {
        return <div>ID invalide pour le questionnaire</div>;
    }

    // Vérifiez si le questionnaire existe
    if (!questionnaire) {
        return <div>Questionnaire non trouvé</div>;
    }

    return (
        <div className="p-5 bg-gray-200 mx-auto my-0 mt-24 rounded-2xl text-gray-800 w-11/12 md:w-2/3">
            <h2 className="text-3xl font-bold mb-5">Détails du Questionnaire</h2>
            <div className="mb-4">
                <h3 className="text-2xl font-semibold">Intitulé</h3>
                <p>{questionnaire.name}</p>
            </div>
            <div className="mb-4">
                <h3 className="text-2xl font-semibold">Description</h3>
                <p>{questionnaire.description}</p>
            </div>
            <div className="mb-4">
                <h3 className="text-2xl font-semibold">Questions</h3>
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">Question</th>
                            <th className="border border-gray-300 p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question: QuestionsI) => (
                            <tr key={question.id_question} className="even:bg-gray-100 odd:bg-white hover:bg-gray-300">
                                <td className="border border-gray-300 p-2">{question.questionTexte}</td>
                                <td className="border border-gray-300 p-2">
                                    <Link to={`/question/${question.id}`} className="text-blue-500 hover:text-blue-800">Modifier</Link>
                                    {' | '}
                                    <button className="text-red-500 hover:text-red-800" onClick={() => handleDeleteQuestion(question.id)}>
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end">
                <Link to={`/new-question/${id}`} className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                    Ajouter une question
                </Link>
            </div>
        </div>
    );
};

export default QuestionnaireDetail;
