import { QuestionsI } from "../interfaces/QuestionsI";
const mockQuestions: QuestionsI[] = [
    {
        id_question: 1,
        id_questionnaire: 4,
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
        texte_question: "Quel est le but principal de Java ?",
        nbre_reponses: 3,
        choix: [
            "Développement de systèmes embarqués",
            "Développement d'applications multiplateformes",
            "Développement d'applications mobiles uniquement",
        ],
        bonne_reponse: [1],
        date_created: "2023-01-03",
        date_modified: "2023-01-03",
    },
    {
        id_question: 4,
        id_questionnaire: 2,
        texte_question:
            "Quelle est la structure de base d'une classe en Java ?",
        nbre_reponses: 3,
        choix: [
            "class NomClasse { // corps de la classe }",
            "struct NomClasse { // corps de la classe }",
            "function NomClasse() { // corps de la fonction }",
        ],
        bonne_reponse: [0],
        date_created: "2023-01-04",
        date_modified: "2023-01-04",
    },
    {
        id_question: 5,
        id_questionnaire: 3,
        texte_question:
            "Quelle est la syntaxe correcte pour définir une fonction en Python ?",
        nbre_reponses: 3,
        choix: [
            "def nom_fonction():",
            "function nom_fonction() {}",
            "func nom_fonction() {}",
        ],
        bonne_reponse: [0],
        date_created: "2023-01-05",
        date_modified: "2023-01-05",
    },
    {
        id_question: 6,
        id_questionnaire: 3,
        texte_question:
            "Quel mot-clé est utilisé pour créer une boucle en Python ?",
        nbre_reponses: 3,
        choix: ["for", "while", "loop"],
        bonne_reponse: [0, 1],
        date_created: "2023-01-06",
        date_modified: "2023-01-06",
    },
    {
        id_question: 7,
        id_questionnaire: 4,
        texte_question:
            "Quel est un aspect clé de la programmation en Haskell ?",
        nbre_reponses: 3,
        choix: [
            "Programmation impérative",
            "Programmation fonctionnelle",
            "Programmation orientée objet",
        ],
        bonne_reponse: [1],
        date_created: "2023-01-07",
        date_modified: "2023-01-07",
    },
    {
        id_question: 8,
        id_questionnaire: 4,
        texte_question: "Comment déclare-t-on une fonction en Haskell ?",
        nbre_reponses: 3,
        choix: [
            "nomFonction = \\param -> expression",
            "def nomFonction(param): expression",
            "function nomFonction(param) { return expression; }",
        ],
        bonne_reponse: [0],
        date_created: "2023-01-08",
        date_modified: "2023-01-08",
    },
];

export default mockQuestions;
