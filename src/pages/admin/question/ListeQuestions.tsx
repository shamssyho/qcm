import { Link } from "react-router-dom";
import { useQuestions } from '../../../services/QuestionContext';

export default function ListeQuestions() {
    const { questions, deleteQuestion } = useQuestions();

    return (
        <div className="p-5 bg-gray-200 mx-auto my-0 mt-24 rounded-2xl text-gray-800 w-11/12 md:w-2/3">
            <div className="m-5">
                <h1 className="text-3xl font-bold text-center mb-8">Liste des Questions</h1>
                {questions.length === 0 ? (
                    <p className="text-center text-red-500">Aucune question disponible.</p>
                ) : (
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="border border-gray-300 p-2">ID Question</th>
                                <th className="border border-gray-300 p-2">Texte de la Question</th>
                                <th className="border border-gray-300 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map((question) => (
                                <tr key={question.id_question} className="even:bg-gray-100 odd:bg-white hover:bg-gray-300">
                                    <td className="border border-gray-300 p-2">{question.id_question}</td>
                                    <td className="border border-gray-300 p-2">{question.texte_question}</td>
                                    <td className="border border-gray-300 p-2">
                                        <Link to={`/questions/${question.id_question}`} className="text-blue-500 hover:text-blue-800">Voir</Link>
                                        {' | '}
                                        <button
                                            onClick={() => deleteQuestion(question.id_question)}
                                            className="text-red-500 hover:text-red-800"
                                        >
                                            Supprimer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
