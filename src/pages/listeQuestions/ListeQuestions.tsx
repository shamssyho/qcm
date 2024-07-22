import { Link } from "react-router-dom";
import mockQuestions from "../../assets/mockQuestions"
import { QuestionsI } from "../../interfaces/QuestionsI";
export default function ListeQuestions() {
    const handleDelete = (id: number) => {
        // Logique de suppression de la question
        console.log(`Supprimer la question avec l'ID: ${id}`);
    };
    
    return (
        <div className="m-5">
            <h2 className="mb-4">Liste des Questions</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="border border-gray-300 p-2">ID Question</th>
                        <th className="border border-gray-300 p-2">Texte de la Question</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {mockQuestions.map((question: QuestionsI) => (
                        <tr key={question.id_question} className="even:bg-gray-100 odd:bg-white hover:bg-gray-300">
                            <td className="border border-gray-300 p-2">{question.id_question}</td>
                            <td className="border border-gray-300 p-2">{question.texte_question}</td>
                            <td className="border border-gray-300 p-2">
                                <Link to={`/questions/${question.id_question}`} className="text-blue-500 hover:text-blue-800">Voir</Link>
                                {' | '}
                                <button onClick={() => handleDelete(question.id_question)} className="text-red-500 hover:text-red-800">Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

