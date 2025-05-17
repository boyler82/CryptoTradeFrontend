import axios from 'axios';

export const getHoldingsByUser = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/holding/user/${userId}`);
  return response.data;
};


export const addHolding = async (userId, cryptoBasicId, amount, currency) => {
  console.log("DTO:", { userId, cryptoBasicId, amount, currency });

  const response = await axios.post(
    'http://localhost:8080/holding',
    {
      userId,
      cryptoBasicId,
      amount,
      currency,
    },
    { withCredentials: true } 
  );

  return response.data;
};