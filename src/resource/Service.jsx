// src/apiService.js
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyDqYgOeVpljNvC2aaCTjf9o_zY1JqiGKI4'); // Replace with your actual API key
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export const generateStory = async (prompt) => {
  try {
    const response = await model.generateContent(prompt + "story with title");
    return response.response.text();
  } catch (error) {
    console.error('Error generating story:', error);
    throw error;
  }
}; 
