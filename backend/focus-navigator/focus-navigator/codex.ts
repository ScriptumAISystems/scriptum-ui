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
