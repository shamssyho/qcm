export interface QuestionsI {
    id_question: number;
    id_questionnaire: number;
    texte_question: string;
    nbre_reponses: number;
    choix: string[];
    bonne_reponse: number[];
    date_created: string;
    date_modified: string;
}
