Skip to content
Navigation Menu
ScriptumAISystems
scriptum-ui

Type / to search
Code
Issues
14
Pull requests
6
Discussions
Actions
Projects
1
Wiki
Security
Insights
Settings
Files
Go to file
t
focus-navigator content loaded
.github
agent-hub
backend
app
focus-navigator
focus-navigator
codex.ts
router.ts
test-data.json
types.ts
router.ts
webhook.ts
.gitkeep
Dockerfile
__init__.py
app.ts
main.py
requirements.txt
config
devops
docs
frontend
scripts
LICENSE
README.md
docker-compose.yml
scriptum-ui/backend/focus-navigator/focus-navigator
/codex.ts
ScriptumAISystems
ScriptumAISystems
Create codex.ts
27727bd
 · 
1 hour ago

Code

Blame
28 lines (23 loc) · 707 Bytes
import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

export async function evaluateFocusPlan(data: any): Promise<string> {
  const prompt = `
Garmin data:
- Body Battery: ${data.bodyBattery}
- Sleep: ${data.sleep}
- Stress: ${data.stress}

Please suggest a day structure with:
- Focus time blocks
- Breaks
- Activity
- Motivation message
`;

  const response = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
  });

  return response.data.choices[0].message?.content ?? '';
}
scriptum-ui/backend/focus-navigator/focus-navigator/codex.ts at main · ScriptumAISystems/scriptum-ui 
