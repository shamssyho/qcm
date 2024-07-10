import "./ListeStagiaires.css"
import React, { useState } from 'react';
import mockStagiaires from "../../assets/mockStagiares";
import { StagiaireI } from "../../interfaces/StagiaireI";
import { useNavigate } from "react-router-dom";

const ListeStagiaires: React.FC = () => {
    const [stagiaires, setStagiaires] = useState<StagiaireI[]>(mockStagiaires);
    const navigate = useNavigate();

    const handleDelete = (id: number) => {
        const updatedStagiaires = stagiaires.filter(stagiaire => stagiaire.id !== id);
        setStagiaires(updatedStagiaires);
    };

    const handleView = (id: number) => {
        navigate(`/stagiaire/${id}`);
    };
    return (
        <div className="container">
            <h1 className="title">Liste de stagiaires</h1>
            <table className="stagiaire-table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Moyenne</th>
                        <th>Date de début</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {stagiaires.map(stagiaire => (
                        <tr key={stagiaire.id}>
                            <td>{stagiaire.nom}</td>
                            <td>{stagiaire.prenom}</td>
                            <td>{stagiaire.moyenne}</td>
                            <td>{stagiaire.dateDebut}</td>
                            <td className="actions-stagiaire">
                                <button onClick={() => handleView(stagiaire.id)}>Voir</button>
                                <button onClick={() => handleDelete(stagiaire.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListeStagiaires;
