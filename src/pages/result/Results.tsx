import React from 'react';
import ResultItem from '../../components/result/ResultItem';
import { mockResults } from '../../assets/mockResults';
import { useNavigate } from 'react-router-dom';


const Results: React.FC = () => {
    const navigate = useNavigate();

    const handleReview = () => {
        navigate('/');
    };

    return (
        <div className="p-5 bg-gray-200 mx-auto my-0 mt-24 rounded-2xl text-gray-800 w-11/12 md:w-2/3">

            <div className="max-w-4xl mx-auto p-4">
                <h1 className="text-xl font-bold mb-4">Résultats du Questionnaire</h1>
                {mockResults.map((result, index) => (
                    <ResultItem
                        key={index}
                        questionText={result.questionText}
                        userAnswer={result.userAnswer}
                        correctAnswer={result.correctAnswer}
                        isCorrect={result.isCorrect}
                    />
                ))}
                <div className="mt-4">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded " onClick={handleReview}> Revoir le Questionnaire</button>
                </div>
            </div>
        </div>
    );
};

export default Results;
