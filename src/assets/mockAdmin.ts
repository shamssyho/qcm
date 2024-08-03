import { mockQuestionnaire } from "./mockQuestionnaires";
import { AdminI } from "../interfaces/AdminI";

export const mockAdmins: AdminI[] = [
    {
        id_admin: 1,
        email: "admin1@example.com",
        nom: "Admin",
        prenom: "One",
        password: "adminpass1",
        date_created: "2023-01-01",
        date_modified: "2023-01-01",
        active: true,
        questionnaires: mockQuestionnaire.filter((q) => q.id_admin === 1),
    },
    {
        id_admin: 2,
        email: "admin2@example.com",
        nom: "Admin",
        prenom: "Two",
        password: "adminpass2",
        date_created: "2023-01-02",
        date_modified: "2023-01-02",
        active: true,
        questionnaires: mockQuestionnaire.filter((q) => q.id_admin === 2),
    },
];
