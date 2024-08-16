import React, { useState, useEffect } from 'react';

interface NewQuestionnaireFormProps {
    onSave: (questionnaire: { name: string, description: string }) => void;
    onClose: () => void;
    initialData?: { name: string; description: string };
}

const NewQuestionnaireForm: React.FC<NewQuestionnaireFormProps> = ({ onSave, onClose, initialData }) => {
    const [name, setName] = useState(initialData?.name || '');
    const [description, setDescription] = useState(initialData?.description || '');

    useEffect(() => {
        if (initialData) {
            setName(initialData.name);
            setDescription(initialData.description);
        }
    }, [initialData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ name, description });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-600 mb-2">Nom du Questionnaire:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-600 mb-2">Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="flex justify-end space-x-4">
                <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                    Annuler
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Enregistrer
                </button>
            </div>
        </form>
    );
};

export default NewQuestionnaireForm;
