export interface StagiaireQuestionnaire {
    questionnaireId: number;
    note: number;
}
export interface StagiaireI {
    id: number;
    nom: string;
    prenom: string;
    moyenne: number;
    dateDebut: string;
    questionnaires: StagiaireQuestionnaire[]; // on ne doit pas l'avoir
}
