import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteQuestion, fetchQuestionById, updateQuestion } from '../../../services/api';

const QuestionDetail: React.FC = () => {
    /* const { id } = useParams<{ id: string }>();
    const questionId = parseInt(id ?? '', 10);
    const { questions, deleteQuestion, updateQuestion } = useQuestions();
    const [question, setQuestion] = useState(null);
    const question = questions.find(q => q.id_question === questionId);
    const navigate = useNavigate();

    const initialSelectedAnswers = question ? question.bonne_reponse.map(index => question.choix[index]) : [];
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(initialSelectedAnswers);
    const [texteQuestion, setTexteQuestion] = useState(question?.texte_question || '');
    const [choix, setChoix] = useState(question?.choix || []); */
    const { id } = useParams<{ id: string }>();
    const questionId = parseInt(id, 10);
    const navigate = useNavigate();

    const [question, setQuestion] = useState(null);
    const [texteQuestion, setTexteQuestion] = useState('');
    const [choix, setChoix] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    useEffect(() => {
        const loadQuestion = async () => {
            if (!isNaN(questionId)) {
                try {
                    const fetchedQuestion = await fetchQuestionById(questionId);
                    setQuestion(fetchedQuestion);
                    setTexteQuestion(fetchedQuestion.questionTexte);
                    setChoix(fetchedQuestion.choix);
                    setSelectedAnswers(fetchedQuestion.reponsesCorrectes.map(index => fetchedQuestion.choix[index]));
                } catch (error) {
                    console.error('Failed to fetch question:', error);
                    alert('Failed to load question details.');
                }
            }
        };
        loadQuestion();
    }, [questionId]);

    if (!question) {
        return <div>Loading question details...</div>;
    }

    /* const handleSave = () => {
        const updatedQuestion = {
            ...question,
            texte_question: texteQuestion,
            choix: choix,
            bonne_reponse: choix.map((c, i) => selectedAnswers.includes(c) ? i : -1).filter(i => i !== -1),
        };

        updateQuestion(updatedQuestion);
        navigate('/questions');
    }; */

    const handleSave = async () => {
        const updatedQuestion = {
            ...question,
            questionTexte: texteQuestion,
            choix,
            reponsesCorrectes: choix.map((c, index) => selectedAnswers.includes(c) ? index : -1).filter(index => index !== -1),
        };
        try {
            await updateQuestion(question.id, updatedQuestion);
            alert('Question updated successfully!');
            navigate('/questions');
        } catch (error) {
            console.error('Failed to update question:', error);
            alert('Failed to update question.');
        }
    };

    /* const handleDelete = () => {
        deleteQuestion(question.id_question);
        navigate('/questions');
    }; */

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this question?')) {
            try {
                await deleteQuestion(question.id);
                alert('Question deleted successfully!');
                navigate('/questions');
            } catch (error) {
                console.error('Failed to delete question:', error);
                alert('Failed to delete question.');
            }
        }
    };

    /* const handleCheckboxChange = (choix: string) => {
        setSelectedAnswers(prevSelectedAnswers => {
            if (prevSelectedAnswers.includes(choix)) {
                return prevSelectedAnswers.filter(answer => answer !== choix);
            } else {
                return [...prevSelectedAnswers, choix];
            }
        });
    };*/

    const handleCheckboxChange = (choixText) => {
        setSelectedAnswers(prev => prev.includes(choixText) ? prev.filter(c => c !== choixText) : [...prev, choixText]);
    };

    const handleChoixChange = (index: number, value: string) => {
        const newChoix = [...choix];
        newChoix[index] = value;
        setChoix(newChoix);
    };

    return (
        <div className="max-w-4xl mx-auto mt-24 mb-24 p-4 bg-gray-200 shadow-md rounded-md">
            <h1 className="text-3xl font-bold text-center mb-4">Détails de la Question</h1>
            <div>
                <div className="mb-4">
                    <label className="block text-gray-600" htmlFor="idQuestionnaire">ID Questionnaire:</label>
                    <span id="idQuestionnaire" className="block text-lg font-semibold mb-4">{question.questionnaire.id}</span>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600" htmlFor="texteQuestion">Question:</label>
                    <input
                        id="texteQuestion"
                        type="text"
                        value={texteQuestion}
                        onChange={(e) => setTexteQuestion(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600" htmlFor="nombreReponses">Nombre de Réponses:</label>
                    <span id="nombreReponses" className="block text-lg font-semibold mb-4">{question.nbreReponses               }</span>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600" htmlFor="Choix">Choix:</label>
                    {choix.map((choixText, index) => (
                        <div key={index} className="flex mb-2 items-center">
                            <input
                                type="text"
                                value={choixText}
                                onChange={(e) => handleChoixChange(index, e.target.value)}
                                className="inline-block w-5/6 p-2 border border-gray-300 rounded-md"
                                id={`choix-${index}`}
                            />
                            <input
                                type="checkbox"
                                checked={selectedAnswers.includes(choixText)}
                                onChange={() => handleCheckboxChange(choixText)}
                                className="inline-block w-1/6"
                                id={`checkbox-${index}`}
                                aria-labelledby={`choix-${index}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-end space-x-4">
                    <button onClick={handleSave} className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">Sauvegarder</button>
                    <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Supprimer</button>
                </div>
            </div>
        </div>
    );
};

export default QuestionDetail;
