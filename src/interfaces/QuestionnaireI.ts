import { QuestionsI } from "./QuestionsI";

export interface QuestionnaireI {
    id_questionnaire: number;
    id_admin: number;
    name: string;
    description: string;
    date_created: string;
    date_modified: string;
    questions: QuestionsI[];
}
