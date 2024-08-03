import { QuestionnaireI } from "../interfaces/QuestionnaireI";
import { mockQuestions } from "./mockQuestions";

export const mockQuestionnaires: QuestionnaireI[] = [
    {
        id_questionnaire: 1,
        id_admin: 1,
        name: "Questionnaire 1",
        description: "Description du questionnaire 1",
        date_created: "2023-01-01",
        date_modified: "2023-01-01",
        questions: mockQuestions.filter((q) => q.id_questionnaire === 1),
    },
    {
        id_questionnaire: 2,
        id_admin: 2,
        name: "Questionnaire 2",
        description: "Description du questionnaire 2",
        date_created: "2023-01-02",
        date_modified: "2023-01-02",
        questions: mockQuestions.filter((q) => q.id_questionnaire === 2),
    },
];
