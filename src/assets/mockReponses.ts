import { ReponsesI } from "../interfaces/Reponses";

export const mockReponses: ReponsesI[] = [
    {
        id_response: 1,
        id_question: 1,
        id_stagiaire: 1,
        reponses_stagiaire: [0],
        date_created: "2023-01-01",
        date_modified: "2023-01-01",
    },
    {
        id_response: 2,
        id_question: 2,
        id_stagiaire: 1,
        reponses_stagiaire: [0, 1],
        date_created: "2023-01-02",
        date_modified: "2023-01-02",
    },
];
