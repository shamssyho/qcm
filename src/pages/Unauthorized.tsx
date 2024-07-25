import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Accès non autorisé</h1>
            <p className="mb-4">Vous n'avez pas les permissions nécessaires pour accéder à cette page.</p>
            <Link to="/" className="text-blue-500">Retour à l'accueil</Link>
        </div>
    );
};

export default Unauthorized;
