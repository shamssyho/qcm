// mockStagiaires.ts
import { StagiairesI } from "../interfaces/StagiairesI";

export const mockStagiaires: StagiairesI[] = [
    {
        id_stagiaire: 1,
        email: "john.doe@example.com",
        nom: "Doe",
        prenom: "John",
        password: "hashed_password_1",
        date_created: "2023-05-20T10:00:00Z",
        date_modified: "2023-06-01T10:00:00Z",
        active: true,
    },
    {
        id_stagiaire: 2,
        email: "anna.smith@example.com",
        nom: "Smith",
        prenom: "Anna",
        password: "hashed_password_2",
        date_created: "2023-05-22T11:00:00Z",
        date_modified: "2023-06-02T11:00:00Z",
        active: true,
    },
    {
        id_stagiaire: 3,
        email: "michael.brown@example.com",
        nom: "Brown",
        prenom: "Michael",
        password: "hashed_password_3",
        date_created: "2023-05-25T09:00:00Z",
        date_modified: "2023-06-03T09:00:00Z",
        active: true,
    },
];
