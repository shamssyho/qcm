import './NewQuestion.css';
import { ChangeEvent, useState } from 'react';

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
        <div className="max-w-4xl mx-auto mt-12 mb-12 p-5 rounded-xl bg-gray-200">
            <h2 className="text-center text-3xl font-bold mb-12 mt-10">Créér une question</h2>
            <form className='px-12' onSubmit={handleSubmit}>
                <div className="flex items-center mb-12 space-x-6">
                        <div className="flex-1">
                            <label className="block mb-2">Question</label>
                            <input type="text" value={question} onChange={handleQuestionChange} className="border border-black w-full p-2 rounded-xl" />
                        </div>
                        <div className="w-40">
                            <label className="block mb-2">Nombre de réponses</label>
                            <input type="number"
                                className="border border-black w-full p-2 rounded-xl text-center"
                                min="1"
                                max="5"
                                value={numResponses}
                                onChange={handleNumResponsesChange}
                            />
                        </div>
                    </div>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {responses.map((response, index) => (
                    <div className="mb-10" key={index}>
                        <div className="flex items-center space-x-2 w-full mb-7">
                            <label className="min-w-max font-bold">Réponse {index + 1}</label>
                            <div className="flex flex-grow items-center">
                                <input
                                    type="text"
                                    value={response.text}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleResponseChange(index, 'text', e.target.value)}
                                    className="border border-black rounded-xl flex-grow p-2"
                                />
                                <button 
                                    className="text-red-600 text-xl ml-2 bg-transparent border-none" 
                                    type="button" 
                                    onClick={() => handleRemoveResponse(index)}
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center space-x-6">
                            <label className='font-semibold'>Marquer comme :</label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name={`response-${index}`}
                                    checked={response.isCorrect}
                                    onChange={() => handleResponseChange(index, 'isCorrect', true)}
                                    className="mr-4" // Ajout d'une marge à droite du bouton radio
                                />
                                Bonne réponse
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name={`response-${index}`}
                                    checked={!response.isCorrect}
                                    onChange={() => handleResponseChange(index, 'isCorrect', false)}
                                    className="mr-4" // Ajout d'une marge à droite du bouton radio
                                />
                                Mauvaise réponse
                            </label>
                        </div>

                    </div>
                ))}
                <button type="button" onClick={handleAddResponse} className="block mx-auto text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-purple-800">Ajouter une réponse</button>
                <div className="text-center mt-12 mb-10">
                    <button type="submit" className="bg-purple-700 text-white py-3 px-10 rounded-lg hover:bg-purple-800 w-full">Valider</button>
                </div>
            </form>
        </div>
    );
};

export default NewQuestion;
