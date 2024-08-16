// services/QuestionContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { mockQuestions } from '../assets/mockQuestions';
import { QuestionsI } from '../interfaces/QuestionsI';

interface QuestionContextProps {
    questions: QuestionsI[];
    addQuestion: (question: QuestionsI) => void;
    deleteQuestion: (id: number) => void;
}

const QuestionContext = createContext<QuestionContextProps | undefined>(undefined);

export const useQuestions = () => {
    const context = useContext(QuestionContext);
    if (!context) {
        throw new Error('useQuestions must be used within a QuestionProvider');
    }
    return context;
};

export const QuestionsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [questions, setQuestions] = useState<QuestionsI[]>(mockQuestions);

    const addQuestion = (question: QuestionsI) => {
        setQuestions([...questions, question]);
    };

    const deleteQuestion = (id: number) => {
        setQuestions(questions.filter(q => q.id_question !== id));
    };

    return (
        <QuestionContext.Provider value={{ questions, addQuestion, deleteQuestion }}>
            {children}
        </QuestionContext.Provider>
    );
};
