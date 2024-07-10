import { StagiaireI } from "../interfaces/StagiaireI";

const mockStagiaires: StagiaireI[] = [
    {
        id: 1,
        nom: "Dupont",
        prenom: "Jean",
        moyenne: 15.5,
        dateDebut: "2023-01-10",
        questionnaires: [
            { questionnaireId: 1, note: 15 },
            { questionnaireId: 3, note: 14 },
        ],
    },
    {
        id: 2,
        nom: "Martin",
        prenom: "Marie",
        moyenne: 17.3,
        dateDebut: "2023-02-15",
        questionnaires: [
            { questionnaireId: 1, note: 16 },
            { questionnaireId: 2, note: 18 },
        ],
    },
    {
        id: 3,
        nom: "Durand",
        prenom: "Pierre",
        moyenne: 14.0,
        dateDebut: "2023-03-20",
        questionnaires: [
            { questionnaireId: 2, note: 13 },
            { questionnaireId: 3, note: 15 },
        ],
    },
];

export default mockStagiaires;
