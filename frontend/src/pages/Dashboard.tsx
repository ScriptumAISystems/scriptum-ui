import React, { useEffect, useState } from 'react';
import { fetchMood, fetchAgents } from '../services/apiService';
import { useMoodStore } from '../store/moodStore';

const Dashboard: React.FC = () => {
  const { mood, setMood } = useMoodStore();
  const [agents, setAgents] = useState<any[]>([]);

  useEffect(() => {
    fetchMood().then(setMood).catch(console.error);
    fetchAgents().then(setAgents).catch(console.error);
  }, [setMood]);

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h2>Mood</h2>
      {mood ? (
        <p>
          🌞 {mood.mood} – {mood.message}
        </p>
      ) : (
        <p>Lade Stimmung …</p>
      )}

      <h2>Agenten</h2>
      <ul>
        {agents.map((a) => (
          <li key={a.id}>
            {a.name} ({a.status}) – {a.last_task}
          </li>
        ))}
      </ul>

      <h2>Quick Actions</h2>
      <button onClick={() => alert('Dummy‑Action ausgeführt')}>Start Day</button>
    </div>
  );
};

export default Dashboard;
