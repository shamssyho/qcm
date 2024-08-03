const API_URL = 'http://localhost:3000/api'; // Base URL for the API

interface Stagiaire {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
}

export const fetchQuestionnaires = async () => {
  const response = await fetch(`${API_URL}/questionnaires`);
  if (!response.ok) {
    throw new Error('Failed to fetch questionnaires');
  }
  return await response.json();
};

export const fetchQuestionnaireById = async (id: number) => {
  const response = await fetch(`${API_URL}/questionnaires/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch questionnaire with ID: ${id}`);
  }
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



// Fetch all stagiaires
export const fetchStagiaires = async (): Promise<Stagiaire[]> => {
  const response = await fetch(`${API_URL}/stagiaires`);
  if (!response.ok) {
    throw new Error('Failed to fetch stagiaires');
  }
  return response.json();
}

// Add a new stagiaire
export const addStagiaire = async (stagiaire: Stagiaire): Promise<Stagiaire> => {
  const response = await fetch(`${API_URL}/stagiaires`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(stagiaire)
  });
  if (!response.ok) {
    throw new Error('Failed to add stagiaire');
  }
  return response.json();
}

// Update a stagiaire
export const updateStagiaire = async (id: number, stagiaire: Stagiaire): Promise<Stagiaire> => {
  const response = await fetch(`${API_URL}/stagiaires/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(stagiaire)
  });
  if (!response.ok) {
    throw new Error('Failed to update stagiaire');
  }
  return response.json();
}

// Delete a stagiaire
export const deleteStagiaire = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/stagiaires/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error('Failed to delete stagiaire');
  }
}
