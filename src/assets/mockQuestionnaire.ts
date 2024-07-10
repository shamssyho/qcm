import { QuestionnaireI } from "../interfaces/QuestionnaireI";

const mockQuestionnaire: QuestionnaireI[] = [
    {
        id: 1,
        title: "TypeScript Basics",
        description: "Testez vos connaissances de base en TypeScript.",
        stagiaireId: [1],
    },
    {
        id: 2,
        title: "Java Basics",
        description: "Testez vos connaissances de base en Java.",
        stagiaireId: [2],
    },
    {
        id: 3,
        title: "Python Basics",
        description: "Testez vos connaissances de base en Python.",
        stagiaireId: [3],
    },
    {
        id: 4,
        title: "Haskell Basics",
        description: "Testez vos connaissances de base en Haskell.",
        stagiaireId: [1, 3],
    },
];

export default mockQuestionnaire;
