import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; 

export const fetchCryptosSimple = async () => {
  const response = await axios.get(`${API_BASE_URL}/crypto-basic/list`);
  return response.data;
};


export const buyCrypto = async ({ userId, cryptoBasicId, amountUsd }) => {
  const response = await axios.post(
    `http://localhost:8080/wallet/buy`,
    { userId, cryptoBasicId, amountUsd },
    { withCredentials: true }
  );
  return response.data;
};