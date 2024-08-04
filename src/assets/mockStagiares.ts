import { StagiairesI } from "../interfaces/StagiairesI";

const mockStagiaires: StagiairesI[] = [
    {
        id_stagiaire: 1,
        email: "stagiaire1@example.com",
        nom: "Dupont",
        prenom: "Jean",
        password: "password1",
        date_created: "2023-01-01",
        date_modified: "2023-01-01",
        active: true,
    },
    {
        id_stagiaire: 2,
        email: "stagiaire2@example.com",
        nom: "Martin",
        prenom: "Marie",
        password: "password2",
        date_created: "2023-01-02",
        date_modified: "2023-01-02",
        active: true,
    },
];

export default mockStagiaires;
