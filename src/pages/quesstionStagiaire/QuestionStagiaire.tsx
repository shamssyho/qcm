import React, { useState } from 'react';
import Option from '../../components/options/Options';
import mockQuestions from '../../assets/mockQuestions';

const QuestionPageStagiaire: React.FC = () => {
    const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

    const question = mockQuestions[1];

    const handleOptionClick = (index: number) => {
        if (question.isMultiple) {
            setSelectedOptions((prev) =>
                prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
            );
        } else {
            setSelectedOptions([index]);
        }
    };
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">Question 1</h1>
            <div className="bg-gray-100 p-6 rounded-md">
                <p className="mb-4">{question.texte_question}</p>
                {question.choix.map((option, index) => (
                    <Option
                        key={index}
                        text={option}
                        color={selectedOptions.includes(index) ? 'border-green-500' : 'border-gray-300'}
                        response={selectedOptions.includes(index)}
                        onClick={() => handleOptionClick(index)}
                        isMultiple={question.isMultiple || false}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {[...Array(4)].map((_, index) => (
                    <span key={index} className={`mx-1 ${index === 0 ? 'text-black' : 'text-gray-500'}`}>
                        {index + 1}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default QuestionPageStagiaire;
