import { useState } from 'react';
import AvatarMood from './components/AvatarMood';
import { Toaster, toast } from 'react-hot-toast';

export default function App() {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!question.trim()) return;
    setLoading(true);
    // TODO: fetch an dein Backend
    await new Promise(r => setTimeout(r, 800)); // Demo‑Delay
    setLoading(false);
  };

  const handleMood = (mood: string) => {
    toast.success(`Emotion „${mood}” übermittelt`);
    // TODO: Call backend / WebRTC signal
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-50 p-6">
      <Toaster position="top-center" />

      <header className="mt-6 mb-8 text-center space-y-1">
        <h1 className="text-2xl font-semibold text-slate-800">
          Willkommen bei <span className="text-indigo-600">Spark Sophia</span>
        </h1>
        <p className="text-sm text-slate-500">Dein persönlicher KI‑Hub</p>
      </header>

      <input
        type="text"
        value={question}
        onChange={e => setQuestion(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSend()}
        placeholder="Stell deine Frage …"
        className="w-full max-w-xl border border-slate-300 rounded-xl px-4 py-3 mb-4
                   placeholder:text-slate-400 focus:outline-none
                   focus:ring-2 focus:ring-indigo-400"
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white
                   font-medium rounded-xl px-6 py-3 transition-transform
                   hover:scale-105 flex items-center gap-2"
      >
        {loading ? (
          <>
            <Spinner /> <span>Sendet …</span>
          </>
        ) : (
          'Senden'
        )}
      </button>

      {/* Emotions */}
      <div className="flex flex-wrap gap-3 mt-6">
        <AvatarMood
          color="green"
          icon="😄"
          text="Glücklich"
          onClick={() => handleMood('Glücklich')}
        />
        <AvatarMood
          color="yellow"
          icon="🟡"
          text="Nachdenklich"
          onClick={() => handleMood('Nachdenklich')}
        />
        <AvatarMood
          color="red"
          icon="⚠️"
          text="Störung"
          onClick={() => handleMood('Störung')}
        />
      </div>

      <footer className="mt-auto text-xs text-slate-400 py-4">
        © 2025 Scriptum AI Systems
      </footer>
    </div>
  );
}

/* Kleiner Inline‑Spinner */
function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}
