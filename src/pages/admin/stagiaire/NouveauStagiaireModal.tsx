import React, { useEffect, useState } from 'react';
import { StagiairesI } from '../../../interfaces/StagiairesI';

interface StagiaireFormProps {
    onClose: () => void;
    onSave: (stagiaire: StagiairesI) => void;
    initialData?: StagiairesI; // Optionnel, pour la modification
    isEditMode: boolean;
}

const NouveauStagiaireModal: React.FC<StagiaireFormProps> = ({ onClose, onSave, initialData, isEditMode }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dateCreated, setDateCreated] = useState('');

    /* function getCurrentDate(): string {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const year = today.getFullYear();
        return `${year}-${month}-${day}`;
    } */

    useEffect(() => {
        if (initialData) {
            setFirstName(initialData.firstName);
            setLastName(initialData.lastName);
            setEmail(initialData.email);
            setDateCreated(initialData.dateCreated);
            setPassword(initialData.password);
        }
    }, [initialData]);

    /* const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formattedDate = dateDebut.split('-').reverse().join('/');
        onSave({ id_stagiaire: Date.now(), nom, prenom, date_created: formattedDate });
        onClose();
    }; */

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newStagiaire: StagiairesI = {
            ...initialData,
            firstName,
            lastName,
            email,
            password,
            dateCreated: dateCreated || new Date().toISOString(),  // Utiliser la date actuelle si aucune date n'est fournie
            active: initialData ? initialData.active : true  // Assume true si c'est un nouvel ajout
        };
        onSave(newStagiaire);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-md w-2/4">
                <h2 className="text-xl font-bold mb-4">{isEditMode ? "Modifier un stagiaire" : "Ajouter un stagiaire"}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Prénom *</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Nom *</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email *</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Password *</label>
                        <input
                            type="password"
                            value={password || ''}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Date de création *</label>
                        <input
                            type="date"
                            value={dateCreated}
                            onChange={(e) => setDateCreated(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-4 py-2 rounded"
                        >
                             {isEditMode ? "Modifier" : "Ajouter"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default NouveauStagiaireModal;
