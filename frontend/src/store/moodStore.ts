import create from 'zustand';
import { Mood } from '../services/apiService';

interface MoodState {
  mood?: Mood;
  setMood: (mood: Mood) => void;
}

export const useMoodStore = create<MoodState>((set) => ({
  mood: undefined,
  setMood: (mood) => set({ mood }),
}));
