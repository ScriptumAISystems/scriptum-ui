// src/services/apiService.ts

/**
 * API Service to interact with FastAPI backend.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
const TOKEN = import.meta.env.VITE_API_TOKEN || 'secret-token';

export type Mood = {
  mood: string;
  message: string;
};

export type Agent = {
  id: string;
  name: string;
  status: string;
  description: string;
  last_task: string;
};

export type ActionResponse = {
  status: string;
  message: string;
};

/**
 * Helper to build headers with Authorization token.
 */
function authHeaders(): HeadersInit {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  };
}

export async function fetchMood(): Promise<Mood> {
  const response = await fetch(`${API_BASE_URL}/mood`, {
    headers: authHeaders(),
  });

  if (!response.ok) {
    throw new Error(`fetchMood failed: ${response.statusText}`);
  }

  return response.json();
}

export async function fetchAgents(): Promise<Agent[]> {
  const response = await fetch(`${API_BASE_URL}/agents`, {
    headers: authHeaders(),
  });

  if (!response.ok) {
    throw new Error(`fetchAgents failed: ${response.statusText}`);
  }

  const data = await response.json();
  return data.agents as Agent[];
}

export async function postAction(action: string): Promise<ActionResponse> {
  const response = await fetch(`${API_BASE_URL}/action`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ action }),
  });

  if (!response.ok) {
    throw new Error(`postAction failed: ${response.statusText}`);
  }

  return response.json();
}
