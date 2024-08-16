import { QuestionsI } from "../interfaces/QuestionsI";

export const mockQuestions: QuestionsI[] = [
    {
        id_question: 1,
        id_questionnaire: 1,
        texte_question: "Quel est le principal objectif de TypeScript ?",
        nbre_reponses: 3,
        choix: [
            "Fournir une typage statique à JavaScript",
            "Remplacer JavaScript",
            "Améliorer les performances des navigateurs",
        ],
        bonne_reponse: [0],
        date_created: "2023-01-01",
        date_modified: "2023-01-01",
    },
    {
        id_question: 2,
        id_questionnaire: 1,
        texte_question:
            "Quel mot-clé est utilisé pour déclarer une variable en JavaScript ?",
        nbre_reponses: 3,
        choix: ["var", "let", "const"],
        bonne_reponse: [0, 1, 2],
        date_created: "2023-01-02",
        date_modified: "2023-01-02",
    },
    {
        id_question: 3,
        id_questionnaire: 2,
        texte_question: "Quel framework utilisé en frond end ?",
        nbre_reponses: 3,
        choix: ["VueJs", "ReactJs", "Angular"],
        bonne_reponse: [0, 1, 2],
        date_created: "2023-01-02",
        date_modified: "2023-01-02",
    },
];
