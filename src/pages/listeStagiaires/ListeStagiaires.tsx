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
        <div className="max-w-6xl mx-auto mt-10 p-5 bg-white shadow-lg rounded">
            <h1 className="text-3xl font-bold text-center mb-10">Liste de stagiaires</h1>
            <table className="w-full text-sm text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3 px-6 text-center">Nom</th>
                        <th scope="col" className="py-3 px-6 text-center">Prénom</th>
                        <th scope="col" className="py-3 px-6 text-center">Moyenne</th>
                        <th scope="col" className="py-3 px-6 text-center">Date de début</th>
                        <th scope="col" className="py-3 px-6 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {stagiaires.map(stagiaire => (
                        <tr key={stagiaire.id} className="border-b">
                            <td className="py-4 px-6 text-center">{stagiaire.nom}</td>
                            <td className="py-4 px-6 text-center">{stagiaire.prenom}</td>
                            <td className="py-4 px-6 text-center">{stagiaire.moyenne}</td>
                            <td className="py-4 px-6 text-center">{stagiaire.dateDebut}</td>
                            <td className="py-4 px-6 text-center space-x-2">
                                <button className="text-blue-600 hover:text-blue-900" onClick={() => handleView(stagiaire.id)}>Voir</button>
                                <button className="text-red-600 hover:text-red-900" onClick={() => handleDelete(stagiaire.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListeStagiaires;
