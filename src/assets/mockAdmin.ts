import { AdminI } from "../interfaces/AdminI";

const mockAdmins: AdminI[] = [
    {
        id_admin: 1,
        email: "admin1@example.com",
        nom: "Admin",
        prenom: "One",
        password: "adminpassword1",
        date_created: "2023-01-01",
        date_modified: "2023-01-01",
        active: true,
    },
];

export default mockAdmins;
