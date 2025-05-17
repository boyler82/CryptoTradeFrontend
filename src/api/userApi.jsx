import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; 

// Rejestracja użytkownika
export const registerUser = async (email, password) => {
  const response = await axios.post(
    `${API_BASE_URL}/user`,
    { email, passwordHash: password },
    { withCredentials: true } // ⬅️ ważne!
  );
  return response.data;
};

export const loginUser = async (email, password) => {
  const response = await axios.post(
    `${API_BASE_URL}/login`,
    { email, password },
    { withCredentials: true } 
  );
  return response.data; 
};