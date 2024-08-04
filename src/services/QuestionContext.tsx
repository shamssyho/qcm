// context/QuestionsContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { QuestionsI } from '../interfaces/QuestionsI';
import { mockQuestions } from '../assets/mockQuestions';

interface QuestionsContextProps {
    questions: QuestionsI[];
    addQuestion: (newQuestion: QuestionsI) => void;
}

const QuestionsContext = createContext<QuestionsContextProps | undefined>(undefined);

export const QuestionsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [questions, setQuestions] = useState<QuestionsI[]>(mockQuestions);

    const addQuestion = (newQuestion: QuestionsI) => {
        setQuestions(prevQuestions => [...prevQuestions, newQuestion]);
    };

    return (
        <QuestionsContext.Provider value={{ questions, addQuestion }}>
            {children}
        </QuestionsContext.Provider>
    );
};

export const useQuestions = (): QuestionsContextProps => {
    const context = useContext(QuestionsContext);
    if (!context) {
        throw new Error('useQuestions must be used within a QuestionsProvider');
    }
    return context;
};
