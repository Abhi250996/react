export const generateStory = async (inputPrompt) => {
  try {
    const apiKey = import.meta.env.VITE_API_KEY; // Replace with your actual API key if not using env
    const endpoint = "https://api.openai.com/v1/chat/completions";

    const data = {
      model: "gpt-4o-mini", // Ensure this model is valid
      messages: [
        {
          role: "developer",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: "Hello!",
        },
      ],
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error Response:", errorData);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Chat Completion Response:", result);
    return result;
  } catch (error) {
    console.error("Error Message:", error.message);
    return null;
  }
};
