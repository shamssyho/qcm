// mockQuestions.ts
import { QuestionsI } from "../interfaces/QuestionsI";

export const mockQuestions: QuestionsI[] = [
    {
        id_question: 1,
        id_questionnaire: 101,
        texte_question:
            'What is the correct syntax for referring to an external script called "app.js"?',
        nbre_reponses: 3,
        choix: [
            '<script src="app.js">',
            '<script href="app.js">',
            '<script ref="app.js">',
        ],
        bonne_reponse: [0],
        date_created: "2023-06-01T14:00:00Z",
        date_modified: "2023-06-05T14:00:00Z",
    },
    {
        id_question: 2,
        id_questionnaire: 102,
        texte_question:
            "Which of the following is true about TypeScript Generics?",
        nbre_reponses: 3,
        choix: [
            "Generics allow code reusability",
            "Generics increase runtime errors",
            "Generics are limited to classes only",
        ],
        bonne_reponse: [0],
        date_created: "2023-06-03T15:00:00Z",
        date_modified: "2023-06-07T15:00:00Z",
    },
    {
        id_question: 3,
        id_questionnaire: 103,
        texte_question: "What is JSX in React?",
        nbre_reponses: 2,
        choix: [
            "A JavaScript syntax extension",
            "A React component rendering method",
        ],
        bonne_reponse: [0],
        date_created: "2023-06-05T16:00:00Z",
        date_modified: "2023-06-09T16:00:00Z",
    },
];
