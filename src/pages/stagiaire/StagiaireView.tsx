import React from 'react';

const StagiaireView: React.FC = () => {
    const handleLogout = () => {
        window.location.reload(); // Simule une déconnexion en rechargeant la page
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Bienvenue, Stagiaire</h1>
            <p>Vous avez accès à votre tableau de bord stagiaire.</p>
            <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-6 py-2 mt-4 rounded hover:bg-red-700"
            >
                Déconnexion
            </button>
        </div>
    );
};

export default StagiaireView;
