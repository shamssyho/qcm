import React from 'react';
import { useParams } from 'react-router-dom';
import mockStagiaires from '../../../assets/mockStagiares';

const DetailsStagiaire: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const stagiaire = mockStagiaires.find(s => s.id_stagiaire === parseInt(id ?? '', 10));

    if (!stagiaire) {
        return <div>Stagiaire non trouvé</div>;
    }

    return (
        <div>
            <h1>Détails du Stagiaire</h1>
            <p>Nom: {stagiaire.nom}</p>
            <p>Prénom: {stagiaire.prenom}</p>
            <p>Date de début: {stagiaire.date_created}</p>
        </div>
    );
};

export default DetailsStagiaire;
