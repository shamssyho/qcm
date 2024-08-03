import { QuestionnaireI } from "./QuestionnaireI";

export interface AdminI {
    id_admin: number;
    email: string;
    nom: string;
    prenom: string;
    password: string;
    date_created: string;
    date_modified: string;
    active: boolean;
    questionnaires: QuestionnaireI[]; // Liste des questionnaires créés par l'admin
}
