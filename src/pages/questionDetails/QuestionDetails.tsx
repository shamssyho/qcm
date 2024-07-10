import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockQuestions from '../../assets/mockQuestions';
import './QuestionDetails.css';

const QuestionDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const questionId = parseInt(id ?? '', 10);
    const question = mockQuestions.find(q => q.id_question === questionId);
    const navigate = useNavigate();

    // Convertir les indices des bonnes réponses en valeurs de choix
    const initialSelectedAnswers = question ? question.bonne_reponse.map(index => question.choix[index]) : [];

    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(initialSelectedAnswers);

    if (!question) {
        return <div>Question non trouvée</div>;
    }

    const handleSave = () => {
        // Logique de sauvegarde de la question
        console.log(`Sauvegarder les modifications pour la question avec l'ID: ${question.id_question}`);
        console.log(`Bonnes réponses sélectionnées: ${selectedAnswers}`);
    };

    const handleDelete = () => {
        // Logique de suppression de la question
        console.log(`Supprimer la question avec l'ID: ${question.id_question}`);
        navigate('/'); // Retour à la liste des questions après suppression
    };

    const handleCheckboxChange = (choix: string) => {
        setSelectedAnswers(prevSelectedAnswers => {
            if (prevSelectedAnswers.includes(choix)) {
                return prevSelectedAnswers.filter(answer => answer !== choix);
            } else {
                return [...prevSelectedAnswers, choix];
            }
        });
    };

    return (
        <div className="container">
            <h1 className="title">Détails de la Question</h1>
            <div>
                <div className="mb-4">
                    <label className="label" htmlFor="idQuestionnaire">ID Questionnaire:</label>
                    <span id="idQuestionnaire" className="value">{question.id_questionnaire}</span>
                </div>
                <div className="mb-4">
                    <label className="label" htmlFor="texteQuestion">Question:</label>
                    <input id="texteQuestion" type="text" defaultValue={question.texte_question} className="input" />
                </div>
                <div className="mb-4">
                    <label className="label" htmlFor="nombreReponses">Nombre de Réponses:</label>
                    <span id="nombreReponses" className="value">{question.nbre_reponses}</span>
                </div>
                <div className="mb-4">
                    <label className="label" htmlFor="Choix">Choix:</label>
                    {question.choix.map((choix, index) => (
                        <div key={index} className="choice-container">
                            <input
                                type="text"
                                defaultValue={choix}
                                className="input"
                                style={{ display: 'inline-block', width: '85%' }}
                                id={`choix-${index}`}
                            />
                            <input
                                type="checkbox"
                                checked={selectedAnswers.includes(choix)}
                                onChange={() => handleCheckboxChange(choix)}
                                style={{ display: 'inline-block', width: '15%' }}
                                id={`checkbox-${index}`}
                                aria-labelledby={`choix-${index}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="mb-4">
                    <label className="label" htmlFor="bonneReponse">Bonne Réponse:</label>
                    <ul>
                        {selectedAnswers.length > 0 ? (
                            selectedAnswers.map((reponse, index) => (
                                <li key={index}>
                                    {reponse}
                                </li>
                            ))
                        ) : (
                            <p>Aucune réponse sélectionnée</p >
                        )}
                    </ul>
                </div>
            </div>
            <div className="button-container">
                <button onClick={handleSave} className="button button-save">Sauvegarder</button>
                <button onClick={handleDelete} className="button button-delete">Supprimer</button>
            </div>
        </div>
    );
};

export default QuestionDetail;
