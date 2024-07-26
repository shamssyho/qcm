import React, { useState } from 'react';
import mockStagiaires from "../../assets/mockStagiares";
import { StagiaireI } from "../../interfaces/StagiaireI";
import { Link, useNavigate } from "react-router-dom";
import NouveauStagiaireModal from '../../components/nouveauStagiaireModal/NouveauStagiaireModal';

const ListeStagiaires: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [stagiaires, setStagiaires] = useState<StagiaireI[]>(mockStagiaires);
    const navigate = useNavigate();

    const handleDelete = (id: number) => {
        const updatedStagiaires = stagiaires.filter(stagiaire => stagiaire.id !== id);
        setStagiaires(updatedStagiaires);
    };

    const handleView = (id: number) => {
        navigate(`/stagiaire/${id}`);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveStagiaire = (newStagiaire: StagiaireI) => {
        setStagiaires([...stagiaires, newStagiaire]);
    };

    return (
        <div className="p-5 bg-gray-200 mx-auto my-0 mt-24 rounded-2xl text-gray-800 w-11/12 md:w-2/3">

            <h1 className="text-3xl font-bold text-center mb-8">Liste de stagiaires</h1>

            {isModalOpen && <NouveauStagiaireModal onClose={handleCloseModal} onSave={handleSaveStagiaire} />}
            <div className="m-5">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th scope="col" className="border border-gray-300 p-2">Nom</th>
                            <th scope="col" className="border border-gray-300 p-2">Prénom</th>
                            <th scope="col" className="border border-gray-300 p-2">Moyenne</th>
                            <th scope="col" className="border border-gray-300 p-2">Date de début</th>
                            <th scope="col" className="border border-gray-300 p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stagiaires.map(stagiaire => (
                            <tr key={stagiaire.id} className="even:bg-gray-100 odd:bg-white hover:bg-gray-300">
                                <td className="border border-gray-300 p-2">{stagiaire.nom}</td>
                                <td className="border border-gray-300 p-2">{stagiaire.prenom}</td>
                                <td className="border border-gray-300 p-2">{stagiaire.moyenne !== undefined ? stagiaire.moyenne : '--'}</td>
                                <td className="border border-gray-300 p-2">{stagiaire.dateDebut}</td>
                                <td className="border border-gray-300 p-2">
                                    <Link to="#" className="text-blue-500 hover:text-blue-800" onClick={() => handleView(stagiaire.id)}>Voir</Link>
                                    {' | '}
                                    <button className="text-red-500 hover:text-red-800" onClick={() => handleDelete(stagiaire.id)}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <br />
            <div className="flex justify-end mb-4">
                <button
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleOpenModal}
                >
                    Ajouter un stagiaire
                </button>
            </div>
        </div>
    );
};
export default ListeStagiaires;
