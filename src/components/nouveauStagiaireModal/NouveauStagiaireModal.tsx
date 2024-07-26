import React, { useState } from 'react';
import { StagiaireI } from "../../interfaces/StagiaireI";

interface StagiaireFormProps {
    onClose: () => void;
    onSave: (stagiaire: StagiaireI) => void;
}

const NouveauStagiaireModal: React.FC<StagiaireFormProps> = ({ onClose, onSave }) => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [moyenne, setMoyenne] = useState<number | undefined>(undefined);
    const [dateDebut, setDateDebut] = useState(getCurrentDate());

    function getCurrentDate(): string {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const year = today.getFullYear();
        return `${year}-${month}-${day}`;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formattedDate = dateDebut.split('-').reverse().join('/');
        onSave({ id: Date.now(), nom, prenom, moyenne, dateDebut: formattedDate });
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Ajouter un stagiaire</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Nom *</label>
                        <input
                            type="text"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Prénom *</label>
                        <input
                            type="text"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Moyenne </label>
                        <input
                            type="number"
                            value={moyenne !== undefined ? moyenne : ''}
                            onChange={(e) => setMoyenne(e.target.value ? parseFloat(e.target.value) : undefined)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Date de début *</label>
                        <input
                            type="date"
                            value={dateDebut}
                            onChange={(e) => setDateDebut(e.target.value)}
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
                            Ajouter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default NouveauStagiaireModal;
