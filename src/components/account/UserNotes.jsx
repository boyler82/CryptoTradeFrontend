import { useEffect, useState } from 'react';
import {
  getNotesForUser,
  createNote,
  deleteNote,
  updateNote,
} from '../../api/notesApi';

const UserNotes = ({ userId }) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '' });

  useEffect(() => {
    if (userId) {
      getNotesForUser(userId)
        .then((res) => setNotes(res.data))
        .catch((err) => console.error('Błąd pobierania notatek:', err));
    }
  }, [userId]);

  const handleCreate = async () => {
    if (!newNote.title || !newNote.content) return;
    try {
      await createNote({ ...newNote, userId });
      setNewNote({ title: '', content: '' });
      const res = await getNotesForUser(userId);
      setNotes(res.data);
    } catch (err) {
      console.error('Błąd dodawania notatki:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      setNotes(notes.filter((n) => n.id !== id));
    } catch (err) {
      console.error('Błąd usuwania notatki:', err);
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold">Notatki użytkownika</h3>

      <div className="flex flex-col gap-2 mb-4">
        <input
          className="border p-1"
          placeholder="Tytuł"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          className="border p-1"
          placeholder="Treść"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        />
        <button className="bg-blue-500 text-white px-2 py-1" onClick={handleCreate}>
          Dodaj notatkę
        </button>
      </div>

      <ul className="space-y-2">
        {notes.map((note) => (
          <li key={note.id} className="border p-2 rounded">
            <div className="flex justify-between items-center">
              <strong>{note.title}</strong>
              <button onClick={() => handleDelete(note.id)} className="text-red-500">
                ❌
              </button>
            </div>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserNotes;