// components/newQuestion/NewQuestion.tsx
import React, { useState } from 'react';
import { useQuestions } from '../../services/QuestionContext';

const NewQuestion: React.FC = () => {
    const { addQuestion } = useQuestions();
    const [questionText, setQuestionText] = useState('');
    const [numberOfAnswers, setNumberOfAnswers] = useState(2);
    const [answers, setAnswers] = useState<string[]>(['', '']);
    const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);

    const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuestionText(e.target.value);
    };

    const handleNumberOfAnswersChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newNumberOfAnswers = parseInt(e.target.value, 10);
        setNumberOfAnswers(newNumberOfAnswers);

        // Adjust the answers array based on the new number of answers
        if (newNumberOfAnswers > answers.length) {
            setAnswers([...answers, ...Array(newNumberOfAnswers - answers.length).fill('')]);
        } else {
            setAnswers(answers.slice(0, newNumberOfAnswers));
        }
    };

    const handleAnswerChange = (index: number, value: string) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handleCorrectAnswerChange = (index: number) => {
        setCorrectAnswers(prevCorrectAnswers => {
            if (prevCorrectAnswers.includes(index)) {
                return prevCorrectAnswers.filter(answerIndex => answerIndex !== index);
            } else {
                return [...prevCorrectAnswers, index];
            }
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (correctAnswers.length === 0) {
            alert('Veuillez sélectionner au moins une bonne réponse.');
            return;
        }

        const newQuestion = {
            id_question: Date.now(), // Utiliser un ID unique basé sur le timestamp
            id_questionnaire: 1, // Vous pouvez définir cette valeur dynamiquement selon vos besoins
            texte_question: questionText,
            nbre_reponses: numberOfAnswers,
            choix: answers,
            bonne_reponse: correctAnswers,
            date_created: new Date().toISOString(),
            date_modified: new Date().toISOString()
        };

        addQuestion(newQuestion);

        // Réinitialiser le formulaire après la soumission
        setQuestionText('');
        setNumberOfAnswers(2);
        setAnswers(['', '']);
        setCorrectAnswers([]);
    };

    return (
        <div className="p-5 bg-gray-200 mx-auto my-0 mt-24 rounded-2xl text-gray-800 w-11/12 md:w-2/3">
            <h2 className="text-3xl font-bold mb-5">Créer une Nouvelle Question</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-2">Question:</label>
                    <input
                        type="text"
                        value={questionText}
                        onChange={handleQuestionChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-2">Nombre de Réponses:</label>
                    <select
                        value={numberOfAnswers}
                        onChange={handleNumberOfAnswersChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        {[2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>
                {answers.map((answer, index) => (
                    <div key={index} className="mb-4">
                        <label className="block text-gray-600 mb-2">Réponse {index + 1}:</label>
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={answer}
                                onChange={(e) => handleAnswerChange(index, e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                            <input
                                type="checkbox"
                                checked={correctAnswers.includes(index)}
                                onChange={() => handleCorrectAnswerChange(index)}
                                className="ml-4"
                                required
                            />
                            <span className="ml-2">Bonne Réponse</span>
                        </div>
                    </div>
                ))}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Valider
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewQuestion;
