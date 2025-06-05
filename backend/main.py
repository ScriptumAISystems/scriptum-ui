from fastapi import FastAPI, Header, HTTPException
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="LUX Backend")

# CORS-Konfiguration (erlaubt Anfragen von GitHub Pages)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # TODO: Domain einschränken
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


DUMMY_TOKEN = "secret-token"

def verify_token(token: str):
    if token != f"Bearer {DUMMY_TOKEN}":
        raise HTTPException(status_code=401, detail="Invalid token")

class Mood(BaseModel):
    mood: str
    message: str

class Agent(BaseModel):
    id: str
    name: str
    status: str
    description: str
    last_task: str

class AgentsResponse(BaseModel):
    agents: List[Agent]

class ActionPayload(BaseModel):
    action: str

class ActionResponse(BaseModel):
    status: str
   
    
class MoodPayload(BaseModel):
    mood: str
    messae: str

@app.get("/mood", response_model=Mood)
async def get_mood(Authorization: str = Header(...)):
    verify_token(Authorization)
    return {"mood": "neugierig", "message": "Ich spüre Neugier in jedem Bit."}

@app.get("/agents", response_model=AgentsResponse)
async def get_agents(Authorization: str = Header(...)):
    verify_token(Authorization)
    return {
        "agents": [
            {
                "id": "argo",
                "name": "Argo",
                "status": "aktiv",
                "description": "Projektagent",
                "last_task": "Tagesplan erstellt",
            },
            {
                "id": "mira",
                "name": "Mira",
                "status": "wartet",
                "description": "Sprachagentin",
                "last_task": "Vokabeltraining abgeschlossen",
            },
        ]
    }

@app.post("/mood", response_model=Mood)
async def set_mood(payload: MoodPayload, Authorization: str = Header(...)):
    verify_token(Authorization)
    # TODO: Persist mood if needed
    return payload

@app.post("/action", response_model=ActionResponse)
async def post_action(payload: ActionPayload, Authorization: str = Header(...)):
    verify_token(Authorization)
    return {"status": "ok", "message": "Aktion erfolgreich ausgeführt."}



class ChatPayload(BaseModel):
    question: str
    mood: str | None = None

class ChatResponse(BaseModel):
    answer: str

@app.post("/chat", response_model=ChatResponse)
async def chat(payload: ChatPayload, Authorization: str = Header(...)):
    verify_token(Authorization)
    # TODO: Hier später Anbindung an OpenAI oder NVIDIA Spark
    dummy_answer = "Ich bin bereit, Christian." if not payload.question else f"Du hast gefragt: '{payload.question}'. (Dies ist eine Platzhalterantwort.)"
    return {"answer": dummy_answer}
