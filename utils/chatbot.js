import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: 'your-openai-api-key', // Ersetze mit deinem echten API-Key
});

export async function generateResponse(prompt) {
  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo', // Oder das Modell, das du verwenden möchtest
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error generating response: ', error);
    return 'Sorry, I encountered an error.';
  }
}
