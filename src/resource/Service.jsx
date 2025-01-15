// src/apiService.js
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyDqYgOeVpljNvC2aaCTjf9o_zY1JqiGKI4'); // Replace with your actual API key
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export const generateStory = async (prompt) => {
  try {
    const response = await model.generateContent(prompt);
    return response.response.text();
  } catch (error) {
    console.error('Error generating story:', error);
    throw error;
  }
};

// export const generateStory = async (inputPrompt) => {

//   const apiKey = "AIzaSyDqYgOeVpljNvC2aaCTjf9o_zY1JqiGKI4";
//   const endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

//   const requestBody = {
//     contents: [
//       {
//         parts: [
//           { text: inputPrompt || 'Write a story about a magic backpack.' },
//         ],
//       },
//     ],
//   };

//   try {
//     const response = await fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`, 
//       },
//       body: JSON.stringify(requestBody),
//     });

//     // Log the entire response object
//     // console.log('Response:', response);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
 
//   } catch (error) {
//     console.error('Error fetching data:', error);
//    }
// };
