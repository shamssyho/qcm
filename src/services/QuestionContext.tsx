// services/QuestionContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { QuestionsI } from '../interfaces/QuestionsI';
import { mockQuestions } from '../assets/mockQuestions';

interface QuestionContextProps {
    questions: QuestionsI[];
    addQuestion: (newQuestion: QuestionsI) => void;
    updateQuestion: (updatedQuestion: QuestionsI) => void;
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

export const QuestionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [questions, setQuestions] = useState<QuestionsI[]>(mockQuestions);

    const addQuestion = (newQuestion: QuestionsI) => {
        setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
    };

    const updateQuestion = (updatedQuestion: QuestionsI) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((q) => (q.id_question === updatedQuestion.id_question ? updatedQuestion : q))
        );
    };

    const deleteQuestion = (id: number) => {
        setQuestions((prevQuestions) => prevQuestions.filter((q) => q.id_question !== id));
    };

    return (
        <QuestionContext.Provider value={{ questions, addQuestion, updateQuestion, deleteQuestion }}>
            {children}
        </QuestionContext.Provider>
    );
};
