import { StagiairesI } from "../interfaces/StagiairesI";
const API_URL = 'http://localhost:3000/api'; // Base URL for the API

// ################################ Questionnaire ###################################### //

export const fetchQuestionnaires = async () => {
    const response = await fetch(`${API_URL}/questionnaires`);
    if (!response.ok) {
        throw new Error('Failed to fetch questionnaires');
    }
    const data = await response.json();
    console.log('Response data:', data); // Affichez les données pour déboguer
    return data;
};


export const fetchQuestionnaireById = async (id: number) => {
  const response = await fetch(`${API_URL}/questionnaires/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch questionnaire with ID: ${id}`);
  }
  console.log('QUESTIONNaireeee BY ID : ', response);
  
  return await response.json();
};

export const createQuestionnaire = async (data: { name: string; description: string }) => {
  const response = await fetch(`${API_URL}/questionnaires`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error('Failed to create questionnaire');
  }
  return await response.json();
};

export const updateQuestionnaire = async (id: number, data: { name?: string; description?: string }) => {
  const response = await fetch(`${API_URL}/questionnaires/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error(`Failed to update questionnaire with ID: ${id}`);
  }
  return await response.json();
};

export const deleteQuestionnaire = async (id: number) => {
  const response = await fetch(`${API_URL}/questionnaires/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error(`Failed to delete questionnaire with ID: ${id}`);
  }
};

// ############################## Stagiaire ##################################### //

// Obtenir tous les stagiaires
export const fetchAllStagiaires = async () => {
  const response = await fetch(`${API_URL}/stagiaires`);
  if (!response.ok) {
      throw new Error('Failed to fetch stagiaires');
  }
  return await response.json();
};

// Fetch a single stagiaire's details
export const fetchStagiaireById = async (id: number): Promise<StagiairesI> => {
  const response = await fetch(`${API_URL}/stagiaires/${id}`);
  if (!response.ok) {
      throw new Error('Failed to fetch stagiaire details');
  }
  return await response.json();
};

// Ajouter un stagiaire
export const addStagiaire = async (stagiaireData: StagiairesI): Promise<StagiairesI> => {
  const response = await fetch(`${API_URL}/stagiaires`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(stagiaireData)
  });
  if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to add stagiaire: ${errorMessage}`);
  }
  return response.json();
};

// Mettre à jour un stagiaire
export const updateStagiaire = async (id: number, stagiaireDetails: StagiairesI): Promise<StagiairesI> => {
  const response = await fetch(`${API_URL}/stagiaires/${id}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(stagiaireDetails)
  });
  if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to update stagiaire: ${errorMessage}`);
  }
  return response.json();
};


// Désactiver un stagiaire
export const deactivateStagiaire = async (id: number): Promise<boolean> => {
  const response = await fetch(`${API_URL}/stagiaires/${id}/deactivate`, {
      method: 'PUT',
  });
  if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to deactivate stagiaire: ${errorMessage}`);
  }
  return response.ok;
};

// ################################### Reponse Stagiaire ################################## //

// Fetch responses by stagiaire ID
export const fetchResponsesByStagiaireId = async (stagiaireId: number) => {
  const response = await fetch(`${API_URL}/reponses/stagiaire/${stagiaireId}`);
  if (!response.ok) {
      throw new Error('Failed to fetch responses');
  }
  return await response.json();
};

// ##################################### Question ###################################### //

// Obtenir toutes les questions
export const fetchAllQuestions = async () => {
    const response = await fetch(`${API_URL}/questions`);
    if (!response.ok) {
        throw new Error('Failed to fetch questions');
    }
    return await response.json();
};

// Obtenir une question par ID
export const fetchQuestionById = async (id: number) => {
    const response = await fetch(`${API_URL}/questions/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch question with ID ${id}`);
    }
    
    return await response.json();
};

// Créer une nouvelle question
export const createQuestion = async (question: { questionTexte: string; choix: string[]; nbreReponses: number; reponsesCorrectes: number[] }) => {
    const response = await fetch(`${API_URL}/questions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(question)
    });
    if (!response.ok) {
        throw new Error('Failed to create question');
    }
    return await response.json();
};

// Mettre à jour une question
export const updateQuestion = async (id: number, questionDetails: { questionTexte?: string; choix?: string[]; nbreReponses?: number; reponsesCorrectes?: number[] }) => {
    const response = await fetch(`${API_URL}/questions/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(questionDetails)
    });
    if (!response.ok) {
        throw new Error(`Failed to update question with ID ${id}`);
    }
    return await response.json();
};

// Supprimer une question
export const deleteQuestion = async (id: number) => {
    const response = await fetch(`${API_URL}/questions/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error(`Failed to delete question with ID ${id}`);
    }
    return response;
};

export const fetchQuestionsByQuestionnaire = async (questionnaireId) => {
    const response = await fetch(`${API_URL}/questions/questionnaire/${questionnaireId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch questions');
    }
    return await response.json();
};

  
