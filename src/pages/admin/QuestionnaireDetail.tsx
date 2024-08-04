// pages/questionnaireDetail/QuestionnaireDetail.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockQuestionnaires } from '../../assets/mockQuestionnaires';
import { mockQuestions } from '../../assets/mockQuestions';

import { QuestionsI } from '../../interfaces/QuestionsI';

const QuestionnaireDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const questionnaireId = parseInt(id ?? '', 10);
    const questionnaire = mockQuestionnaires.find(q => q.id_questionnaire === questionnaireId);
    const questions = mockQuestions.filter(q => q.id_questionnaire === questionnaireId);

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
                                <td className="border border-gray-300 p-2">{question.texte_question}</td>
                                <td className="border border-gray-300 p-2">
                                    <Link to={`/question/${question.id_question}`} className="text-blue-500 hover:text-blue-800">Modifier</Link>
                                    {' | '}
                                    <button className="text-red-500 hover:text-red-800" onClick={() => alert('Supprimer la question')}>
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end">
                <Link to="/new-question" className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                    Ajouter une question
                </Link>
            </div>
        </div>
    );
};

export default QuestionnaireDetail;
