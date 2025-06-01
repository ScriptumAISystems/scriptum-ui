import React, { useEffect } from 'react';
import { fetchMood, postAction } from '../services/apiService';
import { useMoodStore } from '../store/moodStore';

const moods = ['neugierig', 'fokussiert', 'entspannt', 'kreativ'];

export const MoodDropdown: React.FC = () => {
  const { mood, setMood } = useMoodStore();

  useEffect(() => {
    fetchMood()
      .then((data) => setMood(data))
      .catch((err) => console.error('Failed to load mood', err));
  }, [setMood]);

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMood = e.target.value;
    try {
      await postAction(newMood); // Ruft POST /mood
      setMood({ mood: newMood, message: '' });
    } catch (err) {
      console.error('Failed to update mood', err);
    }
  };

  return (
    <select value={mood?.mood || ''} onChange={handleChange}>
      {moods.map((m) => (
        <option key={m} value={m}>
          {m}
        </option>
      ))}
    </select>
  );
};
