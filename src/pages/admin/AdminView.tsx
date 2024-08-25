import React from 'react';

const AdminView: React.FC = () => {
    const handleLogout = () => {
        window.location.reload(); // Simule une déconnexion en rechargeant la page
    };

    return (
        <div>
            <nav className="bg-blue-500 p-4">
                <ul className="flex space-x-4">
                    <li><a href="/dashboard" className="text-white">Dashboard</a></li>
                    <li><a href="/questionnaires" className="text-white">Questionnaires</a></li>
                    <li><a href="/users" className="text-white">Utilisateurs</a></li>
                    <li>
                        <button onClick={handleLogout} className="text-white">Déconnexion</button>
                    </li>
                </ul>
            </nav>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Bienvenue, Admin</h1>
                <p>Vous avez accès à toutes les fonctionnalités d'administration.</p>
            </div>
        </div>
    );
};

export default AdminView;
