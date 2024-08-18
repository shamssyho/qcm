// mockQuestionnaires.ts
import { QuestionnairesI } from "../interfaces/QuestionnaireI";

export const mockQuestionnaires: QuestionnairesI[] = [
    {
        id_questionnaire: 101,
        id_admin: 1,
        name: "JavaScript Basics",
        description: "Introduction to JavaScript fundamentals.",
        date_created: "2023-06-01T12:00:00Z",
        date_modified: "2023-06-10T12:00:00Z",
    },
    {
        id_questionnaire: 102,
        id_admin: 2,
        name: "Advanced TypeScript",
        description: "Deep dive into advanced TypeScript concepts.",
        date_created: "2023-06-05T12:00:00Z",
        date_modified: "2023-06-12T12:00:00Z",
    },
    {
        id_questionnaire: 103,
        id_admin: 1,
        name: "React Basics",
        description:
            "Learn the basics of React and component-based architecture.",
        date_created: "2023-06-08T12:00:00Z",
        date_modified: "2023-06-15T12:00:00Z",
    },
];
