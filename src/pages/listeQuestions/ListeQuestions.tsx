import { Link } from "react-router-dom";
import mockQuestions from "../../assets/mockQuestions"
import { QuestionsI } from "../../interfaces/QuestionsI";
import './ListeQuestions.css'
export default function ListeQuestions() {
    const handleDelete = (id: number) => {
        // Logique de suppression de la question
        console.log(`Supprimer la question avec l'ID: ${id}`);
    };
    return (
        <div className="question-table-container">
            <h2>Liste des Questions</h2>
            <table className="question-table">
                <thead>
                    <tr>
                        <th>ID Question</th>
                        <th>Texte de la Question</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {mockQuestions.map((question: QuestionsI) => (
                        <tr key={question.id_question}>
                            <td>{question.id_question}</td>
                            <td>{question.texte_question}</td>
                            <td>
                                <Link to={`/questions/${question.id_question}`}>Voir</Link>
                                {' | '}
                                <button onClick={() => handleDelete(question.id_question)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

