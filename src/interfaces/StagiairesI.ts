// src/interfaces/StagiairesI.ts
export interface StagiairesI {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;  // Optionnel car vous ne voulez peut-être pas le gérer sur le client après création
    dateCreated: string;
    active: boolean;
}
