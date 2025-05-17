import axios from 'axios';

export const getSnapshotsForUser = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/snapshots/user/${userId}`, {
    withCredentials: true
  });
  return response.data;
};