interface Result {
    questionId: number;
    questionText: string;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
}

export const mockResults: Result[] = [
    {
        questionId: 1,
        questionText: "Quel est le principal objectif de TypeScript ?",
        userAnswer: "Fournir une typage statique à JavaScript",
        correctAnswer: "Fournir une typage statique à JavaScript",
        isCorrect: true,
    },
    {
        questionId: 2,
        questionText:
            "Quel mot-clé est utilisé pour déclarer une variable en JavaScript ?",
        userAnswer: "var",
        correctAnswer: "var, let, const",
        isCorrect: true,
    },
    {
        questionId: 3,
        questionText: "Quel est le but principal de Java ?",
        userAnswer: "Développement d'applications multiplateformes",
        correctAnswer: "Développement d'applications multiplateformes",
        isCorrect: true,
    },
    {
        questionId: 4,
        questionText: "Quelle est la structure de base d'une classe en Java ?",
        userAnswer: "class NomClasse { // corps de la classe }",
        correctAnswer: "class NomClasse { // corps de la classe }",
        isCorrect: true,
    },
];
