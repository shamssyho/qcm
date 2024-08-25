import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminView from './admin/AdminView';

const Home: React.FC = () => {
    const [role, setRole] = useState<string | null>(null);

    const handleSelectRole = (selectedRole: string) => {
        setRole(selectedRole);
    };

    if (role === 'admin') {
        return <AdminView />;
    }

    if (role === 'stagiaire') {
        return <StagiaireView />;
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl text-center">
                <h1 className="text-4xl font-bold text-purple-700 mb-6">Bienvenue sur QCM Plus</h1>
                <p className="text-lg text-gray-700 mb-6">
                    QCM Plus est une application de gestion de questionnaires à choix multiples (QCM) qui permet aux administrateurs de créer des questionnaires et de les attribuer aux stagiaires. Les stagiaires peuvent répondre aux questionnaires et recevoir des résultats immédiats.
                </p>
                <div className="text-left">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fonctionnalités principales :</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Gestion des questionnaires par les administrateurs</li>
                        <li>Création de questions à choix multiples avec plusieurs bonnes réponses</li>
                        <li>Suivi des résultats des stagiaires</li>
                        <li>Accès aux tableaux de bord spécifiques selon le rôle (admin ou stagiaire)</li>
                        <li>Authentification sécurisée pour protéger l'accès aux fonctionnalités</li>
                    </ul>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comment ça marche ?</h2>
                    <p className="text-gray-700 mb-4">
                        Les administrateurs peuvent créer des comptes pour les stagiaires, créer des questionnaires et les gérer. Les stagiaires, une fois connectés, peuvent accéder à leurs questionnaires, les compléter et visualiser leurs résultats.
                    </p>
                    <p className="text-gray-700 mb-6">
                        L'application est divisée en deux tableaux de bord :
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>
                            <span className="font-semibold">Tableau de bord Admin :</span> Gestion des utilisateurs, création de questionnaires et analyse des résultats.
                        </li>
                        <li>
                            <span className="font-semibold">Tableau de bord Stagiaire :</span> Répondre aux questionnaires attribués et consulter les scores obtenus.
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                    <Link
                        to="/login"
                        className="px-6 py-2 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800"
                    >
                        Se connecter
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Home;
