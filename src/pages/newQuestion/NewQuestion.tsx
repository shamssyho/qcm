import './NewQuestion.css';
import { useState } from 'react';

type ResponseType = {
    text: string;
    isCorrect: boolean;
};

const NewQuestion: React.FC = () => {
    const [question, setQuestion] = useState('');
    const [numResponses, setNumResponses] = useState(3);
    const [responses, setResponses] = useState<ResponseType[]>(Array(numResponses).fill({ text: '', isCorrect: false }));
    const [error, setError] = useState<string | null>(null);

    const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.target.value);
    };

    const handleNumResponsesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value >= 1 && value <= 5) {
            setNumResponses(value);
            setResponses(Array(value).fill({ text: '', isCorrect: false }));
            setError(null);
        } else {
            setError('Le nombre de réponses doit être compris entre 1 et 5.');
        }
    };

    const handleResponseChange = (index: number, field: string, value: unknown) => {
        const newResponses = [...responses];
        newResponses[index] = { ...newResponses[index], [field]: value };
        setResponses(newResponses);
    };

    const handleAddResponse = () => {
        if (responses.length < 5) {
            setResponses([...responses, { text: '', isCorrect: false }]);
            setNumResponses(numResponses + 1);
        } else {
            setError('Le nombre maximum de réponses est 5.');
        }
    };

    const handleRemoveResponse = (index: number) => {
        const newResponses = responses.filter((_, i) => i !== index);
        setResponses(newResponses);
        setNumResponses(numResponses - 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ question, responses });
    };

    return (
        <div className="form-container">
            <h2>Créér une question</h2>
            <form className='form' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Question</label>
                    <input type="text" value={question} onChange={handleQuestionChange} />
                </div>
                <div className="form-group label-form-group">
                    <label>Nombre de réponses</label>
                    <input className='input-form-group'
                        type="number"
                        min="1"
                        max="5"
                        value={numResponses}
                        onChange={handleNumResponsesChange}
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                {responses.map((response, index) => (
                    <div className="response-group" key={index}>
                        <div className="form-group input-with-button">
                            <label>Réponse {index + 1}</label>
                            <input
                                className="input-response"
                                type="text"
                                value={response.text}
                                onChange={(e) => handleResponseChange(index, 'text', e.target.value)}
                            />
                            <button className="remove-button" type="button" onClick={() => handleRemoveResponse(index)}>
                                🗑️
                            </button>
                        </div>
                        <div className="form-group-checkbox">
                            <label>Marquer comme :</label>
                            <label>
                                <input
                                    type="radio"
                                    name={`response-${index}`}
                                    checked={response.isCorrect}
                                    onChange={() => handleResponseChange(index, 'isCorrect', true)}
                                />
                                Bonne réponse
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name={`response-${index}`}
                                    checked={!response.isCorrect}
                                    onChange={() => handleResponseChange(index, 'isCorrect', false)}
                                />
                                Mauvaise réponse
                            </label>

                        </div>
                    </div>
                ))}
                <button type="button" onClick={handleAddResponse} className='btn-add-question'>Ajouter une réponse</button>
                <div className="button-container">
                    <button type="submit" className="questionnaire-button">Valider</button>
                </div>
            </form>
        </div>
    );
};

export default NewQuestion;
