// src/context/StagiaireContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { StagiairesI } from "../interfaces/StagiairesI"; // Assurez-vous que le chemin vers l'interface est correct

// Définir le type du contexte
interface StagiaireContextType {
  stagiaire: StagiairesI | null;
  setStagiaire: (stagiaire: StagiairesI) => void;
}

// Créer le contexte avec une valeur par défaut
const StagiaireContext = createContext<StagiaireContextType | undefined>(undefined);

// Créer le fournisseur du contexte
export const StagiaireProvider = ({ children }: { children: ReactNode }) => {
  const [stagiaire, setStagiaire] = useState<StagiairesI | null>(null);

  return (
    <StagiaireContext.Provider value={{ stagiaire, setStagiaire }}>
      {children}
    </StagiaireContext.Provider>
  );
};

// Créer un hook personnalisé pour utiliser le contexte
export const useStagiaire = () => {
  const context = useContext(StagiaireContext);
  if (!context) {
    throw new Error('useStagiaire must be used within a StagiaireProvider');
  }
  return context;
};
