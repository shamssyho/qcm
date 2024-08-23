import React, { useEffect, useState } from 'react';
import { StagiairesI } from '../../../interfaces/StagiairesI';
import { Link, useNavigate } from "react-router-dom";
import NouveauStagiaireModal from './NouveauStagiaireModal';
import { addStagiaire, deactivateStagiaire, fetchAllStagiaires, updateStagiaire } from '../../../services/api';

const ListeStagiaires: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [stagiaires, setStagiaires] = useState<StagiairesI[]>([]);
    const [currentStagiaire, setCurrentStagiaire] = useState<StagiairesI | undefined>(undefined);
    const navigate = useNavigate();

    useEffect(() => {
        const loadStagiaires = async () => {
            const activeStagiaires = await fetchAllStagiaires();
            setStagiaires(activeStagiaires.filter(stagiaire => stagiaire.active));
        };

        loadStagiaires();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            const success = await deactivateStagiaire(id);
            if (success) {
                const updatedStagiaires = stagiaires.filter(stagiaire => stagiaire.id !== id);
                setStagiaires(updatedStagiaires);
            }
        } catch (error) {
            console.error('Error deactivating stagiaire:', error);
            alert('Failed to deactivate stagiaire');
        }
    };

    const handleView = (id: number) => {
        navigate(`/stagiaire/${id}`);
    };

    /* const handleOpenModal = (stagiaire?: StagiairesI) => {
        if (stagiaire) {
            setCurrentStagiaire(stagiaire);
            setIsEditMode(true);
        } else {
            setCurrentStagiaire(null);
            setIsEditMode(false);
        }
        setIsModalOpen(true);
    }; */

    const handleOpenModal = (stagiaire?: StagiairesI) => {
        if (stagiaire) {
            // Format the date for the input[type="date"] if necessary
            const formattedDate = stagiaire.dateCreated.split('T')[0]; // Adjust based on your actual date format
            setCurrentStagiaire({ ...stagiaire, dateCreated: formattedDate });
            setIsEditMode(true);
        } else {
            setCurrentStagiaire({ id: 0, firstName: '', lastName: '', email: '', dateCreated: getCurrentDate(), active: true }); // Ensure all fields are set to default or empty
            setIsEditMode(false);
        }
        setIsModalOpen(true);
    };
    
    function getCurrentDate() {
        const today = new Date();
        return `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    }
    

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    /* const handleSaveStagiaire = (newStagiaire: StagiairesI) => {
        // Ajouter l'appel API pour sauvegarder le stagiaire
        if (isEditMode && currentStagiaire) {
            const updatedStagiaires = stagiaires.map(stagiaire =>
                stagiaire.id === currentStagiaire.id ? newStagiaire : stagiaire
            );
            setStagiaires(updatedStagiaires);
        } else {
            setStagiaires([...stagiaires, newStagiaire]);
        }
        handleCloseModal();
    }; */

    const handleSaveStagiaire = async (newStagiaire: StagiairesI) => {

        try {
            if (isEditMode && currentStagiaire) {
                const savedStagiaire = await updateStagiaire(currentStagiaire.id, newStagiaire);
                const updatedStagiaires = stagiaires.map(stagiaire =>
                    stagiaire.id === savedStagiaire.id ? savedStagiaire : stagiaire
                );
                setStagiaires(updatedStagiaires);
            } else {
                const savedStagiaire = await addStagiaire(newStagiaire);
                setStagiaires([...stagiaires, savedStagiaire]);
            }
            handleCloseModal();
        } catch (error) {
            console.error('Error saving stagiaire:', error);
            alert('Failed to save stagiaire');
        }
    };
    

    return (
        <div className="p-5 bg-gray-200 mx-auto my-0 mt-24 rounded-2xl text-gray-800 w-11/12 md:w-2/3">
            <h1 className="text-3xl font-bold text-center mb-8">Liste de stagiaires</h1>
            {isModalOpen && (
                <NouveauStagiaireModal
                    onClose={handleCloseModal}
                    onSave={handleSaveStagiaire}
                    initialData={currentStagiaire}
                    isEditMode={isEditMode}
                />
            )}
            <div className="m-5">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th scope="col" className="border border-gray-300 p-2">Nom</th>
                            <th scope="col" className="border border-gray-300 p-2">Prénom</th>
                            <th scope="col" className="border border-gray-300 p-2">Date de début</th>
                            <th scope="col" className="border border-gray-300 p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stagiaires.map(stagiaire => (
                            <tr key={stagiaire.id} className="even:bg-gray-100 odd:bg-white hover:bg-gray-300">
                                <td className="border border-gray-300 p-2">{stagiaire.lastName}</td>
                                <td className="border border-gray-300 p-2">{stagiaire.firstName}</td>
                                <td className="border border-gray-300 p-2">{stagiaire.dateCreated}</td>
                                <td className="border border-gray-300 p-2">
                                    <Link to="#" className="text-blue-500 hover:text-blue-800" onClick={() => handleView(stagiaire.id)}>Voir</Link>
                                    {' | '}
                                    <button className="text-yellow-500 hover:text-yellow-800" onClick={() => handleOpenModal(stagiaire)}>Modifier</button>
                                    {' | '}
                                    <button className="text-red-500 hover:text-red-800"onClick={() => handleDelete(stagiaire.id)}>Supprimer</button>
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
                    onClick={() => handleOpenModal()}
                >
                    Ajouter un stagiaire
                </button>
            </div>
        </div>
    );
};

export default ListeStagiaires;
