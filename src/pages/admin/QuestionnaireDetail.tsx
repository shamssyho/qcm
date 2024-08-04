// components/questionnaireDetail/QuestionnaireDetail.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuestions } from '../../services/QuestionContext';

const QuestionnaireDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const questionnaireId = parseInt(id ?? '', 10);
    const { questions } = useQuestions();

    const filteredQuestions = questions.filter(q => q.id_questionnaire === questionnaireId);

    return (
        <div className="p-5 bg-gray-200 mx-auto my-0 mt-24 rounded-2xl text-gray-800 w-11/12 md:w-2/3">
            <h2 className="text-3xl font-bold mb-5">Détail du Questionnaire</h2>
            <table className='w-full border-collapse'>
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Intitulé</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredQuestions.map((question) => (
                        <tr className="even:bg-gray-100 odd:bg-white hover:bg-gray-300" key={question.id_question}>
                            <td className="border border-gray-300 p-2">{question.texte_question}</td>
                            <td className="border border-gray-300 p-2">
                                <Link to='#' onClick={() => alert('Edit ' + question.texte_question)} className="text-blue-500 hover:text-blue-800">Modifier</Link>
                                {" | "}
                                <button onClick={() => alert('Delete ' + question.texte_question)} className="text-red-500 hover:text-red-800">Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4 flex justify-end">
                <Link to="/new-question" className="bg-purple-700 text-white p-2 rounded-lg hover:bg-purple-800">
                    Ajouter une Question
                </Link>
            </div>
        </div>
    );
};

export default QuestionnaireDetail;
