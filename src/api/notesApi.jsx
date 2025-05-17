import axios from 'axios';

const BASE_URL = 'http://localhost:8080/notes';

export const createNote = (note) =>
  axios.post(BASE_URL, note, { withCredentials: true });

export const getNotesForUser = (userId) =>
  axios.get(`${BASE_URL}/user/${userId}`, { withCredentials: true });

export const updateNote = (id, note) =>
  axios.put(`${BASE_URL}/${id}`, note, { withCredentials: true });

export const deleteNote = (id) =>
  axios.delete(`${BASE_URL}/${id}`, { withCredentials: true });