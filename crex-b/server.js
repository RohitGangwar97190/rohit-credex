require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

//   origin: 'http://localhost:3000', 
//   methods: ['GET', 'POST'], 
//   credentials: true 
// }));
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash', // or 'gemini-pro', depending on your access
    });

    const result = await model.generateContent(prompt);

    const responseText =
      result?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, no response.";

    res.json({ response: responseText });
  } catch (error) {
    console.error('Gemini API error:', error);
    res.status(500).json({ error: 'Failed to get response from Gemini API' });
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
