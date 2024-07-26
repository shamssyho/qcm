import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Déclenchez une action de déconnexion ici, comme nettoyer l'état de l'utilisateur
        // dispatch(logout());

        // Redirigez vers la page de connexion ou d'accueil après la déconnexion
        navigate('/login');
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <button
                onClick={openModal}
                className="bg-red-500 text-white px-4 rounded hover:bg-red-700"
            >
                Déconnexion
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-md w-96">
                        <h1 className="text-2xl font-bold mb-6">Déconnexion</h1>
                        <p className="text-gray-700 mb-4">Êtes-vous sûr de vouloir vous déconnecter ?</p>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={closeModal}
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={handleLogout}
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                            >
                                Se déconnecter
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Logout;
