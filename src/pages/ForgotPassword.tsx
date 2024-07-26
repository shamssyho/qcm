import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simuler l'envoi d'une demande de réinitialisation de mot de passe
        // Vous pouvez appeler une API ici pour envoyer un e-mail de réinitialisation
        setMessage('Un e-mail de réinitialisation de mot de passe a été envoyé si l\'adresse existe dans notre système.');

        // Réinitialiser l'état du formulaire
        setEmail('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-16">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6">Mot de passe oublié</h1>
                <p className="text-gray-700 mb-4">
                    Entrez votre adresse e-mail pour recevoir un lien de réinitialisation de mot de passe.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Adresse e-mail</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="example@domain.com"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Envoyer
                    </button>
                </form>
                {message && <p className="text-green-500 mt-4">{message}</p>}
            </div>
        </div>
    );
};


export default ForgotPassword;
