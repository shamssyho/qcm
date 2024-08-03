import { StagiairesI } from "../interfaces/StagiairesI";

const mockStagiaires: StagiairesI[] = [
    {
        id_stagiaire: 1,
        email: "stagiaire1@example.com",
        nom: "Doe",
        prenom: "John",
        password: "password1",
        date_created: "2023-01-01",
        date_modified: "2023-01-01",
        active: true,
        questionnaires: [
            { id_questionnaire: 1, resultat: 75 },
            { id_questionnaire: 2, resultat: 80 },
        ],
    },
    {
        id_stagiaire: 2,
        email: "stagiaire2@example.com",
        nom: "Smith",
        prenom: "Jane",
        password: "password2",
        date_created: "2023-01-02",
        date_modified: "2023-01-02",
        active: true,
        questionnaires: [
            { id_questionnaire: 1, resultat: 85 },
            { id_questionnaire: 2, resultat: 90 },
        ],
    },
];

export default mockStagiaires;
